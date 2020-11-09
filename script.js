const field = document.getElementById("field");
const scoreboard = document.getElementById("scoreboard");

let n = 2;
next();
function next() {
    scoreboard.innerHTML = n - 1;
    field.innerHTML = "";
    
    const n2 = n*n;
    const size = 492 / n;
    const margin = Math.max(Math.floor(size / 30), 1);
    const realSize = size - margin;
    console.log("size = " + size);
    console.log("margin = " + margin);
    console.log("realSize = " + realSize);
    console.log("492 - (realSize + margin) * n = " + (492 - (realSize + margin) * n));
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

    color = "rgb(" + changeInt(r, 100) + ", " + g + ", " + b + ")";
    const el = document.getElementById(randomInteger(0, n2 - 1));
    el.style.backgroundColor = color;
    el.onclick = () => next();
    n++;
}

function getFailed () {
    alert("WRONG!");
    n = 2;
    next();
    
}
 
function changeInt(int, delta) {
    if (int + delta > 255) return int - delta;
    return int + delta;
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}