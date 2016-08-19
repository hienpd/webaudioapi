var context = new(window.AudioContext || window.webkitAudioContext)();

function playSound(wave) {
  const osc = context.createOscillator();
  osc.connect(context.destination);
  osc.frequency.value = 440;
  osc.type = wave;
  osc.start();
  osc.stop(context.currentTime + 1);
};

$('.btn').click((event) => {
  switch ($(event.target).text()) {
    case 'Sine Waves':
      playSound('sine');
      break;
    case 'Square Waves':
      playSound('square');
      break;
    case 'Triangle Waves':
      playSound('triangle');
      break;
    case 'Sawtooth Waves':
      playSound('sawtooth');
      break;
    default:
      break;
  };
});
