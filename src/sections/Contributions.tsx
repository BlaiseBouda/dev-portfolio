import { useState } from "react";
import Card from "../components/Card";
import Flex from "../components/Flex";
import { SectionTitle } from "../components/SectionTitle";
import RightArrow from "../components/icons/RightArrow";
import { contributions, type Contribution } from "./contribution";
import Modal from "../components/Modal";

export default function Contributions() {
  const [open, setOpen] = useState(false);
  const [contribution, setContribution] = useState<Contribution | null>(null);

  const onShow = (contribution: Contribution) => {
    setOpen(true);
    setContribution(contribution);
  };

  return (
    <>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <main>
          <div className="show_contenair">
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer la fenêtre"
              className="close-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span>Revenir en arrière</span>
            </button>
            {contribution && <Show contribution={contribution} />}
          </div>
        </main>
      </Modal>

      <section id="contributions" className="space-section">
        <SectionTitle>
          Explorez mes top <br /> contributions
        </SectionTitle>
        <div className="section_container contributions_container pt-6">
          {contributions.map((contribution, index) => (
            <ContributionCard
              key={index}
              contribution={contribution}
              onShow={onShow}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function ContributionCard({
  contribution,
  onShow,
}: {
  contribution: Contribution;
  onShow: (contribution: Contribution) => void;
}) {
  return (
    <Card padding="1.5rem" hasHover>
      <Flex gap="1.5rem" direction="column">
        <img src={contribution.cover} alt="screenshot" />
        <h3 className="unbounded">{contribution.title}</h3>
        <Flex gap=".5rem" direction="column">
          <p>{contribution.short_description}</p>
          <Technologies technologies={contribution.technologies} />
        </Flex>
        <button onClick={() => onShow(contribution)} className="btn-link">
          Voir le projet
          <RightArrow />
        </button>
      </Flex>
    </Card>
  );
}

function Technologies({ technologies }: { technologies: string[] }) {
  return (
    <Flex gap=".5rem" wrap>
      {technologies.map((technology, index) => (
        <div className="techology" key={index}>
          {technology}
        </div>
      ))}
    </Flex>
  );
}

function Show({ contribution }: { contribution: Contribution }) {
  const desc = contribution.description;

  return (
    <div className="show_contenair">
      <Flex gap="3em" direction="column">
        <img src={contribution.cover} alt="" />
        <Flex direction="column">
          <div className="title">
            <h3 className="unbounded">{contribution.title}</h3>
            {desc.visit_link && (
              <a href={desc.visit_link} className="btn-link">
                Visiter le site
                <RightArrow />
              </a>
            )}
          </div>
          <p>{desc.more_desc}</p>
          {desc.context && (
            <p>
              <span className="text-gray">Contexte : </span>
              {desc.context}
            </p>
          )}
        </Flex>
        <Flex gap=".5rem" direction="column">
          <h3 className="unbounded">Contributions</h3>
          <ul>
            {desc.contributions.map((contribution, index) => (
              <li key={index}> {contribution}</li>
            ))}
          </ul>
        </Flex>
        <Flex gap=".5rem" direction="column">
          <h3 className="unbounded">Technologies utilisées</h3>
          <ul>
            {desc.technologies.map((technologie, index) => (
              <li key={index}> {technologie}</li>
            ))}
          </ul>
        </Flex>
      </Flex>
    </div>
  );
}
