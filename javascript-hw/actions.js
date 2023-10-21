const openBtn = document.querySelector("[data-action=open-modal]");
const backdrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector("[data-action=close-modal]");

function toggleFunction () {
backdrop.classList.toggle("show-modal")
};

console.log(openBtn)
console.log(closeBtn)
openBtn.addEventListener("click", toggleFunction);
closeBtn.addEventListener("click", toggleFunction);
backdrop.addEventListener("click", (event) => {
console.log(event.target)
if (event.target.classList.contains("backdrop")) {
    toggleFunction()
}
});






                
        



