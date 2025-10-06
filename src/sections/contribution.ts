export type Contribution = {
  cover: string;
  title: string;
  short_description: string;
  description: string;
  technologies: string[];
  link: string;
};

export const contributions: Contribution[] = [
  {
    cover: "",
    title: "Solution de paiement",
    short_description:
      "Développement d’une solution de paiement sécurisée en interne chez Ytech.",
    description: "d",
    technologies: ["Laravel", "Swagger", "API"],
    link: "",
  },
  {
    cover: "",
    title: "Gestion de pharmacie",
    short_description:
      "Intégration et développement d’une application desktop moderne de gestion de pharmacie.",
    description: "d",
    technologies: ["VueJs", "Pinia", "TailwindCSS", " Electron Js"],
    link: "",
  },
  {
    cover: "",
    title: "Union Halal",
    short_description:
      "Conception UI/UX et développement de l’API en Laravel pour une application de rencontre 100% Halal.",
    description: "d",
    technologies: ["Laravel", "Swagger", "Figma"],
    link: "",
  },
  {
    cover: "",
    title: "Landing Page – Portfolio",
    short_description:
      "Intégration d’une landing page moderne regroupant mes principales réalisations en design",
    description: "d",
    technologies: ["React", "CSS", "TypeScript", "Figma"],
    link: "",
  },
];
