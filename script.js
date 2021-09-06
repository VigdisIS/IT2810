// SVG onClick
const flyClicked = () => {
  $("#fly")[0].style.animationPlayState = "paused";

  setTimeout(() => {
    $("#fly")[0].style.animationPlayState = "running";
  }, 1500);
};

// Accordion for dokumentasjon
$(".accordion")[0].addEventListener("click", function () {
  this.classList.toggle("active");
  const panel = this.nextElementSibling;
  panel.style.display === "block"
    ? (panel.style.display = "none")
    : (panel.style.display = "block");
});

// Canvas
const c = $("#frog-canvas")[0];
const ctx = c.getContext("2d");

let goingRight = true;
let flying = true;

let x = 50;
window.requestAnimationFrame(
  (loop = () => {
    if (x === 350) {
      goingRight = false;
    } else if (x === 50) {
      goingRight = true;
    }

    if (flying) {
      goingRight ? (x += 1) : (x -= 1);
    }

    ctx.clearRect(0, 0, c.width, 150);

    // Fluekropp
    ctx.beginPath();
    ctx.ellipse(x, 100, 30, 43, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#242424";
    ctx.fill();

    // Vinger
    ctx.beginPath();
    ctx.ellipse(x + 15, 64, 15, 25, Math.PI / 4, 0, 2 * Math.PI);
    ctx.strokeStyle = "#242424";
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(x - 15, 64, 15, 25, (2 * Math.PI) / 3, 0, 2 * Math.PI);
    ctx.strokeStyle = "#242424";
    ctx.stroke();

    // Øyehvite
    ctx.beginPath();
    goingRight
      ? ctx.arc(x + 17, 95, 6, 0, 2 * Math.PI)
      : ctx.arc(x - 17, 95, 6, 0, 2 * Math.PI);
    ctx.fillStyle = "#f4f4f4";
    ctx.fill();

    // Pupill
    ctx.beginPath();
    goingRight
      ? ctx.arc(x + 19, 95, 2, 0, 2 * Math.PI)
      : ctx.arc(x - 19, 95, 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#242424";
    ctx.fill();

    // onClick flue
    c.onclick = function (e) {
      const rect = this.getBoundingClientRect(),
        mouseX = e.clientX - rect.left,
        mouseY = e.clientY - rect.top;

      getFly(x);

      if (ctx.isPointInPath(mouseX, mouseY)) {
        flying = false;
        setTimeout(() => {
          flying = true;
        }, 1000);
      }
    };

    window.requestAnimationFrame(loop);
  })
);

function getFly(x) {
  ctx.beginPath();
  ctx.ellipse(x, 100, 30, 43, Math.PI / 2, 0, 2 * Math.PI);
  ctx.closePath();
}

// Kropp
ctx.beginPath();
ctx.arc(200, 450, 170, 1.25 * Math.PI, 1 * Math.PI, true);
ctx.lineTo(30, 650);
ctx.lineTo(370, 450);
ctx.strokeStyle = "#1a8058";
ctx.fillStyle = "#1a8058";
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(200, 450, 170, 1.75 * Math.PI, 2 * Math.PI);
ctx.lineTo(370, 650);
ctx.lineTo(30, 650);
ctx.strokeStyle = "#1a8058";
ctx.fillStyle = "#1a8058";
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(140, 414, 60, 1.2 * Math.PI, 1 * Math.PI, true);
ctx.lineTo(83, 650);
ctx.lineTo(317, 650);
ctx.strokeStyle = "#109963";
ctx.fillStyle = "#109963";
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(260, 414, 60, 1.8 * Math.PI, 2 * Math.PI);
ctx.lineTo(317, 650);
ctx.lineTo(83, 650);
ctx.lineTo(100, 350);
ctx.strokeStyle = "#109963";
ctx.fillStyle = "#109963";
ctx.stroke();
ctx.fill();

// Hode
ctx.beginPath();
ctx.arc(200, 390, 170, 1.2 * Math.PI, 1.8 * Math.PI);
ctx.arc(100, 320, 50, 0.7 * Math.PI, 1.3 * Math.PI);
ctx.arc(200, 250, 170, 0.2 * Math.PI, 0.8 * Math.PI);
ctx.arc(300, 320, 50, 1.7 * Math.PI, 2.3 * Math.PI);
ctx.strokeStyle = "#126947";
ctx.fillStyle = "#1a8058";
ctx.stroke();
ctx.fill();

// Munn, hake
ctx.beginPath();
ctx.arc(200, 250, 170, 0.28 * Math.PI, 0.72 * Math.PI);
ctx.lineTo(92, 345);
ctx.arc(112, 345, 20, 1 * Math.PI, 1.4 * Math.PI);
ctx.lineTo(145, 330);
ctx.lineTo(210, 340);
ctx.lineTo(295, 325);
ctx.arc(289, 345, 20, 1.6 * Math.PI, 2 * Math.PI);
ctx.strokeStyle = "#13b375";
ctx.fillStyle = "#13b375";
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(125, 445, 120, 1.42 * Math.PI, 1.6 * Math.PI);
ctx.arc(195, 217, 120, 0.6 * Math.PI, 0.4 * Math.PI, true);
ctx.arc(270, 445, 120, 1.42 * Math.PI, 1.6 * Math.PI);
ctx.strokeStyle = "#202624";
ctx.fillStyle = "#13b375";
ctx.lineWidth = 7;
ctx.stroke();

// V. Øye
ctx.beginPath();
ctx.arc(110, 250, 35, 0, 2 * Math.PI);
ctx.strokeStyle = "#f4f4f4";
ctx.fillStyle = "#f4f4f4";
ctx.lineWidth = 1;
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(110, 279, 40, 1.25 * Math.PI, 1.75 * Math.PI);
ctx.arc(110, 222, 40, 0.25 * Math.PI, 0.75 * Math.PI);
ctx.strokeStyle = "#242424";
ctx.fillStyle = "#242424";
ctx.stroke();
ctx.fill();

// H. Øye
ctx.strokeStyle = "#f4f4f4";
ctx.fillStyle = "#f4f4f4";
ctx.beginPath();
ctx.arc(280, 250, 35, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(280, 279, 40, 1.25 * Math.PI, 1.75 * Math.PI);
ctx.arc(280, 222, 40, 0.25 * Math.PI, 0.75 * Math.PI);
ctx.strokeStyle = "#242424";
ctx.fillStyle = "#242424";
ctx.stroke();
ctx.fill();
