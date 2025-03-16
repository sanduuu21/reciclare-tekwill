document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");
    const navBar = document.querySelector("nav");
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.style.display = "none";
    });

    startButton.addEventListener("click", function () {
        introScreen.style.opacity = "1";
        introScreen.style.transition = "opacity 1s ease-out";
        introScreen.style.opacity = "0";
        
        setTimeout(() => {
            introScreen.style.display = "none";
            mainContent.style.display = "block";
            navBar.style.display = "flex";
            navBar.style.opacity = "0";
            navBar.style.transition = "opacity 1s ease-in";
            navBar.style.opacity = "1";
        }, 1000);
    });

    
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.transition = "0.3s";
            this.style.transform = "scale(1.1)";
        });
        link.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            const href = this.getAttribute("href");
            if (href.includes(".html")) {
                return;
            }
            
            event.preventDefault();
            const targetId = href.substring(1);
            sections.forEach(section => {
                section.style.display = "none";
            });
            
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = "block";
                targetSection.style.opacity = "0";
                targetSection.style.transition = "opacity 0.8s ease-in-out";
                setTimeout(() => {
                    targetSection.style.opacity = "1";
                }, 10);
            }
        });
    });
});