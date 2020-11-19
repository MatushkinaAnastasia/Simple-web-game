const field = document.getElementById("field");
const score = document.getElementById("score");
const timer = document.getElementById("timer");

let n = 2;
let alpha = 500;

let timerId;
let time;

start();

function start() {
    clearInterval(timerId);
    time = 60 * 1000;
    timerId = setInterval(function() {
        timer.innerHTML = Math.round(time / 1000);
        if (time <= 0) {
            getFailed();
        }
        time -= 100;
    }, 100);

    n = 2;
    alpha = 500;

    next();
}

function next() {
    score.innerHTML = n - 1;
    field.innerHTML = "";
    
    const n2 = n*n;
    const size = 492 / n;
    const margin = Math.max(Math.floor(size / 30), 1);
    const realSize = size - margin;

    if (alpha === 1000) {
        alert("WIN");
        start();
        return;
    }

    const r = randomInteger(0, 255);
    const g = randomInteger(0, 255);
    const b = randomInteger(0, 255);
    let color = "rgb(" + r + ", " + g + ", " + b + ")";

    for (let index = 0; index < n2; index++) {
        const elem = document.createElement("div");
        elem.className = "square";
        elem.id = index;
        elem.style.width = realSize + "px";
        elem.style.height = realSize + "px";
        elem.style.margin = margin + "px " + "0 0 " + margin + "px";
        elem.style.backgroundColor = color;
        
        field.appendChild(elem);
        elem.onclick = () => getFailed();
    }
    color = "rgb(" + r + ", " + g + ", " + b + ", " + (alpha / 1000) + ")";
    alpha = alpha + 25;
    const el = document.getElementById(randomInteger(0, n2 - 1));
    el.style.backgroundColor = color;
    el.onclick = () => next();
    n++;
}

function getFailed () {
    alert("LOSE!!!!");
    start();
}
 
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}