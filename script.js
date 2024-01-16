//VARIABLES
const modal = document.getElementById("modal"),
    btn = document.getElementById("btn"),
    close = document.querySelector(".close");


btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);




//Open Modal
function openModal(e) {
    e.preventDefault();
    modal.style.display = "block";
}

//Close Modal 
function closeModal() {
    modal.style.display = 'none';
}