document.addEventListener("DOMContentLoaded", function () {
    const categories = ["portrett", "bolig", "bryllup", "film"];
    const portfolioContainer = document.getElementById("portfolio-container");

    categories.forEach(category => {
        const categorySection = document.createElement("section");
        categorySection.classList.add("category-section");

        const title = document.createElement("h2");
        title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categorySection.appendChild(title);

        // Legger til bilder for hver kategori
        for (let i = 1; i <= 3; i++) {
            const img = document.createElement("img");
            img.src = `images/${category}/image${i}.JPG`; // Setter bildestien
            img.alt = `${category} ${i}`;
            img.classList.add("portfolio-image");

            // Sjekker om bildet finnes
            img.onerror = function() {
                this.style.display = "none"; // Skjuler bildet hvis det ikke finnes
            };

            categorySection.appendChild(img);
        }

        portfolioContainer.appendChild(categorySection);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let currentImageIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const slideCount = slides.length;
    const dots = document.querySelectorAll(".dot");

    // Oppdaterer bildet ved å flytte slideContainer
    function updateImage(index) {
        // Flytt slideContainer til riktig posisjon
        const offset = -index * 100; // Beregn offset i prosent
        document.querySelector(".slide-container").style.transform = `translateX(${offset}%)`;
        updateDots(index);
    }

    // Oppdaterer prikkene for å vise aktivt bilde
    function updateDots(index) {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    // Starter automatisk rotasjon
    function startAutoRotate() {
        return setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % slideCount; // Gå til neste bilde
            updateImage(currentImageIndex);
        }, 3000); // Bytt hvert 3. sekund
    }

    let autoRotateInterval = startAutoRotate();

    // Event listeners for prikkene
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            clearInterval(autoRotateInterval); // Stopper automatisk rotasjon
            currentImageIndex = index; // Oppdaterer gjeldende bildeindeks
            updateImage(currentImageIndex); // Oppdaterer bildet
            autoRotateInterval = startAutoRotate(); // Starter rotasjonen på nytt
        });
    });

    // Initialiser første bilde og prikk
    updateImage(currentImageIndex);
});
