var context = new webkitAudioContext();

  var Key = function(keycode, html_id) {
    this.keycode = keycode;
    this.html_id = html_id;
    this.keyBeingPlayed = false;
    this.frequency_id = "frequency_" + this.html_id;
    this.wave_id = "wave_" + this.html_id;
    this.panner_id = "panner_" + this.html_id;
    this.delay_id = "delay_" + this.html_id;
    this.filter_id = "filter_" + this.html_id;
    this.volume_id = "volume_" + this.html_id;
    this.oscillator = context.createOscillator();
    this.panner = context.createPanner();
    this.delay = new SlapbackDelayNode(this.delay_id);
    this.filter = context.createBiquadFilter();
    this.volume = context.createGainNode();
  }

  var SlapbackDelayNode = function(delay_id) {
    //create the nodes we’ll use
    // console.log(delay_amount);

    this.input = context.createGainNode();
    this.delay = context.createDelayNode();
    var output = context.createGainNode(),
        feedback = context.createGainNode(),
        wetLevel = context.createGainNode();

    //set some decent values
    this.delay.delayTime.value = delay_id.value; //150 ms delay
    feedback.gain.value = 0.5;
    wetLevel.gain.value = 0.5;

    //set up the routing
    this.input.connect(this.delay);
    this.input.connect(output);
    this.delay.connect(feedback);
    this.delay.connect(wetLevel);
    feedback.connect(this.delay);
    wetLevel.connect(output);

    this.connect = function(target) {
      output.connect(target);
    };


  };

  Key.prototype.doesKeyMatchKeyEvent = function(keyFromEvent) {
    if (this.keycode == keyFromEvent)
        return true;

    return false;
  }

  Key.prototype.isKeyPlaying = function() {
    return this.keyBeingPlayed;
  }

  Key.prototype.playNote = function() {
    var osc = document.getElementById(this.html_id);
    $(osc).addClass('cool-border');

    var oscPitch = document.getElementById(this.frequency_id).value;
    var panX = document.getElementById(this.panner_id).value;
    this.oscillator.type = parseInt(document.getElementById(this.wave_id).value);
    this.oscillator.frequency.value = oscPitch;
    this.volume.gain.value = document.getElementById(this.volume_id).value;
    this.filter.type = this.filter.BANDPASS
    this.filter.detune.value = document.getElementById(this.filter_id).value;
    this.panner.setPosition(panX, 0, 0);
    this.delay.delay.delayTime.value = document.getElementById(this.delay_id).value;
    this.oscillator.connect(this.panner);
    this.panner.connect(this.filter);
    this.filter.connect(this.delay.input);
    this.delay.connect(this.volume);
    this.volume.connect(context.destination);

    if (this.keyBeingPlayed != true)
      this.oscillator.noteOn(0);
    this.keyBeingPlayed = true;
  }

  Key.prototype.stopNote = function() {
    this.keyBeingPlayed = false;

    var osc = document.getElementById(this.html_id)
    $(osc).removeClass('cool-border');
    this.oscillator.noteOff(0);
    this.oscillator = context.createOscillator();
  }



$(document).ready(function() {
    var keys = [
        new Key(65, 1),//a
        new Key(87, 2),//w
        new Key(83, 3),//s
        new Key(69, 4),//e
        new Key(68, 5),//d
        new Key(70, 6),//f
        new Key(84, 7),//t
        new Key(71, 8),//g
        new Key(89, 9),//y
        new Key(72, 10),//h
        new Key(85, 11),//u
        new Key(74, 12),//j
        new Key(75, 13),//k
        new Key(79, 14),//o
        new Key(76, 15),//l
        new Key(80, 16),//p
        new Key(186, 17),//;
        new Key(222, 18)//''
    ]

    // console.log(keys);

    setInterval(function() {
        for (var i = 0; i < keys.length; i++)
        {
            if (keys[i].isKeyPlaying())
                keys[i].playNote();
        }
    }, 200);

    $(document).on("keydown", function(event) {
        for (var i = 0; i < keys.length; i++)
        {
            // console.log(keys[i]);
            if ((keys[i].doesKeyMatchKeyEvent(event.keyCode)) && (keys[i].isKeyPlaying() != true))
            {
                keys[i].playNote();
            }
        }
    });

    $(document).on("keyup", function(event) {
        for (var i = 0; i < keys.length; i++)
        {
             if ((keys[i].doesKeyMatchKeyEvent(event.keyCode)) && (keys[i].isKeyPlaying()))
            {
                keys[i].stopNote();
            }
        }
    });


});
