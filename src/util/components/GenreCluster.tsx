import { motion } from "framer-motion";
import { Panel } from "./Panel";

export interface ClusterNode {
  title: string;
  author: string;
  x: number;
  y: number;
  color: string;
  delay?: number;
}

export interface ClusterDot {
  x: number;
  y: number;
}

export interface GenreClusterProps {
  genre: string;
  viewBox: string;
  edges: [number, number][];
  nodes: ClusterNode[];
  decorations?: ClusterDot[];
  className?: string;
}

// Each genre gets hand-placed coordinates rather than an auto-layout — clusters
// are meant to look visually distinct from one another, not like copies.
//
// Lines live in an SVG that's free to stretch to the panel's aspect ratio, but
// node/decoration dots are plain HTML circles positioned by percentage — an SVG
// <circle> stretched by a non-uniform viewBox scale renders as an ellipse.
export function GenreCluster({ genre, viewBox, edges, nodes, decorations = [], className = "" }: GenreClusterProps) {
  const [, , vbW, vbH] = viewBox.split(" ").map(Number);
  const pct = (x: number, y: number) => ({ left: `${(x / vbW) * 100}%`, top: `${(y / vbH) * 100}%` });

  return (
    <Panel className={`relative h-[230px] overflow-hidden p-5 ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-widest text-white/40">{genre}</span>
      <div className="absolute inset-x-7 top-12 bottom-6 mb-5">
        <svg viewBox={viewBox} className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          {edges.map(([a, b], i) => (
            <line key={`e-${i}`} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke="white" strokeOpacity={0.3} />
          ))}
        </svg>
        {decorations.map((d, i) => (
          <span
            key={`d-${i}`}
            className="absolute h-[3px] w-[3px] rounded-full bg-white/35"
            style={{ ...pct(d.x, d.y), transform: "translate(-50%, -50%)" }}
          />
        ))}
        {nodes.map((node, i) => (
          <motion.span
            key={`n-${i}`}
            className="absolute rounded-full"
            style={{
              ...pct(node.x, node.y),
              width: 10,
              height: 10,
              background: node.color,
              boxShadow: `0 0 6px ${node.color}`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.15, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: node.delay ?? 0 }}
          />
        ))}
        {nodes.map((node, i) => (
          <div
            key={`l-${i}`}
            className="absolute max-w-[45%] text-center"
            style={{ ...pct(node.x, node.y), transform: "translate(-50%, 10px)" }}
          >
            <p className="font-quote text-sm text-white/90">{node.title}</p>
            <p className="text-xs text-white/50">{node.author}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}
