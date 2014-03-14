function Key(keycode, html_id)
{
    this.oscillator = context.createOscillator();
    this.panners = context.createPanner();
    this.delays = context.createDelayNode();
    this.filters = context.createBiquadFilter();
    this.volumes = context.createGainNode();
    this.keycode = keycode;
    this.html_id = html_id;
    this.keyBeingPlayed = false;
    buildIDsForHTML();

    var buildIDsForHTML = function()   // Only visible inside Restaurant()
    {
        this.frequency_id = "frequency_" + this.html_id;
        this.wave_id = "wave_" + this.html_id;
        this.panner_id = "panner_" + this.html_id;
        this.delay_id = "delay_" + this.html_id;
        this.filter_id = "filter_" + this.html_id;
        this.volume_id = "volume_" + this.html_id;
    }
}

Key.prototype.doesKeyMatchKeyEvent = function(keyFromEvent)
{
    if (this.keycode == keyFromEvent)
        return true;

    return false;
}

Key.prototype.isKeyPlaying = fucntion()
{
    return this.keyBeingPlayed;
}

Key.prototype.playNote = function()
{
    this.keyBeingPlayed = true;

    var osc = document.getElementById(this.html_id);
    $(osc).addClass('cool-border');

    var oscPitch = document.getElementById(this.frequency_id).value;
    var panX = document.getElementById(this.panner_id).value;
    this.oscillator.type = parseInt(document.getElementById(this.wave_type_id).value);
    this.oscillator.frequency.value = oscPitch;
    this.volume.gain.value = document.getElementById(this.volume_id).value;
    this.filter.type = filter.BANDPASS
    this.filter.detune.value = document.getElementById(filter_id).value;
    this.panner.setPosition(panX, 0, 0);

    this.oscillator.connect(this.panner);
    this.panner.connect(this.filter);
    this.filter.connect(this.volume);
    this.volume.connect(context.destination);

    this.oscillator.noteOn(0);
}

Key.prototype.stopNote() = function()
{
    this.keyBeingPlayed = false;

    var osc = document.getElementById(html_id)
    $(osc).removeClass('cool-border');
    oscillator.noteOff(0);
    oscillator = context.createOscillator();
}

$(document).ready(function()
{
    var context = new webkitAudioContext();

    var keys = new Array(13);
    keys.push(new Key(16, 1));//shift
    keys.push(new Key(81, 2));//q
    keys.push(new Key(83, 3));//s
    keys.push(new Key(69, 4));//e
    keys.push(new Key(70, 5));//f
    keys.push(new Key(71, 6));//g
    keys.push(new Key(89, 7));//y
    keys.push(new Key(74, 8));//j
    keys.push(new Key(73, 9));//i
    keys.push(new Key(76, 10));//l
    keys.push(new Key(80, 11));//p
    keys.push(new Key(222, 12));//'
    keys.push(new Key(221, 13));//]
    average = 0;

    $(document).on("keydown", function(event)
    {
        for (var i = 0; i < keys.length; i++)
        {
            if ((keys[i].doesKeyMatchKeyEvent(event.keyCode) && (keys[i].isKeyPlaying() != true))
            {
                keys[i].playNote();
            }
        }
    });

    $(document).on("keyup", function(event)
    {
        if ((keys[i].doesKeyMatchKeyEvent(event.keyCode) && (keys[i].isKeyPlaying())
        {
            keys[i].stopNote();
        }
    });
});
