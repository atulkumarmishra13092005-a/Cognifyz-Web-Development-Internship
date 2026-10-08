const slideImage = document.getElementById("slideImage");
const slideNumber = document.getElementById("slideNumber");
const images = [
    "../image_gallery/images/images1.png",
    "../image_gallery/images/images2.jpeg",
    "../image_gallery/images/images3.png",
    "../image_gallery/images/images4.jpeg",
    "../image_gallery/images/images5.jpeg"
];
let currentImage = 0;
function changeImage() {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    slideImage.src = images[currentImage];
    slideNumber.textContent =
        "Image " + (currentImage + 1) + " of " + images.length;
}
setInterval(changeImage, 2000);