export function Gear({ teeth = 14, className = '' }) {
  return (
    <svg viewBox="-50 -50 100 100" className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="1.6">
        {Array.from({ length: teeth }).map((_, i) => (
          <rect
            key={i}
            x="-3" y="-46" width="6" height="6"
            fill="currentColor" stroke="none"
            transform={`rotate(${(i / teeth) * 360})`}
          />
        ))}
        <circle r="40" />
        <circle r="32" />
        <circle r="10" />
        {Array.from({ length: 4 }).map((_, i) => (
          <line key={i} x1="0" y1="-30" x2="0" y2="-12"
            transform={`rotate(${i * 90 + 45})`}
          />
        ))}
      </g>
    </svg>
  );
}
