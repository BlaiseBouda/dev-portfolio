import arrow from "../assets/arrow.svg";

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="section-title unbounded">
      {children}
      <span>
        <img src={arrow} width={60} height={75} alt="arrow" />
      </span>
    </h1>
  );
}
