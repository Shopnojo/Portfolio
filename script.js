document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth Scrolling Fix for Fixed Header
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector("header").offsetHeight;
                const sectionPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: sectionPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
