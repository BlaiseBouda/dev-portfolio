type StackProps = {
  gap?: string;
  direction?: "row" | "column";
  center?: boolean;
  between?: boolean;
  children: React.ReactNode;
};

export default function Flex({
  gap = "1em",
  direction = "row",
  center = false,
  between = false,
  children,
}: StackProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: gap,
        flexDirection: direction,
        alignItems: center ? "center" : "",
        justifyContent: between ? "space-between" : "",
      }}
    >
      {children}
    </div>
  );
}
