let melody = [];
//C:\Users\user\.vscode\extensions\continue.continue-2.0.0-win32-x64\continue_tutorial.py
//12 mlody
//141
//16, largely intuitive interface

function addTone(waveform, frequency, gain, duration, startDelay) {
    let result = {
        waveform : waveform,
        frequency : frequency,
        gain : gain,
        duration : duration,   
        startDelay : startDelay
    };
    return result;
}

//push random generated results to melody array
/*melody.push(addTone("square", Math.random() * 1000, Math.random() * 1, Math.random() * 5, Math.random()));
melody.push(addTone("sawtooth", Math.random() * 1000, Math.random() * 1, Math.random() * 5, Math.random() * 10));
melody.push(addTone("triangle", Math.random() * 1000, Math.random() * 1, Math.random() * 5, Math.random() * 10));
melody.push(addTone("sine", Math.random() * 1000, Math.random() * 1, Math.random() * 5, Math.random() * 10));
melody.push(addTone("sawtooth", Math.random() * 1000, Math.random() * 1, Math.random() * 5, Math.random() * 10));
melody.push(addTone("triangle", Math.random() * 1000, Math.random() * 1, Math.random() * 5, Math.random() * 10));
melody.push(addTone("sawtooth", Math.random() * 1000, Math.random() * 1, Math.random() * 5, Math.random() * 20));
melody.push(addTone("triangle", Math.random() * 1000, Math.random() * 1, Math.random() * 5, Math.random() * 10));
melody.push(addTone("sine", Math.random() * 1000, Math.random() * 1, Math.random() * 5, Math.random() * 10));
melody.push(addTone("sawtooth", Math.random() * 1000, Math.random() * 1, Math.random() * 5, Math.random() * 10));
melody.push(addTone("triangle", Math.random() * 1000, Math.random() * 1, Math.random() * 5, Math.random() * 15));*/

//console.log(melody);

//play the melody
function playMelody() {
    melody.forEach(function(tone) {
        playTone(tone.waveform, tone.frequency, tone.gain, tone.duration, tone.startDelay);
    });
}
