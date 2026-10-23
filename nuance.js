

    // Récupérer les éléments du configurateur
    const produits = document.querySelectorAll('input[name="produit"]');
    const teintes = document.querySelectorAll('input[name="teint"]');
    const finitions = document.querySelectorAll('input[name="finition"]');

    const boutonPanier = document.querySelector(".checkout button");
    const prixCheckout = document.querySelector(".checkout strong");

    // Noms des teintes
    const nomsTeintes = {
        "01": "Nude",
        "02": "Rosewood",
        "03": "Cacao",
        "04": "Prune",
        "05": "Rouge",
        "06": "Terracotta"
    };

    // Formater le prix
    function formaterPrix(prix) {
        return prix.toFixed(2).replace(".", ",") + " DH";
    }

    // Récupérer une option sélectionnée
    function valeurSelectionnee(options) {
        const choix = document.querySelector(
            'input[name="' + options + '"]:checked'
        );

        return choix ? choix.value : null;
    }

    // Calculer le prix
    function calculerPrix() {
        const produit = valeurSelectionnee("produit");
        const finition = valeurSelectionnee("finition");

        let prix = 0;

        if (produit === "Fond de teint") {
            prix = 160;
        } else if (produit === "Rouge à lèvres") {
            prix = 120;
        }

        if (finition === "Brillant" && prix > 0) {
            prix += 15;
        }

        return prix;
    }

    // Mettre à jour le prix sur la page 1
    function mettreAJourPrix() {
        if (prixCheckout) {
            prixCheckout.textContent = formaterPrix(calculerPrix());
        }
    }

    produits.forEach(function (produit) {
        produit.addEventListener("change", mettreAJourPrix);
    });

    finitions.forEach(function (finition) {
        finition.addEventListener("change", mettreAJourPrix);
    });

    // Ajouter au panier
    if (boutonPanier) {
        boutonPanier.addEventListener("click", function () {
            const produit = valeurSelectionnee("produit");
            const teint = valeurSelectionnee("teint");
            const finition = valeurSelectionnee("finition");

        
             // pour passer page 2 obligatoire de choisi
            if (!produit || !teint || !finition) {
                alert("Veuillez choisir un produit, une teinte et une finition.");
                return;
            }
            let prixProduit = 0;

            if (produit === "Fond de teint") {
                prixProduit = 160;
            } else {
                prixProduit = 120;
            }

            let prixFinition = 0;

            if (finition === "Brillant") {
                prixFinition = 15;
            }

            const commande = {
                produit: produit,
                teint: teint,
                nomTeinte: nomsTeintes[teint],
                finition: finition,
                prixProduit: prixProduit,
                prixFinition: prixFinition,
                prixTotal: calculerPrix()
            };

            localStorage.setItem(
                "commandeNuance",
                JSON.stringify(commande)
            );

            window.location.href = "recapitulatif.html";
        });
    }

    // Afficher la commande sur la page 2
    const recapProduit = document.getElementById("recap-produit");

    if (recapProduit) {
        const commandeEnregistree = localStorage.getItem("commandeNuance");

        if (!commandeEnregistree) {
            recapProduit.textContent = "Aucune commande enregistrée";
        } else {
            const commande = JSON.parse(commandeEnregistree);
            if(commande.produit === "Rouge à lèvres"){
                document.getElementById("recap-nom").textContent =
                  "Le rouge signature";
            }else{
                document.getElementById("recap-nom").textContent =
                "Le teint signature";


            }
               
        

            document.getElementById("recap-description").textContent =
                commande.teint + " " + commande.nomTeinte +
                " · Fini " + commande.finition;

            document.getElementById("recap-produit").textContent =
                commande.produit;

            document.getElementById("recap-prix-produit").textContent =
                formaterPrix(commande.prixProduit);

            document.getElementById("recap-teint").textContent =
                "Teinte · " + commande.teint + " " + commande.nomTeinte;

            document.getElementById("recap-finition").textContent =
                "Fini · " + commande.finition;

            document.getElementById("recap-prix-fini").textContent =
                commande.prixFinition > 0
                    ? "+ " + formaterPrix(commande.prixFinition)
                    : "Inclus";

            document.getElementById("recap-prix").textContent =
                formaterPrix(commande.prixTotal);
        }
    };