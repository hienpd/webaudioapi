const context = new(window.AudioContext || window.webkitAudioContext)();
const volControl = document.getElementById("volume");
const panControl = document.getElementById("panner");
const lfo = context.createOscillator();
const freqGain = context.createGain();
const osc = context.createOscillator();
const vol = context.createGain();
const panner = context.createStereoPanner();

volControl.addEventListener('input', () => {
  vol.gain.value = volControl.value;
});

panControl.addEventListener('input', () => {
  panner.pan.value = panControl.value;
});

lfo.frequency.value = 1;
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
