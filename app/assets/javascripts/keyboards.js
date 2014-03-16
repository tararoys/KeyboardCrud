var Key = function (frequency, wave, panner, delay, filter, volume, keycode) {
    this.isBeingPlayed = false;
    this.frequency = frequency;
    this.wave = wave;
    this.panner = panner;
    this.delay = delay;
    this.filter = filter;
    this.volume = volume;
    this.keyCode = keycode;
}

Key.prototype.startPlayingNote = function () {
    this.oscillator = context.createOscillator();
    var sine = 0;
    this.oscillator.type = this.wave;
    this.oscillator.frequency.value = this.frequency;
    
    this.panner_node = context.createPanner();
    this.panner_node.setPosition(this.panner, 0, 0);
    
    this.filter_node = context.createBiquadFilter();
    this.filter_node.type = this.filter_node.BANDPASS;
    this.filter_node.detune.value = this.filter;

    this.amplifier = context.createGainNode();
    this.amplifier.gain.value = this.volume;

    this.oscillator.connect(this.panner_node);
    this.panner_node.connect(this.filter_node);
    this.filter_node.connect(this.amplifier);
    this.amplifier.connect(context.destination);
    this.oscillator.noteOn(0);
    this.isBeingPlayed = true;

}

Key.prototype.stopPlayingNote = function () {
    this.oscillator.noteOff(0);
    this.isBeingPlayed = false;
}

var keyboard = {
    keys: {
    },
    init: function () {
        mykeys = this.keys;
        $(".key").each(function () {

            var frequency_span = $(this).find("div[id^='freq'] p > span");
            var frequency = parseFloat(frequency_span.text());
            
            var wave_span =  $(this).find("div[id^='wave'] p > span");
            var wave = parseInt(wave_span.text());
            
            var panner_span =  $(this).find("div[id^='panner'] p > span");
            var panner = parseInt(panner_span.text());
            
            var delay_span =  $(this).find("div[id^='delay'] p > span");
            var delay = parseFloat(delay_span.text());
            
            var filter_span =  $(this).find("div[id^='filter'] p > span");
            var filter = parseFloat(filter_span.text());
            
            var volume_span =  $(this).find("div[id^='volume'] p > span");
            var volume = parseFloat(volume_span.text());
              
            var keycode_span = $(this).find("div[id^='keycode'] p > span");
            var keycode = parseInt(keycode_span.text());
            mykeys[keycode] = new Key(frequency, wave, panner, delay, filter, volume, keycode);
        });
    },
    hasKey: function (keyCode) {
        if (typeof (this.keys[keyCode]) !== "undefined") {
            return true;
        } else {
            return false;
        }
    }
};

var context = new webkitAudioContext();

$(document).ready(function () {
    keyboard.init();
});

$(document).on("keydown", function (event) {
    if (keyboard.hasKey(event.keyCode)) {
        var key = keyboard.keys[event.keyCode];
        if (!key.isBeingPlayed) {
            key.startPlayingNote();
        }
    }
});

$(document).on("keyup", function (event) {
    if (keyboard.hasKey(event.keyCode)) {
        var key = keyboard.keys[event.keyCode];
        if (key.isBeingPlayed) {
            key.stopPlayingNote();
        }
    }
});