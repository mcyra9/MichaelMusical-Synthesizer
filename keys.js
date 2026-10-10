let Q;
let Qpressed = false;
let W;
let Wpressed = false;
let E;
let Epressed = false;
let R;
let Rpressed = false;
let T;
let Tpressed = false;
let Y;
let Ypressed = false;
let U;
let Upressed = false;
let I;
let Ipressed = false;
let O;
let Opressed = false;
let P;
let Ppressed = false;
let forw;
let forwPressed = false;
let back;
let backPressed = false;
let slash;
let slashPressed = false;

let gain = 0.5; //default gain value
let waveForm = "sine"; //default waveform value

//plan to make this more efficient by using a dictionary to map keys to their corresponding tones and states, reducing repetitive code.
const keyMap = {
    "q": { frequency: 150, pressed: Qpressed, tone: Q },
    "w": { frequency: 200, pressed: Wpressed, tone: W },
    "e": { frequency: 250, pressed: Epressed, tone: E },
    "r": { frequency: 300, pressed: Rpressed, tone: R },
    "t": { frequency: 350, pressed: Tpressed, tone: T },
    "y": { frequency: 400, pressed: Ypressed, tone: Y },
    "u": { frequency: 450, pressed: Upressed, tone: U },
    "i": { frequency: 500, pressed: Ipressed, tone: I },
    "o": { frequency: 550, pressed: Opressed, tone: O },
    "p": { frequency: 550, pressed: Ppressed, tone: P },

    "[": { frequency: 600, pressed: forwPressed, tone: forw },
    "]": { frequency: 650, pressed: backPressed, tone: back },

    "\\": { frequency: 700, pressed: slashPressed, tone: slash },

};

const grainMap = {
    "1": { grain: 0.1 },
    "2": { grain: 0.2 },
    "3": { grain: 0.3 },
    "4": { grain: 0.4 },
    "5": { grain: 0.5 },
    "6": { grain: 0.6 },
    "7": { grain: 0.7 },
    "8": { grain: 0.8 },
    "9": { grain: 0.9 },
    "0": { grain: 1.0 },
};

const waveformMap = {
    "a": { waveform: "sine" },
    "s": { waveform: "square" },
    "d": { waveform: "sawtooth" },
    "f": { waveform: "triangle" },
};

document.addEventListener('keydown', function(event) {
    const keyData = keyMap[event.key];
    if (keyData && !keyData.pressed) {
        keyData.pressed = true;
        keyData.tone = giveTone(waveForm, keyData.frequency, gain);
        console.log("pressing " + event.key + ", playing tone @ " + keyData.frequency + " Hz, Gain: " + gain + ", Waveform: " + waveForm);
        keyData.tone.oscillator.start();
    }

    const grainData = grainMap[event.key];
    if (grainData) {
        gain = grainData.grain;
        console.log("Gain set to: " + gain);
    }
    const waveformData = waveformMap[event.key];
    if (waveformData) {
        waveForm = waveformData.waveform;
        console.log("Waveform set to: " + waveForm);
    }
});

document.addEventListener('keyup', function(event) {
    const keyData = keyMap[event.key];
    if (keyData) {
        keyData.pressed = false;
        keyData.tone.oscillator.stop();
        keyData.tone = null;
    }
});