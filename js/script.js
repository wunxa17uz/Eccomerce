const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let headerMenu = document.querySelector('.header__menu')

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    headerMenu.classList.toggle("open");
}
























// scroll-animation-effect
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry);
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     })
// })

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

