import arrow from "../assets/arrow.svg";
import Reveal from "./Reveal";

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <h1 className="section-title unbounded">
        {children}
        <span>
          <img src={arrow} width={60} height={75} alt="arrow" />
        </span>
      </h1>
    </Reveal>
  );
}
