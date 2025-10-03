type StackProps = {
  gap?: string;
  direction?: "row" | "column";
  center?: boolean;
  children: React.ReactNode;
};

export default function Flex({
  gap = "1em",
  direction = "row",
  center = false,
  children,
}: StackProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: gap,
        flexDirection: direction,
        alignItems: center ? "center" : "",
      }}
    >
      {children}
    </div>
  );
}
