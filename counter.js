let count = 0;

window.addEventListener('devicemotion', function(event) {
  let acceleration = event.accelerationIncludingGravity;
  let threshold = 0.25; // Порог для вертикального движения

  // Проверка на вертикальное движение
  if (Math.abs(acceleration.x) < threshold && Math.abs(acceleration.y) < threshold) {
    count++;
    document.getElementById('counter').innerText = count;
  }
});
