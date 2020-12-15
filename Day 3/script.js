const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");
var currentActive = 1;
next.addEventListener("click", (e) => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
})
prev.addEventListener("click", (e) => {
    currentActive--;
    if (currentActive <= 1) {
        currentActive = 1;
    }
    update();
})

function update() {
    progress.style.width = ((currentActive - 1) / (circles.length - 1)) * 100 + "%";
    if (currentActive === 1) {
        prev.disabled = true;
    }
    else if (currentActive === circles.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
    circles.forEach((circle, idx) => {
        if (idx <= currentActive - 1) {
            circle.classList.add("active");
        }
        else {
            circle.classList.remove("active");
        }
    })
}