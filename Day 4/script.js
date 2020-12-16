const Open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

Open.addEventListener("click", (e) => {
    container.classList.add("show-nav");
})
close.addEventListener("click", (e) => {
    container.classList.remove("show-nav");
})