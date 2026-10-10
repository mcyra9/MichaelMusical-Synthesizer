playNowButton = document.getElementById("playNowButton");
addSoundButton = document.getElementById("addSoundButton");
playMelodyButton = document.getElementById("playMelodyButton");
saveButton = document.getElementById("saveButton");

frequency = document.getElementById("frequency");
gain = document.getElementById("gain");
gainValue = document.getElementById("gainValue");
duration = document.getElementById("duration");
startTime = document.getElementById("startTime");
endTime = document.getElementById("endTime");
waveform = document.getElementById("waveform");

melodyList = document.getElementById("melodyList");

let selectedTone = null;

//update the displayed values when the sliders are moved
gain.addEventListener("input", function() {
    gainValue.textContent = gain.value;
});
duration.addEventListener("input", function() {
    endTime.value = (parseFloat(startTime.value) + parseFloat(duration.value)).toFixed(2);
});
startTime.addEventListener("input", function() {
    endTime.value = (parseFloat(startTime.value) + parseFloat(duration.value)).toFixed(2);
});
endTime.addEventListener("input", function() {
    duration.value = (parseFloat(endTime.value) - parseFloat(startTime.value)).toFixed(2);
});



//play the tone at the current time
playNowButton.addEventListener("click", function() {
    playTone(waveform.value, frequency.value, gain.value, +duration.value, 0);
});

//add tone to melody array and melody list
addSoundButton.addEventListener("click", function() {
    playTone(waveform.value, frequency.value, gain.value, +duration.value, 0);
    melody.push(addTone(waveform.value, frequency.value, gain.value, +duration.value, +startTime.value));
    addToMelodyList(waveform.value, frequency.value, gain.value, +duration.value, +startTime.value);
    console.log("new sound added to melody,", melody);
});

//save the current tone settings to the selected tone in the melody array
saveButton.addEventListener("click", function() {
    if (selectedTone !== null) {
        //update the selected tone in the melody array
        melody[selectedTone] = addTone(waveform.value, frequency.value, gain.value, +duration.value, +startTime.value);
        playTone(waveform.value, frequency.value, gain.value, +duration.value, 0);
        saveButton.style.display = "none";
        selectedTone = null;

        //update the melody list
        melodyList.innerHTML = "";
        ListMelody();
        console.log("melody changed,", melody);
    }
});

//play the melody
playMelodyButton.addEventListener("click", function() {
    playMelody();
});

//list the whole array
function ListMelody() {
    melody.forEach(function(tone, index) {
        addToMelodyList(tone.waveform, tone.frequency, tone.gain, tone.duration, tone.startDelay);
    });
    console.log("melody listed", melody);
}

//add a single tone to the melody list
function addToMelodyList(Fwaveform, Ffrequency, Fgain, Fduration, FstartDelay) {
    let ToneNumber = melody.length-1;

    let listItem = document.createElement("div");
        listItem.style = "border: solid 1px black; margin: 10px 0; background-color: lightblue;"
    let listDesc = document.createElement("p");
        listDesc.textContent = `Tone ${ToneNumber}: Waveform: ${Fwaveform}, Frequency: ${Ffrequency} Hz, Gain: ${Fgain}, Duration: ${Fduration} s, Start Delay: ${FstartDelay} s`;
        listItem.appendChild(listDesc);

    
    //buttons for each tone in the melody list
    let listEditBtn = document.createElement("button");
        listEditBtn.id = "listEditBtn"+String(ToneNumber);
        listEditBtn.textContent = "Edit";
        listEditBtn.dataset.tone = ToneNumber;
        listEditBtn.addEventListener("click", function() {
            edit(ToneNumber);
        }); 
        listItem.appendChild(listEditBtn);
    let listRmBtn = document.createElement("button");
        listRmBtn.id = "listRmBtn"+String(ToneNumber)
        listRmBtn.textContent = "Remove";
        listRmBtn.dataset.tone = ToneNumber;
        listRmBtn.addEventListener("click", function() {
            melody.splice(ToneNumber);
            listItem.remove();
        });
        listItem.appendChild(listRmBtn);
    let listCloneBtn = document.createElement("button");
        listCloneBtn.id = "listCloneBtn"+String(ToneNumber);
        listCloneBtn.textContent = "Clone";
        listCloneBtn.dataset.tone = ToneNumber;
        listCloneBtn.addEventListener("click", function() {
            melody.push(addTone(Fwaveform, Ffrequency, Fgain, Fduration, FstartDelay));
            playTone(Fwaveform, Ffrequency, Fgain, Fduration, 0);
            addToMelodyList(Fwaveform, Ffrequency, Fgain, Fduration, FstartDelay);
        });
        listItem.appendChild(listCloneBtn);
    
    console.log("tone added to melody list", melody.length-1);
    
    melodyList.appendChild(listItem);
}

//set the current tone settings to the selected tone in the melody array
function edit(ToneNumber) {
    //set the values of inputs to the selected tone's values
    let CurrentTone = melody[ToneNumber];
    startTime.value = CurrentTone.startDelay;
    duration.value = CurrentTone.duration;
    endTime.value = (parseFloat(CurrentTone.startDelay) + parseFloat(CurrentTone.duration)).toFixed(2);
    frequency.value = CurrentTone.frequency;
    gain.value = CurrentTone.gain;
    gainValue.textContent = CurrentTone.gain;
    waveform.value = CurrentTone.waveform;

    //set the selected tone to the current tone
    selectedTone = ToneNumber;
    //set the save button to be visible
    saveButton.style.display = "inline-block";
    console.log(CurrentTone);
}

ListMelody();