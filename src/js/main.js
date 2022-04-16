import '../styles/main.scss';

function readJson() {
    const baseUrl = "https://raw.githubusercontent.com/centerwebpro/sunweb_projects_1/main/accepts/data.json";

    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        setNavLinks(data);
    });

    function setNavLinks(data) {
        let navBlock = document.querySelector('.middle');
        if(navBlock) {
            Object.entries(data).forEach(item => {
                if (item[1].status == true) {
                    let navElenet = `<a href="#" class="middle-item">${item[1].name}</a>`;
                    navBlock.innerHTML += navElenet;
                }
            })
        }
    }
}

readJson()



// We enable .scrollline-text when full load page
window.addEventListener('load', (event) => {
    var elements = document.querySelectorAll('.scrollline-text');
    for (var i = 0; i < elements.length; i++)
    elements[i].style.display = 'block';
});



// Menu header fullscreen
let popup = document.querySelector('.popup');
let header = document.querySelector('.top');
let hamburger = document.querySelector('.main-left__hamburger-image');
let cross = document.querySelector('.main-left__hamburger-imagecross');
let btn = document.querySelector('.main-left__logo-hamburger');
btn.addEventListener('click', function (event) {
    popup.classList.toggle('popup_enable');
    header.classList.toggle('popup-white');
    hamburger.classList.toggle('popup_disable');
    cross.classList.toggle('popup_enable');
});