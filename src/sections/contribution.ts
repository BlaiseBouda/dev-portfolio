export type Contribution = {
  id: number;
  cover: string;
  title: string;
  short_description: string;
  description: {
    more_desc: string;
    context?: string;
    contributions: string[];
    technologies: string[];
    next?: number;
    prev?: number;
    visit_link?: string;
  };
  technologies: string[];
};

export const contributions: Contribution[] = [
  {
    id: 1,
    cover: "fdf",
    title: "Solution de paiement",
    short_description:
      "Développement d’une solution de paiement sécurisée en interne chez Ytech.",
    description: {
      more_desc:
        "Développement d’une solution de paiement sécurisée en interne chez Ytech, garantissant fiabilité et protection des transactions financières. Pour des raisons de confidentialité, le contexte complet du projet ne peut être partagé.",
      contributions: [
        "Optimisé les requêtes SQL, réduisant le temps de réponse de 40%.",
        "Implémenté des tests unitaires (Pest) atteignant 90% de couverture.",
        "Renforcé la sécurité avec la protection CSRF, la prévention des attaques DDoS et la validation stricte des données.",
        "Rédigé la documentation via Swagger pour faciliter l’intégration du frontend.",
        "Livré la maquette de l’application mobile et de la landing page.",
      ],
      technologies: [
        "Laravel → Backend solide et développement de l’API.",
        "Swagger → Documentation claire et interactive des endpoints API.",
        "Filament PHP → Panneau d’administration moderne et intuitif.",
      ],
      next: 2,
      visit_link: "https://ypay.ytech-bf.com/",
    },
    technologies: ["Laravel", "Swagger", "API"],
  },
  {
    id: 2,
    cover: "fdf",
    title: "Gestion de pharmacie",
    short_description:
      "Intégration et développement d’une application desktop moderne de gestion de pharmacie.",
    description: {
      more_desc:
        "Développement et intégration d’une application desktop moderne de gestion de pharmacie, facilitant la gestion des stocks, ventes et des approvissionements.",
      context:
        "Bien que des logiciels existent déjà sur le marché, la plupart sont souvent trop complexes, coûteux et basés sur des données locales peu sécurisées. C’est ainsi que Ytech a développé G-Pharma, une application simple, abordable et fiable, avec des données protégées.",
      contributions: [
        "Mis en place une architecture Clean avec API Composition, Pinia et Vue Router.",
        "Optimisé les performances des rendus pour une expérience fluide.",
        "Rédigé et exécuté des tests unitaires (Vitest) pour assurer la fiabilité et simplifier la maintenance.",
        "Packagé l’application en desktop avec Electron.js.",
        "Renforcé la robustesse du code grâce au typage strict avec TypeScript, garantissant une meilleure maintenabilité et réduisant les erreurs en production.",
      ],
      technologies: [
        "TypeScript → Typage strict pour un code robuste et maintenable.",
        "Vue.js → Développement du frontend moderne et réactif.",
        "Pinia → Gestion globale de l’état avec simplicité et efficacité.",
        "Electron.js → Packaging en application desktop multiplateforme.",
        "GitHub Actions → Intégration continue et automatisation des déploiements.",
      ],
      next: 3,
      prev: 1,
    },
    technologies: ["VueJs", "Pinia", "TailwindCSS", " Electron Js"],
  },
  {
    id: 3,
    cover: "dffd",
    title: "Union Halal",
    short_description:
      "Conception UI/UX et développement de l’API en Laravel pour une application de rencontre 100% Halal.",
    description: {
      more_desc:
        "Conception UI/UX et développement de l’API en Laravel pour une application de rencontre 100% Halal.",
      context:
        "Notre client souhaitait aider les musulmans à trouver leur âme sœur dans un cadre 100% halal et éthique. J’ai alors été sollicité pour travailler sur le design de l’application et apporter mon expertise en backend avec Laravel.",
      contributions: [
        "Conception du design avec prototypes interactifs.",
        "Développement du backend avec Laravel.",
        "Rédaction de la documentation API avec Swagger.",
      ],
      technologies: [
        "Figma → Prototypage et conception UI/UX.",
        "Laravel → Développement du backend robuste et évolutif.",
        "Swagger → Documentation claire et interactive de l’API.",
      ],
      next: 4,
      prev: 2,
    },
    technologies: ["Laravel", "Swagger", "Figma"],
  },
  {
    id: 4,
    cover: "dfdf",
    title: "Landing Page – Portfolio",
    short_description:
      "Intégration d’une landing page moderne regroupant mes principales réalisations en design",
    description: {
      more_desc: "",
      contributions: [],
      technologies: [],
      prev: 4,
    },
    technologies: ["React", "CSS", "TypeScript", "Figma"],
  },
];
