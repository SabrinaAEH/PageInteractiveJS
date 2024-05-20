// Fonctionnalité 1 et 1 bis:
var footerEl = document.querySelector('footer');
footerEl.addEventListener('click', function() {
    console.log('clique');
});

// Fonctionnalité 2:
var hamburgerButton = document.querySelector('.navbar-toggler');
var navbarHeader = document.getElementById('navbarHeader');
hamburgerButton.addEventListener('click', function() {
    navbarHeader.classList.toggle('collapse');
});

// Fonctionnalité 3:
var firstCard = document.querySelector('.card');
console.log(firstCard);
var editButton = firstCard.querySelector('.btn-outline-secondary');
console.log(editButton);
editButton.addEventListener('click', function() {
    firstCard.querySelector('.card-body').style.color = 'red';
});

// Fonctionnalité 4:
var secondCard = document.querySelectorAll('.card')[1];
console.log(secondCard);
var editButton2 = secondCard.querySelector('.btn-outline-secondary');
console.log(editButton2);
editButton2.addEventListener('click', function() {
    if (secondCard.querySelector('.card-body').style.color === 'green') {
        secondCard.querySelector('.card-body').style.color = '';
    } else {
        secondCard.querySelector('.card-body').style.color = 'green';
    }
});

// Fonctionnalité 5:
var bootstrapLink = document.querySelector('link[href*="bootstrap"]');
console.log(bootstrapLink);
var navbar = document.querySelector('.navbar');
navbar.addEventListener('dblclick', function() {
    if (bootstrapLink.disabled) {
        // Réactiver le CSS de Bootstrap
        bootstrapLink.disabled = false;
    } else {
        // Désactiver le CSS de Bootstrap
        bootstrapLink.disabled = true;
    }
});

// Fonctionnalité 6:
var viewButtons = document.querySelectorAll('.btn-success');

// Boucle sur chaque bouton "View"
for (let i = 0; i < viewButtons.length; i++) {
    // Ajouter un écouteur d'événement mouseenter à chaque bouton "View"
    viewButtons[i].addEventListener('mouseenter', function(event) {
        // Réduire la taille de l'image à 20%
        var card = event.target.closest('.card');
        var cardImage = card.querySelector('.card-img-top');
        cardImage.style.width = '20%';
        
        // Masquer le texte de la card
        var card = event.target.closest('.card');
        var cardText = card.querySelector('.card-text');
        cardText.style.display = 'none';
    });

    // Ajouter un écouteur d'événement mouseleave à chaque bouton "View"
    viewButtons[i].addEventListener('mouseleave', function(event) {
        // Rétablir la taille de l'image à sa taille normale
        var card = event.target.closest('.card');
        var cardImage = card.querySelector('.card-img-top');
        cardImage.style.width = '20%';
        
        // Afficher le texte de la card
        var card = event.target.closest('.card');
        var cardText = card.querySelector('.card-text');
        cardText.style.display = '';
    });
}

// Fonctionnalité 7:

