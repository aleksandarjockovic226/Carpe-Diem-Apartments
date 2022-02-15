let galleryImages = document.querySelectorAll('.gallery-image')
let imageWindow = document.querySelector('.largeImageWindow')
let closeBtn = document.querySelector('.close')
let image = document.querySelector('.largeImage')

galleryImages.forEach(image => {
    image.addEventListener('click', () => openimage(image.getAttribute('img')))
});

closeBtn.addEventListener('click', closeimage)

function openimage(img) {
    document.querySelector('body').style.overflow = 'hidden'

    image.setAttribute('src', `/images/large/${img}.jpg`)
    imageWindow.classList.add('display');
    imageWindow.classList.contains('display') ? imageWindow.style.display = "grid" : imageWindow.style.display = "none";
}

function closeimage() {
    document.querySelector('body').style.overflow = 'auto'

    imageWindow.classList.remove('display');
    imageWindow.classList.contains('display') ? imageWindow.style.display = "grid" : imageWindow.style.display = "none";
}