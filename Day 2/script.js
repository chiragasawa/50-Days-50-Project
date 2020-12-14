const elements = Array(...document.querySelectorAll(".panel"));
const currentActive = document.querySelector(".active");
elements.forEach((element) => {
    element.addEventListener("click", (e) => {
        removeActiveClasses();
        element.classList.toggle("active");
    })
})

function removeActiveClasses() {
    elements.forEach((element) => {
        element.classList.remove("active");
    })
}