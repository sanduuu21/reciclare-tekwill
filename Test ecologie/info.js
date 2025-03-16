document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slides img");
    const totalSlides = slides.length;

    slides.forEach(slide => slide.style.display = "none");
    slides[0].style.display = "block";

    function showSlides() {
        slides.forEach(slide => {
            slide.style.opacity = "0"; 
            slide.style.display = "none";
        });

        slides[slideIndex].style.display = "block";
        setTimeout(() => { slides[slideIndex].style.opacity = "1"; }, 100); 

        slideIndex = (slideIndex + 1) % totalSlides;
    }

    showSlides(); 
    setInterval(showSlides, 3000); 
});
