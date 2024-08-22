document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.animate-img');

    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transform = 'scale(1)';
        }, index * 500); 
    });
});
