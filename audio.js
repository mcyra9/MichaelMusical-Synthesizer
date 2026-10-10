function playTone(waveform, frequency, gain, duration, startDelay) {
    // 1. init AudioContext and create nodes
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    // 2. connect nodes
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // 3. set oscillator frequency, gain and type
    oscillator.type = waveform; // You can change this to "square", "sawtooth", or "triangle"
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime + startDelay);
    gainNode.gain.setValueAtTime(gain, audioContext.currentTime + startDelay);

    // 4. start the oscillator
    oscillator.start(audioContext.currentTime + startDelay);
    oscillator.stop(audioContext.currentTime + startDelay + duration);

    console.log(audioContext.currentTime + startDelay, audioContext.currentTime + startDelay + duration);
}

function giveTone(waveform, frequency, gain) {
     // 1. init AudioContext and create nodes
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    // 2. connect nodes
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // 3. set oscillator frequency, gain and type
    oscillator.type = waveform; // You can change this to "square", "sawtooth", or "triangle"
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime );
    gainNode.gain.setValueAtTime(gain, audioContext.currentTime);

    return {audioContext, oscillator, gainNode};
}