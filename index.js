document.addEventListener("DOMContentLoaded", function() {
    particlesJS("particles-js", {
        particles: {
            number: { value: 200 },
            size: { value: 3 },
            move: {
                speed: 2,
                direction: "none",
                out_mode: "out"
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            color: { value: "#417fec" },
            shape: { type: "circle" }
        }
    });

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const menuLinks = document.querySelectorAll(".nav-menu a");

    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    // Chiudere il menu quando si clicca fuori
    document.addEventListener("click", function(event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });

    // Aggiungere animazione smooth scrolling e chiusura menu
    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }

            // Chiudere il menu con un'animazione
            setTimeout(() => {
                navMenu.classList.remove("active");
            }, 500);
        });
    });
});
