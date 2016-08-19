window.onload = function() {
  const context = new (window.AudioContext || window.webkitAudioContext)();
  const osc = context.createOscillator();
  const vol = context.createGain();
  const volControl = document.getElementById("volume");

  const freqGain = context.createGain();
  const lfo = context.createOscillator();

  vol.gain.value = volControl.value;
  vol.connect(context.destination);

  osc.frequency.value = 440;
  osc.connect(vol);

  freqGain.gain.value = 100;
  freqGain.connect(osc.frequency);

  lfo.frequency.value = 1;
  lfo.connect(freqGain);

  volControl.addEventListener('input', () => {
    vol.gain.value = volControl.value;
  });

  osc.start();
  lfo.start();
};
