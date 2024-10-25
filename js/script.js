// Funksjon for å laste inn bilder til porteføljen
function loadImages() {
    // Definerer hardkodede bilder for hver kategori
    const categories = {
        portrett: [
            'images/portrett/image1.JPG',
            'images/portrett/image2.JPG',
            'images/portrett/image3.JPG'
        ],
        bolig: [
            'images/bolig/image1.JPG',
            'images/bolig/image2.JPG',
            'images/bolig/image3.JPG'
        ],
        bryllup: [
            'images/bryllup/image1.JPG',
            'images/bryllup/image2.JPG',
            'images/bryllup/image3.JPG'
        ],
        film: [
            'images/film/image1.JPG',
            'images/film/image2.JPG',
            'images/film/image3.JPG'
        ]
    };

    // Last inn bilder for hver kategori
    loadCategoryImages('portrett', 'portrett-gallery', categories.portrett);
    loadCategoryImages('bolig', 'bolig-gallery', categories.bolig);
    loadCategoryImages('bryllup', 'bryllup-gallery', categories.bryllup);
    loadCategoryImages('film', 'film-gallery', categories.film);
}

function loadCategoryImages(category, galleryId, images) {
    const gallery = document.getElementById(galleryId);
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image; // Last bildet fra riktig mappe
        img.alt = image.split('/').pop(); // Sett alt-tekst til filnavnet
        img.className = "img-fluid col-md-4 mb-4"; // Bootstrap-klasser for responsivitet
        gallery.appendChild(img);
    });
}

// Kall til loadImages for å laste inn bilder når siden lastes
document.addEventListener('DOMContentLoaded', loadImages);
