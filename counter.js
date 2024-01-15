let count = 0;

window.addEventListener('devicemotion', function(event) {
  let acceleration = event.accelerationIncludingGravity;
  if (acceleration.z > 9.8) {
    count++;
    document.getElementById('counter').innerText = count;
  }
});
