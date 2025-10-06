type CardProps = {
  padding?: string;
  radius?: string;
  hasHover?: boolean;
  children: React.ReactNode;
};

export default function Card({
  padding = "1em",
  radius,
  hasHover,
  children,
}: CardProps) {
  return (
    <div
      className={hasHover ? "card has-hover" : "card"}
      style={{ padding: padding, borderRadius: radius }}
    >
      {children}
    </div>
  );
}
