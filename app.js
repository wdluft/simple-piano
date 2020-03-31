const keys = Array.from(document.querySelectorAll('.key'));

// For each key, add event listeners
// mousedown - start sound
keys.forEach(key => {
  key.addEventListener('mousedown', e => {
    const clickedKey = e.target.dataset.key;
    playSound(clickedKey);
  });
});
// keydown - start sound
document.addEventListener('keydown', e => {
  // save pressed key in a variable
  const clickedKey = e.key; // letters lowercased
  // pass key into function to determine which sound to play
  playSound(clickedKey);
});
// mouseup - end sound
// keyup - end sound

function playSound(key) {
  switch (key) {
    case 'a':
      console.log(key);
      break;
    case 'w':
      console.log(key);
      break;
    case 's':
      console.log(key);
      break;
    case 'e':
      console.log(key);
      break;
    case 'd':
      console.log(key);
      break;
    case 'f':
      console.log(key);
      break;
    case 't':
      console.log(key);
      break;
    case 'g':
      console.log(key);
      break;
    case 'y':
      console.log(key);
      break;
    case 'h':
      console.log(key);
      break;
    case 'u':
      console.log(key);
      break;
    case 'j':
      console.log(key);
      break;
    case 'k':
      console.log(key);
      break;
    case 'o':
      console.log(key);
      break;
    case 'l':
      console.log(key);
      break;
    case 'p':
      console.log(key);
      break;
    case ';':
      console.log(key);
      break;
    default:
      break;
  }
}
