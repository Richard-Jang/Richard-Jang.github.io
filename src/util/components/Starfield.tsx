import { useMemo, type CSSProperties } from "react";
import { makeStars } from "../starfield";

export interface NebulaConfig {
  color: string;
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
}

export interface StarfieldProps {
  count: number;
  seed: number;
  bigThreshold?: number;
  nebulas?: NebulaConfig[];
  className?: string;
}

export function Starfield({ count, seed, bigThreshold = 0.9, nebulas = [], className }: StarfieldProps) {
  const stars = useMemo(() => makeStars(count, seed, bigThreshold), [count, seed, bigThreshold]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className || ""}`}>
      {nebulas.map((nebula, idx) => (
        <div
          key={idx}
          className="nebula"
          style={{
            width: nebula.size,
            height: nebula.size,
            top: nebula.top,
            left: nebula.left,
            right: nebula.right,
            bottom: nebula.bottom,
            opacity: nebula.opacity ?? 0.6,
            background: `radial-gradient(circle, ${nebula.color}, transparent 70%)`,
          }}
        />
      ))}
      {stars.map((star, idx) => (
        <span
          key={idx}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            "--dur": `${star.dur}s`,
            "--delay": `${star.delay}s`,
            "--min-op": star.minOp,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
