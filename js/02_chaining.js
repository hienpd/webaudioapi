const context = new(window.AudioContext || window.webkitAudioContext)();
const volControl = document.getElementById("volume");
const panControl = document.getElementById("panner");
const lfoControl = document.getElementById("lfo");
const freqGainControl = document.getElementById("freq-gain");
const lfo = context.createOscillator();
const freqGain = context.createGain();
const osc = context.createOscillator();
const vol = context.createGain();
const panner = context.createStereoPanner();

const waveControl = $('input:radio').on('click', (event) => {
  if (event.currentTarget.id === 'sine') {
    lfo.type = 'sine';
  }
  else if (event.currentTarget.id === 'square') {
    lfo.type = 'square';
  }
  else if (event.currentTarget.id === 'triangle') {
    lfo.type = 'triangle';
  }
  else if (event.currentTarget.id === 'sawtooth') {
    lfo.type = 'sawtooth';
  }
});

volControl.addEventListener('input', () => {
  vol.gain.value = volControl.value;
});

panControl.addEventListener('input', () => {
  panner.pan.value = panControl.value;
});

lfoControl.addEventListener('input', () => {
  lfo.frequency.value = lfoControl.value;
});

lfo.connect(freqGain);

freqGainControl.addEventListener('input', () => {
  freqGain.gain.value = freqGainControl.value;
});

// freqGain.gain.value = 100;
freqGain.connect(osc.frequency);

osc.frequency.value = 440;
osc.connect(vol);

vol.gain.value = volControl.value;
vol.connect(panner);

panner.connect(context.destination);

lfo.start();
osc.start();
