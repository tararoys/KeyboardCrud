$(document).ready(function() {
    context = new webkitAudioContext();
    var compressor = context.createDynamicsCompressor();
    var reverb = context.createConvolver();
    var volume = context.createGainNode();

    frequency_array = new Array();

    oscillators = new Array();

    for (var i = 1; i <= 13; i++) {
      oscillators.push(context.createOscillator());
    }
    //keep track of what keys are pressed and prevent spam keydown
    var keycode_flag = 0;

    var keycode_array = new Array;
    keycode_array["one"]      = 16; //shift
    keycode_array["two"]      = 81; //q
    keycode_array["three"]    = 83; //s
    keycode_array["four"]     = 69; //e
    keycode_array["five"]     = 70; //f
    keycode_array["six"]      = 71; //g
    keycode_array["seven"]    = 89; //y
    keycode_array["eight"]    = 74; //j
    keycode_array["nine"]     = 73; //i
    keycode_array["ten"]      = 76; //l
    keycode_array["eleven"]   = 80; //p
    keycode_array["twelve"]   = 222;//'
    keycode_array["thirteen"] = 221;//]

    average = 0;

    $(document).on("keydown", function(event) {
        if (event.keyCode == keycode_array["one"]  && !(keycode_flag & 4096)) {
            keycode_flag |= 4096;
            playNote("1", "pitch_slider_1", "wave_1", event.keyCode);
        } else if (event.keyCode == keycode_array["two"]   && !(keycode_flag & 2048)) {
            keycode_flag |= 2048;
            playNote("2", "pitch_slider_2", "wave_2", event.keyCode);
        } else if (event.keyCode == keycode_array["three"]   && !(keycode_flag & 1024)) {
            keycode_flag |= 1024;
            playNote("3", "pitch_slider_3", "wave_3", event.keyCode);
        } else if (event.keyCode == keycode_array["four"]   && !(keycode_flag & 512)) {
            keycode_flag |= 512;
            playNote("4", "pitch_slider_4", "wave_4", event.keyCode);
        } else if (event.keyCode == keycode_array["five"]   && !(keycode_flag & 256)) {
            keycode_flag |= 256;
            playNote("5", "pitch_slider_5", "wave_5", event.keyCode);
        } else if (event.keyCode == keycode_array["six"]   && !(keycode_flag & 128)) {
            keycode_flag |= 128;
            playNote("6", "pitch_slider_6", "wave_6", event.keyCode);
        } else if (event.keyCode == keycode_array["seven"]   && !(keycode_flag & 64)) {
            keycode_flag |= 64;
            playNote("7", "pitch_slider_7", "wave_7", event.keyCode);
        } else if (event.keyCode == keycode_array["eight"]   && !(keycode_flag & 32)) {
            keycode_flag |= 32;
            playNote("8", "pitch_slider_8", "wave_8", event.keyCode);
        } else if (event.keyCode == keycode_array["nine"]   && !(keycode_flag & 16)) {
            keycode_flag |= 16;
            playNote("9", "pitch_slider_9", "wave_9", event.keyCode);
        } else if (event.keyCode == keycode_array["ten"]   && !(keycode_flag & 8)) {
            keycode_flag |= 8;
            playNote("10", "pitch_slider_10", "wave_10", event.keyCode);
        } else if (event.keyCode == keycode_array["eleven"]   && !(keycode_flag & 4)) {
            keycode_flag |= 4;
            playNote("11", "pitch_slider_11", "wave_11", event.keyCode);
        } else if (event.keyCode == keycode_array["twelve"]  && !(keycode_flag & 2)) {
            keycode_flag |= 2;
            playNote("12", "pitch_slider_12", "wave_12", event.keyCode);
        } else if (event.keyCode == keycode_array["tirteen"]  && !(keycode_flag & 1)) {
            keycode_flag |= 1;
            playNote("13", "pitch_slider_13", "wave_13", event.keyCode);
        }
    });

    $(document).on("keyup", function(event) {
        if (event.keyCode == keycode_array["one"]) {
            keycode_flag &= ~4096;
            stopNote("1");
        } else if (event.keyCode == keycode_array["two"]) {
            keycode_flag &= ~2048;
            stopNote("2");
        } else if (event.keyCode == keycode_array["three"]) {
            keycode_flag &= ~1024;
            stopNote("3");
        } else if (event.keyCode == keycode_array["four"]) {
            keycode_flag &= ~512;
            stopNote("4");
        } else if (event.keyCode == keycode_array["five"]) {
            keycode_flag &= ~256;
            stopNote("5");
        } else if (event.keyCode == keycode_array["six"]) {
            keycode_flag &= ~128;
            stopNote("6");
        } else if (event.keyCode == keycode_array["seven"]) {
            keycode_flag &= ~64;
            stopNote("7");
        } else if (event.keyCode == keycode_array["eight"]) {
            keycode_flag &= ~32;
            stopNote("8");
        } else if (event.keyCode == keycode_array["nine"]) {
            keycode_flag &= ~16;
            stopNote("9");
        } else if (event.keyCode == keycode_array["ten"]) {
            keycode_flag &= ~8;
            stopNote("10");
        } else if (event.keyCode == keycode_array["eleven"]) {
            keycode_flag &= ~4;
            stopNote("11");
        } else if (event.keyCode == keycode_array["twelve"]) {
            keycode_flag &= ~2;
            stopNote("12");
        } else if (event.keyCode == keycode_array["thirteen"]) {
            keycode_flag &= ~1;
            stopNote("13");
        }
    });

    var playNote = function(oscillator_id, frequency_id, wave_type_id, keycode_id) {

        var index = parseInt(oscillator_id)
        var osc = document.getElementById(oscillator_id)
        var oscPitch = document.getElementById(frequency_id).value;
        $(osc).addClass('cool-border');
        oscillators[index].type = parseInt(document.getElementById(wave_type_id).value);
        oscillators[index].frequency.value = oscPitch;
        // console.log(oscPitch);
        frequency_array.push(parseInt(oscPitch));
        oscillators[index].connect(compressor);
        compressor.connect(reverb);
        reverb.connect(volume);
        volume.connect(context.destination);

        oscillators[index].noteOn(0);
    }

    var calculateAverage = function(array) {
        var sum = 0
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }

    var stopNote = function(oscillator_id) {
        var index = parseInt(oscillator_id)
        var osc = document.getElementById(oscillator_id)
        $(osc).removeClass('cool-border');
        // oscillators[index].disconnect();
        oscillators[index].noteOff(0);
        oscillators[index] = context.createOscillator();
        average = Math.floor(calculateAverage(frequency_array));
        $('#average_frequency').html(average + "Hz ");
    }

    var findOsc = function(oscillator_id) {
        var osc = document.getElementById(oscillator_id)
    }

    // var selected = $('#keyboard_selector').find(":selected").val();
    // if (selected === "0") {
    //   $('#keyboard_render').html("<%= render 'low_c_keyboard' %>");
    // }
    // else if (selected === "1") {
    //   $('#keyboard_render').html("<%= render 'middle_c_keyboard' %>");
    // }

    var flag = 1

});
