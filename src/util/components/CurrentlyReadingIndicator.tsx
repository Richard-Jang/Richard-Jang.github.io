import { motion } from "framer-motion";

export function CurrentlyReadingIndicator({ size = 64 }: { size?: number }) {
  const coreSize = size * 0.3;

  return (
    <div className="relative flex shrink-0 items-center justify-center" style={{ width: size, height: size }}>
      <motion.span
        className="absolute rounded-full border border-white/50"
        style={{ width: size, height: size }}
        initial={{ scale: coreSize / size, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 0 }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.span
        className="rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,0.9)]"
        style={{ width: coreSize, height: coreSize }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
