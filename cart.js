let panier = JSON.parse(localStorage.getItem("panier")) || [];

function ajouterAuPanier(produit) {
    panier.push(produit);
    localStorage.setItem("panier", JSON.stringify(panier));
    majCompteurPanier();
}

function afficherPanier() {
    const container = document.getElementById("panier-items");
    const totalElement = document.getElementById("panier-total");
    let total = 0;

    container.innerHTML = panier.map((item, index) => {
        total += item.prix * item.quantite;
        return `
            <div class="panier-item">
                <h3>${item.nom} (${item.couleur})</h3>
                <p>${item.prix}€ x ${item.quantite}</p>
                <button onclick="supprimerDuPanier(${index})">Supprimer</button>
            </div>
        `;
    }).join("");

    totalElement.textContent = total.toFixed(2) + "€";
}

function supprimerDuPanier(index) {
    panier.splice(index, 1);
    localStorage.setItem("panier", JSON.stringify(panier));
    afficherPanier();
    majCompteurPanier();
}

function majCompteurPanier() {
    document.getElementById("cart-count").textContent = panier.length;
}


document.addEventListener('DOMContentLoaded', majCompteurPanier);

document.addEventListener('DOMContentLoaded', () => {
    const panier = JSON.parse(localStorage.getItem('panier')) || [];
    const container = document.getElementById('panier-items');
    let total = 0;

    container.innerHTML = panier.map(item => {
        total += item.prix * item.quantite;
        return `
            <div class="panier-item">
                <img src="${item.image}" alt="${item.nom}">
                <div>
                    <h4>${item.nom}</h4>
                    <p>${item.couleur} | ${item.taille}</p>
                    <p>${item.prix}€ x ${item.quantite}</p>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('panier-total').textContent = total.toFixed(2) + '€';
});

// Function to change the main image
function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
    function changeImage(newSrc) {
        var mainImage = document.getElementById("main-image");
        mainImage.src = newSrc; // Ensure this line works
    }
    console.log("Image clicked:", newSrc);
}

function changeImage(imageSrc) {
    console.log("Image clicked:", imageSrc);
    var mainImage = document.getElementById("main-image");
    mainImage.src = imageSrc; // Update the main image src
}

function changeImage(imageSrc) {
    console.log("Image clicked:", imageSrc);
    document.getElementById('main-image').src = imageSrc;
}





