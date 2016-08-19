var context = new(window.AudioContext || new window.webkitAudioContext)();
let hz = '';

osc = context.createOscillator();
osc.connect(context.destination);

function playNote(hz) {
  osc.frequency.value = hz;
  osc.start();
  osc.stop(context.currentTime + 1);
};

$('div').click((event) => {
  switch ($(event.target).text()) {
    case 'C':
      playNote(261.63);
      break;
    case 'D':
      playNote(293.66);
      break;
    case 'E':
      playNote(329.63);
      break;
    case 'F':
      playNote(349.23);
      break;
    case 'G':
      playNote(392);
      break;
    case 'A':
      playNote(440);
      break;
    case 'B':
      playNote(493.88);
      break;
    default:
      break;
  };
});
