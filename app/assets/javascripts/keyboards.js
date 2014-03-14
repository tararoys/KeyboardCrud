$(document).ready(function() {

    context = new webkitAudioContext();

    frequency_array = new Array();

    oscillators = new Array();
    panners = new Array();
    delays = new Array();
    filters = new Array();
    volumes = new Array();

    for (var i = 1; i <= 13; i++) {
      oscillators.push(context.createOscillator());
    }
    for (var i = 1; i <= 13; i++) {
      panners.push(context.createPanner());
    }
    for (var i = 1; i <= 13; i++) {
      delays.push(context.createDelayNode());
    }
    for (var i = 1; i <= 13; i++) {
      filters.push(context.createBiquadFilter());
    }
    for (var i = 1; i <= 13; i++) {
      volumes.push(context.createGainNode());
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
        // console.log("here");
        if (event.keyCode == keycode_array["one"]  && !(keycode_flag & 4096)) {
            keycode_flag |= 4096;
            playNote("1", "frequency_1", "wave_1", "panner_1", "delay_1", "filter_1", "volume_1", event.keyCode);
            setTimeout(function () {stopNote("1"); }, 20000);
        } else if (event.keyCode == keycode_array["two"]   && !(keycode_flag & 2048)) {
            keycode_flag |= 2048;
            playNote("2", "frequency_2", "wave_2", "panner_2", "delay_2", "filter_2", "volume_2", event.keyCode);
        } else if (event.keyCode == keycode_array["three"]   && !(keycode_flag & 1024)) {
            keycode_flag |= 1024;
            playNote("3", "frequency_3", "wave_3", "panner_3", "delay_3", "filter_3", "volume_3", event.keyCode);
        } else if (event.keyCode == keycode_array["four"]   && !(keycode_flag & 512)) {
            keycode_flag |= 512;
            playNote("4", "frequency_4", "wave_4", "panner_4", "delay_4", "filter_4", "volume_4", event.keyCode);
        } else if (event.keyCode == keycode_array["five"]   && !(keycode_flag & 256)) {
            keycode_flag |= 256;
            playNote("5", "frequency_5", "wave_5", "panner_5", "delay_5", "filter_5", "volume_5", event.keyCode);
        } else if (event.keyCode == keycode_array["six"]   && !(keycode_flag & 128)) {
            keycode_flag |= 128;
            playNote("6", "frequency_6", "wave_6", "panner_6", "delay_6", "filter_6", "volume_6", event.keyCode);
        } else if (event.keyCode == keycode_array["seven"]   && !(keycode_flag & 64)) {
            keycode_flag |= 64;
            playNote("7", "frequency_7", "wave_7", "panner_7", "delay_7", "filter_7", "volume_7", event.keyCode);
        } else if (event.keyCode == keycode_array["eight"]   && !(keycode_flag & 32)) {
            keycode_flag |= 32;
            playNote("8", "frequency_8", "wave_8", "panner_8", "delay_8", "filter_8", "volume_8", event.keyCode);
        } else if (event.keyCode == keycode_array["nine"]   && !(keycode_flag & 16)) {
            keycode_flag |= 16;
            playNote("9", "frequency_9", "wave_9", "panner_9", "delay_9", "filter_9", "volume_9", event.keyCode);
        } else if (event.keyCode == keycode_array["ten"]   && !(keycode_flag & 8)) {
            keycode_flag |= 8;
            playNote("10", "frequency_10", "wave_10", "panner_10", "delay_10", "filter_10", "volume_10", event.keyCode);
        } else if (event.keyCode == keycode_array["eleven"]   && !(keycode_flag & 4)) {
            keycode_flag |= 4;
            playNote("11", "frequency_11", "wave_11", "panner_11", "delay_11", "filter_11", "volume_11", event.keyCode);
        } else if (event.keyCode == keycode_array["twelve"]  && !(keycode_flag & 2)) {
            keycode_flag |= 2;
            playNote("12", "frequency_12", "wave_12", "panner_12", "delay_12", "filter_12", "volume_12", event.keyCode);
        } else if (event.keyCode == keycode_array["tirteen"]  && !(keycode_flag & 1)) {
            keycode_flag |= 1;
            playNote("13", "frequency_13", "wave_13", "panner_13", "delay_13", "filter_13", "volume_13", event.keyCode);
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

    var playNote = function(oscillator_id, frequency_id, wave_type_id, panner_id, delay_id, filter_id, volume_id, keycode_id) {
        // console.log("here");
        var index = parseInt(oscillator_id);
        var osc = document.getElementById(oscillator_id);
        var oscPitch = document.getElementById(frequency_id).value;
        var panX = document.getElementById(panner_id).value;
        $(osc).addClass('cool-border');
        oscillators[index].type = parseInt(document.getElementById(wave_type_id).value);
        oscillators[index].frequency.value = oscPitch;
        volumes[index].gain.value = document.getElementById(volume_id).value;
        // oscillators[index].playbackRate.value = document.getElementById(filter_id).value;
        filters[index].type = filters[index].BANDPASS
        filters[index].detune.value = document.getElementById(filter_id).value;
        panners[index].setPosition(panX, 0, 0);
        // delays[index].delayTime.value = set_value(delay_id);
        console.log(panners[index]);
        console.log(delays[index].delayTime.value);
        console.log(filters[index].detune.value);
        console.log(volumes[index].gain.value);
        console.log(delays[index]);
        console.log(filters[index]);
        console.log(volumes[index]);
        frequency_array.push(parseInt(oscPitch));
        oscillators[index].connect(panners[index]);
        panners[index].connect(filters[index]);
        filters[index].connect(volumes[index]);
        volumes[index].connect(context.destination);


    // var sliderParams = {
    //     'orientation': "horizontal",
    //     'range': "min",
    //     'min': .5,
    //     'max': 100,
    //     'animate': true,
    //     'step': 0.01,
    //     'slide': function(event, ui, oscillator_id) {
    //         oscillators[oscillator_id].frequency.value = ui.value;   // This remote controls the input slider
    //     },

        // stop: function( event, ui ) {}
    // };


        oscillators[index].noteOn(0);
    }

    // $('#sliderOne').slider(sliderParams);


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

    // var set_value = function(argument) {
    //     document.getElementById(argument).value;
    //     setTimeout('set_value()', 1);
    // }

    // var findOsc = function(oscillator_id) {
    //     var osc = document.getElementById(oscillator_id)
    // }

    // var selected = $('#keyboard_selector').find(":selected").val();
    // if (selected === "0") {
    //   $('#keyboard_render').html("<%= render 'low_c_keyboard' %>");
    // }
    // else if (selected === "1") {
    //   $('#keyboard_render').html("<%= render 'middle_c_keyboard' %>");
    // }
});
