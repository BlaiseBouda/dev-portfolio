import Card from "../components/Card";
import Flex from "../components/Flex";
import { SectionTitle } from "../components/SectionTitle";
import RightArrow from "../components/icons/RightArrow";
import { contributions, type Contribution } from "./contribution";

export default function Contributions() {
  return (
    <section id="contributions" className="space-section">
      <SectionTitle>
        Explorez mes top <br /> contributions
      </SectionTitle>
      <div className="section_container contributions_container pt-6">
        {contributions.map((contribution, index) => (
          <ContributionCard key={index} {...contribution} />
        ))}
      </div>
    </section>
  );
}

function ContributionCard(contribution: Contribution) {
  return (
    <Card padding="1.5rem" hasHover>
      <Flex direction="column">
        <img src={contribution.cover} alt="" />
        <h3 className="unbounded">{contribution.title}</h3>
        <Flex gap=".5rem" direction="column">
          <p>{contribution.short_description}</p>
          <Technologies technologies={contribution.technologies} />
        </Flex>
        <a href={contribution.link} className="btn-link">
          Voir le projet
          <RightArrow />
        </a>
      </Flex>
    </Card>
  );
}

function Technologies({ technologies }: { technologies: string[] }) {
  return (
    <Flex gap=".5rem">
      {technologies.map((technology, index) => (
        <div className="techology" key={index}>
          {technology}
        </div>
      ))}
    </Flex>
  );
}
