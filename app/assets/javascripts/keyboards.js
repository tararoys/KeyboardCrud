$(document).ready(function() {
    context = new webkitAudioContext();

    frequency_array = new Array();

    oscillator = context.createOscillator();

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
    var keycode_twelve = 222; //2
    var keycode_thirteen = 82; //r


    average = 0;

    $(document).on("keydown", function(event) {
        if (event.keyCode == keycode_one) {
            playNote("C", "pitch_slider_one", "wave_one", keycode_one);
        } else if (event.keyCode == keycode_two) {
            playNote("C#", "pitch_slider_two", "wave_two", keycode_two);
        } else if (event.keyCode == keycode_three) {
            playNote("D", "pitch_slider_three", "wave_three", keycode_three);
        } else if (event.keyCode == keycode_four) {
            playNote("D#", "pitch_slider_four", "wave_four", keycode_four);
        } else if (event.keyCode == keycode_five) {
            playNote("E", "pitch_slider_two", "wave_two", keycode_two);
        } else if (event.keyCode == keycode_six) {
            playNote("F", "pitch_slider_two", "wave_two", keycode_two);
        } else if (event.keyCode == keycode_seven) {
            playNote("F#", "pitch_slider_two", "wave_two", keycode_two);
        } else if (event.keyCode == keycode_eight) {
            playNote("G", "pitch_slider_two", "wave_two", keycode_two);
        } else if (event.keyCode == keycode_nine) {
            playNote("G#", "pitch_slider_two", "wave_two", keycode_two);
        } else if (event.keyCode == keycode_ten) {
            playNote("C#", "pitch_slider_two", "wave_two", keycode_two);
        } else if (event.keyCode == keycode_eleven) {
            playNote("C#", "pitch_slider_two", "wave_two", keycode_two);
        } else if (event.keyCode == keycode_twelve) {
            playNote("C#", "pitch_slider_two", "wave_two", keycode_two);
        } else if (event.keyCode == keycode_thirteen) {
            playNote("C#", "pitch_slider_two", "wave_two", keycode_two);
        }
    });

    $(document).on("keyup", function(event) {
        if (event.keyCode == keycode_one) {
            stopNote("C");
        } else if (event.keyCode == keycode_two) {
            stopNote("C#");
        } else if (event.keyCode == keycode_three) {
            stopNote("D");
        } else if (event.keyCode == keycode_four) {
            stopNote("D#");
        }

    });

    var playNote = function(oscillator_id, frequency_id, wave_type_id, keycode_id) {

        var osc = document.getElementById(oscillator_id)
        var oscPitch = document.getElementById(frequency_id).value;
        $(osc).addClass('cool-border');
        oscillator.type = parseInt(document.getElementById(wave_type_id).value);
        oscillator.frequency.value = oscPitch;
        console.log(oscPitch);
        frequency_array.push(parseInt(oscPitch));
        oscillator.connect(context.destination);

        oscillator.noteOn(0);
    }

    var calculateAverage = function(array) {
        var sum = 0
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }

    var stopNote = function(oscillator_id) {
        var osc = document.getElementById(oscillator_id)
        $(osc).removeClass('cool-border');
        oscillator.disconnect();
        average = Math.floor(calculateAverage(frequency_array));
        $('#average_frequency').html(average + "Hz ");
    }

    var findOsc = function(oscillator_id) {
        var osc = document.getElementById(oscillator_id)
    }
});
