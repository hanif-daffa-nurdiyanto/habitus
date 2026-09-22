const Dot = ({ color = "#FFF", className }: { color?: string, className?: string }) => (
  <div
    className={`absolute size-10 rounded-full lg:size-18 ${className}`}
    style={{ backgroundColor: color }}
  />
)

export default Dot;
