var Key = function(keyCode, frequency, volume){
    this.isBeingPlayed = false;
    this.frequency = frequency;
    this.keyCode = keyCode;
    this.volume = volume;
} 

Key.prototype.startPlayingNote = function() {
    this.oscillator = context.createOscillator();
    var sine = 0;
    this.oscillator.type = sine;
    this.oscillator.frequency.value = this.frequency;
    
    this.amplifier = context.createGainNode();
    this.amplifier.gain.value = this.volume;
    
    
    this.oscillator.connect(this.amplifier);
    this.amplifier.connect(context.destination);
    this.oscillator.noteOn(0);
    this.isBeingPlayed = true;
    
}

Key.prototype.stopPlayingNote = function(){
    this.oscillator.noteOff(0);
    this.isBeingPlayed = false;
}

var keyboard = { 
    keys: { 65: new Key(65) },
    init: function(){
        mykeys = this.keys;
        $(".key").each(function(){
            var keycode_span = $(this).find("div[id^='keycode'] p > span");
            var keycode = parseInt(keycode_span.text());
            var frequency_span = $(this).find("div[id^='freq'] p > span");
            var frequency = parseInt(frequency_span.text());
            mykeys[keycode] = new Key(keycode, frequency, 0.5) ;
        });
    },
    hasKey: function(keyCode){
        if (typeof(this.keys[keyCode]) !== "undefined"){
           return true;
        }
        else{
            return false;
        }
    }
};

var context = new webkitAudioContext();

$(document).ready(function(){
    keyboard.init();
});


$(document).on("keydown", function (event) {
    if (keyboard.hasKey(event.keyCode)){
        var key = keyboard.keys[event.keyCode];
        if (!key.isBeingPlayed){
            key.startPlayingNote();
        }
    }
});

$(document).on("keyup", function (event) {
    if (keyboard.hasKey(event.keyCode)){
        var key = keyboard.keys[event.keyCode];
        if (key.isBeingPlayed){
            key.stopPlayingNote();
        }
    }
});

