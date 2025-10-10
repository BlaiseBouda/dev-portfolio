import arrow from "../assets/arrow.svg";
import Reveal from "./Reveal";

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal>
      <h1 className="section-title unbounded">
        {children}
        <span className={className}>
          <img src={arrow} width={60} height={75} alt="arrow" />
        </span>
      </h1>
    </Reveal>
  );
}
