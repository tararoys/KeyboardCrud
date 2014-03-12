$(document).ready(function() {
    context = new webkitAudioContext();

    frequency_array = new Array();

    oscillator = context.createOscillator();

    var keycode_one = 65; //a
    var keycode_two = 87; //w
    var keycode_three = 68; //d
    var keycode_four = 82; //r
    var keycode_five = 82; //g
    var keycode_six = 82; //h
    var keycode_seven = 82; //u
    var keycode_eight = 82; //k
    var keycode_nine = 82; //r
    var keycode_ten = 82; //r
    var keycode_eleven = 82; //r
    var keycode_twelve = 82; //r
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
