document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner toutes les miniatures
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-image');
    const placeholderText = document.getElementById('placeholder-text');
    const description = document.getElementById('description');
    

    // Ajouter un écouteur d'événement à chaque miniature
    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
            // Obtenir le chemin de l'image complète et la description depuis les attributs data
            const fullImageSrc = thumbnail.getAttribute('data-full');
            const imageDescription = thumbnail.getAttribute('data-description');
            
            // Mettre à jour la source de l'image principale et la description
            mainImage.setAttribute('src', fullImageSrc);
            description.textContent = imageDescription;
            
            // Cacher le texte de l'espace réservé
            placeholderText.style.display = 'none';
            
        });
    });
});