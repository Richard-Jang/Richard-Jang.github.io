export function mulberry32(seed: number) {
  return function random() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface Star {
  top: string;
  left: string;
  size: string;
  minOp: string;
  dur: string;
  delay: string;
}

// Seeded so a page's sky is stable across reloads but distinct per page (per-page seed).
export function makeStars(count: number, seed: number, bigThreshold = 0.9): Star[] {
  const rand = mulberry32(seed);
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    const big = rand() > bigThreshold;
    const size = big ? rand() * 1.4 + 1.6 : rand() * 1.1 + 0.6;
    stars.push({
      top: `${(rand() * 100).toFixed(2)}%`,
      left: `${(rand() * 100).toFixed(2)}%`,
      size: size.toFixed(2),
      minOp: (rand() * 0.2 + 0.12).toFixed(2),
      dur: (rand() * 3 + 2.6).toFixed(2),
      delay: (-(rand() * 6)).toFixed(2),
    });
  }
  return stars;
}
