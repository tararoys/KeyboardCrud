var Key = function(keycode, html_id)
{
    this.oscillator = context.createOscillator();
    this.panner = context.createPanner();
    this.delay = context.createDelayNode();
    this.filter = context.createBiquadFilter();
    this.volume = context.createGainNode();
    this.keycode = keycode;
    this.html_id = html_id;
    this.keyBeingPlayed = false;
    this.frequency_id = "frequency_" + this.html_id;
    this.wave_id = "wave_" + this.html_id;
    this.panner_id = "panner_" + this.html_id;
    this.delay_id = "delay_" + this.html_id;
    this.filter_id = "filter_" + this.html_id;
    this.volume_id = "volume_" + this.html_id;
}

Key.prototype.doesKeyMatchKeyEvent = function(keyFromEvent)
{
    if (this.keycode == keyFromEvent)
        return true;

    return false;
}

Key.prototype.isKeyPlaying = function()
{
    return this.keyBeingPlayed;
}

Key.prototype.playNote = function()
{
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

    this.oscillator.connect(this.panner);
    this.panner.connect(this.filter);
    this.filter.connect(this.volume);
    this.volume.connect(context.destination);

    if (this.keyBeingPlayed != true)
        this.oscillator.noteOn(0);
    this.keyBeingPlayed = true;
}

Key.prototype.stopNote = function()
{
    this.keyBeingPlayed = false;

    var osc = document.getElementById(this.html_id)
    $(osc).removeClass('cool-border');
    this.oscillator.noteOff(0);
    this.oscillator = context.createOscillator();
}

var context = new webkitAudioContext();

$(document).ready(function()
{
    var keys = [
        new Key(16, 1),//shift
        new Key(81, 2),//q
        new Key(83, 3),//s
        new Key(69, 4),//e
        new Key(70, 5),//f
        new Key(71, 6),//g
        new Key(89, 7),//y
        new Key(74, 8),//j
        new Key(73, 9),//i
        new Key(76, 10),//l
        new Key(80, 11),//p
        new Key(222, 12),//'
        new Key(221, 13)//]
    ]

    setInterval(function(){
        for (var i = 0; i < keys.length; i++)
        {
            if (keys[i].isKeyPlaying())
                keys[i].playNote();
        }
    }, 200);

    $(document).on("keydown", function(event)
    {
        for (var i = 0; i < keys.length; i++)
        {
            console.log(keys[i]);
            if ((keys[i].doesKeyMatchKeyEvent(event.keyCode)) && (keys[i].isKeyPlaying() != true))
            {
                keys[i].playNote();
            }
        }
    });

    $(document).on("keyup", function(event)
    {
        for (var i = 0; i < keys.length; i++)
        {
             if ((keys[i].doesKeyMatchKeyEvent(event.keyCode)) && (keys[i].isKeyPlaying()))
            {
                keys[i].stopNote();
            }
        }
    });
});
