const btn = document.querySelector("#btn_order");
const backDrop = document.querySelector("#back_drop");
const closeBtn = document.querySelector("#close_btn_modal")


const openModal = () => {
    backDrop.classList.add("is_open");
}

const closeModal = () => {
    backDrop.classList.remove("is_open");
}

btn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);


const openMenuBtn = document.querySelector("#menu_btn");
const menuMain = document.querySelector("#menu_main");
const closeMenuBtn = document.querySelector("#close_menu_btn");

const openMenu = () => {
    menuMain.classList.add("is-open");
}

const closeMenu = () => {
    menuMain.classList.remove("is-open");
}

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);