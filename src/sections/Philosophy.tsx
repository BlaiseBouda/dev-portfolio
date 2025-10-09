import { SectionTitle } from "../components/SectionTitle";
import Flex from "../components/Flex";

type Philosophy = {
  title: string;
  steper: string;
  description: string;
};

const philosophies: Philosophy[] = [
  {
    title: "🤝 Travail d’équipe",
    description:
      "J’apprécie la collaboration, le partage de connaissances et je sais autant aider que me laisser aider pour avancer ensemble.",
    steper: "01",
  },
  {
    title: "📌 Discipline & flexibilité",
    description:
      "J’accorde de l’importance à l’organisation et je reste ouvert aux améliorations et aux ajustements nécessaires.",
    steper: "02",
  },
  {
    title: "🎯 Focus sur l’essentiel",
    description:
      "Je privilégie la simplicité et je me concentre toujours sur ce qui apporte le plus de valeur.",
    steper: "03",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="space-section">
      <SectionTitle>
        Ma philosophie <br /> de travail
      </SectionTitle>
      <div className="section_container philosophy_container pt-6">
        {philosophies.map((philosophy, index) => (
          <CardPhilosophy key={index} {...philosophy} />
        ))}
      </div>
    </section>
  );
}

function CardPhilosophy(philosophy: Philosophy) {
  return (
    <div className="card">
      <Flex gap="2rem" center between>
        <Flex direction="column">
          <h3 className="unbounded">{philosophy.title}</h3>
          <p>{philosophy.description}</p>
        </Flex>
        <h1 className="steper unbounded">{philosophy.steper}</h1>
      </Flex>
    </div>
  );
}
