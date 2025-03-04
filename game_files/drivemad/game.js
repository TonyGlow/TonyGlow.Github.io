const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Load car image
const carImage = new Image();
carImage.src = 'download.png';

// Game variables
let car = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 100,
    width: 50,
    height: 100,
    speed: 5,
    dx: 0,
    dy: 0
};

let keys = {
    left: false,
    right: false,
    up: false,
    down: false
};

// Event listeners for key presses
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') keys.left = true;
    if (e.key === 'ArrowRight') keys.right = true;
    if (e.key === 'ArrowUp') keys.up = true;
    if (e.key === 'ArrowDown') keys.down = true;
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') keys.left = false;
    if (e.key === 'ArrowRight') keys.right = false;
    if (e.key === 'ArrowUp') keys.up = false;
    if (e.key === 'ArrowDown') keys.down = false;
});

// Game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Update game state
function update() {
    car.dx = 0;
    car.dy = 0;

    if (keys.left && car.x > 0) car.dx = -car.speed;
    if (keys.right && car.x + car.width < canvas.width) car.dx = car.speed;
    if (keys.up && car.y > 0) car.dy = -car.speed;
    if (keys.down && car.y + car.height < canvas.height) car.dy = car.speed;

    car.x += car.dx;
    car.y += car.dy;
}

// Draw game elements
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(carImage, car.x, car.y, car.width, car.height);
}

// Start the game loop
carImage.onload = () => {
    gameLoop();
};
