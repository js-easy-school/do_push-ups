let count = 0;
let isMoving = false; // Флаг для отслеживания движения

window.addEventListener('devicemotion', function(event) {
  let acceleration = event.accelerationIncludingGravity;
  let threshold = 0.5; // Порог для вертикального движения

  // Проверка на вертикальное движение
  if (Math.abs(acceleration.x) < threshold && Math.abs(acceleration.y) < threshold) {
    isMoving = false; // Устройство находится в покое
  } else {
    if (!isMoving) {
      count++; // Устройство начало движение, увеличиваем счетчик
      isMoving = true; // Устанавливаем флаг движения
      document.getElementById('counter').innerText = count; // Обновляем отображение счетчика
    }
  }
});
