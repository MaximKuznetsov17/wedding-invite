export function Divider({ tone = "light" }: { tone?: "light" | "dark" }) {
  const lineColor = tone === "light" ? "#DCCFB6" : "#B79F72";
  return (
    <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
      <span
        className="h-px w-16 sm:w-24"
        style={{ backgroundColor: lineColor }}
      />
      <span className="diamond" />
      <span
        className="h-px w-16 sm:w-24"
        style={{ backgroundColor: lineColor }}
      />
    </div>
  );
}
