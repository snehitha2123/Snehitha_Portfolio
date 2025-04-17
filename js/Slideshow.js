const homeBg = document.querySelector('.home-bg');
const images = [
    'data/img/bg.jpg',
    'data/img/bg1.jpg',
    'data/img/bg2.webp'
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    homeBg.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 3000); // Change every 5 seconds
