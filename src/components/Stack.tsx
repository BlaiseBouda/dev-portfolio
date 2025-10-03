type StackProps = {
  gap?: string;
  direction?: "row" | "column";
  children: React.ReactNode;
};

export default function Stack({
  gap = "1em",
  direction = "column",
  children,
}: StackProps) {
  return (
    <div style={{ display: "flex", gap: gap, flexDirection: direction }}>
      {children}
    </div>
  );
}
