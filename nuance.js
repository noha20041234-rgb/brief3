
const config = {
    categorie: {
        fond: { name: "Fond de teint", price: 160 },
        rouge: { name: "Rouge à lèvres", price: 120 }
    },

    teinte: {
        nude: { name: "01 Nude", price: 0 },
        rosewood: { name: "02 Rosewood", price: 0 },
        cacao: { name: "03 Cacao", price: 0 },
        prune: { name: "04 Prune", price: 0 },
        rouge: { name: "05 Rouge", price: 0 },
        terracotta: { name: "06 Terracotta", price: 0 }
    },

    fini: {
        mat: { name: "Mat", price: 0 },
        brillant: { name: "Brillant", price: 15 }
    }
};



let selectedConfig = {
    categorie: null,
    teinte: null,
    fini: null
};



const labels = document.getElementsByClassName("choix-card");
const teintes = document.getElementsByClassName("teint-card");
const finitions = document.getElementsByClassName("option-fini");


labels[0].querySelector(".choix-name").textContent =
    config.categorie.fond.name;

labels[0].querySelector(".choix-prix").textContent =
    config.categorie.fond.price + " DH";

labels[1].querySelector(".choix-name").textContent =
    config.categorie.rouge.name;

labels[1].querySelector(".choix-prix").textContent =
    config.categorie.rouge.price + " DH"

teintes[0].querySelector("span:last-child").textContent =
    config.teinte.nude.name;

teintes[1].querySelector("span:last-child").textContent =
    config.teinte.rosewood.name;

teintes[2].querySelector("span:last-child").textContent =
    config.teinte.cacao.name;

teintes[3].querySelector("span:last-child").textContent =
    config.teinte.prune.name;

teintes[4].querySelector("span:last-child").textContent =
    config.teinte.rouge.name;

teintes[5].querySelector("span:last-child").textContent =
    config.teinte.terracotta.name;



finitions[0].querySelector("strong").textContent =
    config.fini.mat.name;

finitions[0].querySelector("small").textContent =
    "Inclus";

finitions[1].querySelector("strong").textContent =
    config.fini.brillant.name;

finitions[1].querySelector("small").textContent =
    "+" + config.fini.brillant.price + " DH";



labels[0].addEventListener("click", choix_fond);
labels[1].addEventListener("click", choix_rouge);

function choix_fond() {
    selectedConfig.categorie = config.categorie.fond;
    calculerTotal();
}

function choix_rouge() {
    selectedConfig.categorie = config.categorie.rouge;
    calculerTotal();
}



teintes[0].addEventListener("click", choix_nude);
teintes[1].addEventListener("click", choix_rosewood);
teintes[2].addEventListener("click", choix_cacao);
teintes[3].addEventListener("click", choix_prune);
teintes[4].addEventListener("click", choix_rouge_teinte);
teintes[5].addEventListener("click", choix_terracotta);

function choix_nude() {
    selectedConfig.teinte = config.teinte.nude;
    calculerTotal();
}

function choix_rosewood() {
    selectedConfig.teinte = config.teinte.rosewood;
    calculerTotal();
}

function choix_cacao() {
    selectedConfig.teinte = config.teinte.cacao;
    calculerTotal();
}

function choix_prune() {
    selectedConfig.teinte = config.teinte.prune;
    calculerTotal();
}

function choix_rouge_teinte() {
    selectedConfig.teinte = config.teinte.rouge;
    calculerTotal();
}

function choix_terracotta() {
    selectedConfig.teinte = config.teinte.terracotta;
    calculerTotal();
}



finitions[0].addEventListener("click", choix_mat);
finitions[1].addEventListener("click", choix_brillant);

function choix_mat() {
    selectedConfig.fini = config.fini.mat;
    calculerTotal();
}

function choix_brillant() {
    selectedConfig.fini = config.fini.brillant;
    calculerTotal();
}



function calculerTotal() {
    let total = 0;

    if (selectedConfig.categorie !== null) {
        total = total + selectedConfig.categorie.price;
    }

    if (selectedConfig.teinte !== null) {
        total = total + selectedConfig.teinte.price;
    }

    if (selectedConfig.fini !== null) {
        total = total + selectedConfig.fini.price;
    }

    document.querySelector(".checkout strong").textContent =
        total + " DH";

    return total;
}


const page1 = document.querySelector("#configurateur");
const commande = document.querySelector("#commande");
const page2 = document.querySelector(".recap-page");

const bouton = document.querySelector("#commande button");



bouton.addEventListener("click", function () {

    if (
        selectedConfig.categorie === null ||
        selectedConfig.teinte === null ||
        selectedConfig.fini === null
    ) {
        alert("Choisissez une catégorie, une teinte et une finition.");
        return;
    }

    afficherRecap();

    page1.classList.add("hidden");
    commande.classList.add("hidden");
    page2.classList.remove("hidden");

});  



function afficherRecap() {

    document.querySelector("#recap-nom").textContent =
        selectedConfig.categorie.name;

    document.querySelector("#recap-description").textContent =
        selectedConfig.teinte.name + " · Fini " + selectedConfig.fini.name;

    document.querySelector("#recap-produit").textContent =
        selectedConfig.categorie.name;

    document.querySelector("#recap-prix-produit").textContent =
        selectedConfig.categorie.price + " DH";

    document.querySelector("#recap-teint").textContent =
        "Teinte · " + selectedConfig.teinte.name;

    document.querySelector("#recap-finition").textContent =
        "Fini · " + selectedConfig.fini.name;

    if (selectedConfig.fini.price === 0) {

        document.querySelector("#recap-prix-fini").textContent =
            "Inclus";

    } else {

        document.querySelector("#recap-prix-fini").textContent =
            "+" + selectedConfig.fini.price + " DH";

    }

    document.querySelector("#recap-prix").textContent =
        calculerTotal() + " DH";

}


