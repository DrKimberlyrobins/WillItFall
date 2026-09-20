const ball = document.querySelector(".ball");
const platform = document.querySelector(".platform");

let position =205;
let velocity = 0;
let target = 200;
const leftDangerZone = 35;
const rightDangerZone = 410;


function moveBall() {

    // Read the beam's current angle
const beamStyle = getComputedStyle(platform);
const matrix = new DOMMatrix(beamStyle.transform);
const angle = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);


   velocity += angle * 0.03;

// Help the ball continue across the middle toward the left
if (angle < -2 && position > 170 && position < 300) {
    velocity -= 0.012;

}

    // Friction keeps it from moving forever
    velocity *= 0.985;

    position += velocity;
// Rescue the ball when it gets too close to an edge
if (position < leftDangerZone && velocity < 0) {
    velocity *= 0.99;
}

if (position > rightDangerZone && velocity > 0) {
    velocity *= 0.90;
}
    // Keep the ball on the platform FOR NOW
    

    ball.style.left = position + "px";

    // Make the ball actually rotate while rolling
    ball.style.transform =
        "rotate(" + (position * 2) + "deg)";
}


function animate() {
    moveBall();
    requestAnimationFrame(animate);
}

animate();
const livestatus = document.getElementById("liveStatus");
let liveSeconds = 0;

setInterval(() => {

liveSeconds++;

const minutes = Math.floor(liveSeconds / 60);
const seconds = liveSeconds % 60;

liveStatus.textContent =
    "🔴 LIVE • " +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");

}, 1000);