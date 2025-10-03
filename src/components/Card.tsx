type CardProps = {
  padding?: string;
  radius?: string;
  hover?: boolean;
  children: React.ReactNode;
};

export default function Card({
  padding = "1em",
  radius,
  hover,
  children,
}: CardProps) {
  return (
    <div
      className={hover ? "card has-hover" : "card"}
      style={{ padding: padding, borderRadius: radius }}
    >
      {children}
    </div>
  );
}
