const keys = Array.from(document.querySelectorAll('.key'));

console.log(keys);

// For each key, add event listeners
// mousedown - start sound
keys.forEach(key => {
  key.addEventListener('mousedown', e => {
    console.log(e.target);
  });
});
// keydown - start sound
// mouseup - end sound
// keyup - end sound
