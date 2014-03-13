$(document).ready(function() {
    context = new webkitAudioContext();

    frequency_array = new Array();

    oscillators = new Array();

    for (var i = 1; i <= 13; i++) {
      oscillators.push(context.createOscillator());
    }

    var keycode_one = 16; //shift
    var keycode_two = 81; //q
    var keycode_three = 83; //s
    var keycode_four = 69; //e
    var keycode_five = 70; //f
    var keycode_six = 71; //g
    var keycode_seven = 89; //y
    var keycode_eight = 74; //j
    var keycode_nine = 73; //i
    var keycode_ten = 76; //l
    var keycode_eleven = 80; //p
    var keycode_twelve = 222; //'
    var keycode_thirteen = 221; //]

    average = 0;

    $(document).on("keydown", function(event) {
        if (event.keyCode == keycode_one) {
            playNote("1", "pitch_slider_1", "wave_1", keycode_one);
        } else if (event.keyCode == keycode_two) {
            playNote("2", "pitch_slider_2", "wave_2", keycode_two);
        } else if (event.keyCode == keycode_three) {
            playNote("3", "pitch_slider_3", "wave_3", keycode_three);
        } else if (event.keyCode == keycode_four) {
            playNote("4", "pitch_slider_4", "wave_4", keycode_four);
        } else if (event.keyCode == keycode_five) {
            playNote("5", "pitch_slider_5", "wave_5", keycode_five);
        } else if (event.keyCode == keycode_six) {
            playNote("6", "pitch_slider_6", "wave_6", keycode_six);
        } else if (event.keyCode == keycode_seven) {
            playNote("7", "pitch_slider_7", "wave_7", keycode_seven);
        } else if (event.keyCode == keycode_eight) {
            playNote("8", "pitch_slider_8", "wave_8", keycode_eight);
        } else if (event.keyCode == keycode_nine) {
            playNote("9", "pitch_slider_9", "wave_9", keycode_nine);
        } else if (event.keyCode == keycode_ten) {
            playNote("10", "pitch_slider_10", "wave_10", keycode_ten);
        } else if (event.keyCode == keycode_eleven) {
            playNote("11", "pitch_slider_11", "wave_11", keycode_eleven);
        } else if (event.keyCode == keycode_twelve) {
            playNote("12", "pitch_slider_12", "wave_12", keycode_twelve);
        } else if (event.keyCode == keycode_thirteen) {
            playNote("13", "pitch_slider_13", "wave_13", keycode_thirteen);
        }
    });

    $(document).on("keyup", function(event) {
        if (event.keyCode == keycode_one) {
            stopNote("1");
        } else if (event.keyCode == keycode_two) {
            stopNote("2");
        } else if (event.keyCode == keycode_three) {
            stopNote("3");
        } else if (event.keyCode == keycode_four) {
            stopNote("4");
        } else if (event.keyCode == keycode_five) {
            stopNote("5");
        } else if (event.keyCode == keycode_six) {
            stopNote("6");
        } else if (event.keyCode == keycode_seven) {
            stopNote("7");
        } else if (event.keyCode == keycode_eight) {
            stopNote("8");
        } else if (event.keyCode == keycode_nine) {
            stopNote("9");
        } else if (event.keyCode == keycode_ten) {
            stopNote("10");
        } else if (event.keyCode == keycode_eleven) {
            stopNote("11");
        } else if (event.keyCode == keycode_twelve) {
            stopNote("12");
        } else if (event.keyCode == keycode_thirteen) {
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
        console.log(oscPitch);
        frequency_array.push(parseInt(oscPitch));
        oscillators[index].connect(context.destination);

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
        oscillators[index].disconnect();
        // oscillators[index].noteOff(0);
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


});
