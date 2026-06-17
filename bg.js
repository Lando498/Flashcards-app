const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
canvas.setAttribute('position', 'fixed')
// Resize canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Star settings
const starsArray = [];
const numStars = 300;
const speed = 2;

// Initialize stars
for (let i = 0; i < numStars; i++) {
  starsArray.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * speed + 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';

  starsArray.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();

    // Update position for movement
    star.x += star.speed;

    // Reset star if it moves off the screen
    if (star.x > canvas.width) {
      star.x = 0;
      star.y = Math.random() * canvas.height;
    }
  });

  requestAnimationFrame(animate);
}
animate();
