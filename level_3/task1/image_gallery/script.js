function showImage(image) {
    const mainImage = document.getElementById("mainImage");
    const images = document.querySelectorAll(".gallery img");
    images.forEach(function (img) {
        img.classList.remove("selected");
    });
    image.classList.add("selected");
    mainImage.src = image.src;
}