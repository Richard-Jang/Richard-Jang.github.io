import { motion } from "framer-motion";

interface ConstellationPoint {
  x: number;
  y: number;
}

const points: ConstellationPoint[] = [
  { x: 118, y: 12 },
  { x: 182, y: 26 },
  { x: 98, y: 58 },
  { x: 142, y: 70 },
  { x: 38, y: 96 },
];

const edges: [number, number][] = [
  [0, 2],
  [2, 3],
  [3, 1],
  [2, 4],
];

export function Constellation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none">
      {edges.map(([a, b], idx) => (
        <line
          key={idx}
          x1={points[a].x}
          y1={points[a].y}
          x2={points[b].x}
          y2={points[b].y}
          stroke="white"
          strokeOpacity={0.25}
          strokeWidth={1}
        />
      ))}
      {points.map((point, idx) => (
        <motion.circle
          key={idx}
          cx={point.x}
          cy={point.y}
          r={2.5}
          fill="white"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2 + (idx % 3),
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: idx * 0.3,
          }}
        />
      ))}
    </svg>
  );
}
