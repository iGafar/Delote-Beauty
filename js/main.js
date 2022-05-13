const burger = document.getElementsByClassName('header__burger')[0];
const sidebar = document.getElementsByClassName('aside')[0];
const sidebar_close = document.getElementsByClassName('aside__close')[0];

burger.onclick = () => {
    sidebar.style.opacity = "1";
}

sidebar_close.onclick = () => {
    sidebar.style.opacity = "0";
}