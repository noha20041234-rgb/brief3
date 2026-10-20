# NUANCE — Configurateur de maquillage

## À propos du projet

NUANCE est un configurateur de maquillage qui permet aux utilisateurs de personnaliser leur produit selon leurs préférences. Le projet vise à offrir une expérience intuitive et élégante, avec une interface moderne et une mise en page soignée.

## Objectifs

- Créer une interface utilisateur intuitive et esthétique.
- Présenter un aperçu visuel du produit.
- Permettre le choix du produit, de la teinte et de la finition.
- Afficher un récapitulatif des choix et du prix.
- Adapter l'interface aux différents formats d'écran.

## Fonctionnalités

- **Header :** en-tête de la page.
- **Hero :** section principale de présentation.
- **Configurateur :** personnalisation du produit.
- **Récapitulatif :** résumé des choix et du prix.
- **Footer :** pied de page avec les informations utiles.
- **Responsive design :** adaptation aux mobiles, tablettes et ordinateurs.

## Technologies utilisées

- HTML5 — structure du contenu.
- CSS3 — styles et mise en page avec CSS Grid.
- JavaScript — interactions dynamiques prévues.
- Git et GitHub — gestion de versions et collaboration.
- Jira — organisation et suivi des tâches.

## Structure du projet

```text
Nuance/
├── assets/
│   ├── icons/
│   └── image/
├── css/
│   └── style.css
├── index.html
└── README.md
```

## Organisation des branches Git

Le projet utilise une organisation par branches afin de séparer le développement des différentes parties de l'interface.

| Branche | Responsabilité |
|---|---|
| `main` | Version principale et stable du projet |
| `develop` | Intégration des fonctionnalités développées |
| `feature/header` | Développement du Header |
| `feature/hero` | Développement de la section Hero |
| `feature/configurator` | Développement du panneau de personnalisation |
| `feature/summary` | Développement du récapitulatif |
| `feature/footer` | Développement du Footer |
| `feature/responsive` | Adaptation responsive de l'interface |


### Commandes Git utiles

Créer une branche pour une fonctionnalité :

```bash
git switch develop
git pull origin develop
git switch -c feature/footer
```

Enregistrer les modifications :

bash
git add .
git commit -m "feat: develop footer section"


Publier la branche :

bash
git push -u origin feature/footer


