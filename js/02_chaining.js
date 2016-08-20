const context = new(window.AudioContext || window.webkitAudioContext)();
const volControl = document.getElementById("volume");
const panControl = document.getElementById("panner");
const lfoControl = document.getElementById("lfo");

const lfo = context.createOscillator();
const freqGain = context.createGain();
const osc = context.createOscillator();
const vol = context.createGain();
const panner = context.createStereoPanner();

const waveControl = $('input:radio').on('click', (event) => {
  if (event.currentTarget.id === 'sine') {
    osc.type = 'sine';
  }
  else if (event.currentTarget.id === 'square') {
    osc.type = 'square';
  }
  else if (event.currentTarget.id === 'triangle') {
    osc.type = 'triangle';
  }
  else if (event.currentTarget.id === 'sawtooth') {
    osc.type = 'sawtooth';
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

freqGain.gain.value = 100;
freqGain.connect(osc.frequency);

osc.frequency.value = 440;
osc.connect(vol);

vol.gain.value = volControl.value;
vol.connect(panner);

panner.connect(context.destination);

lfo.start();
osc.start();
