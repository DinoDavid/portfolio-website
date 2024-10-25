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
        for (let i = 1; i <= 6; i++) {
            const img = document.createElement("img");
            img.src = `images/${category}/image${i}.jpg`; // Setter bildestien
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
