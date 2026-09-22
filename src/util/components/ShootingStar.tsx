import { useMemo } from "react";
import { motion } from "framer-motion";

function generateStreakConfig() {
  const startX = Math.random() * 55 + 5;
  const startY = Math.random() * 30 + 5;
  const angle = Math.random() * 20 + 25;
  const distance = Math.random() * 90 + 130;
  const duration = Math.random() + 4;
  const length = Math.random() * 40 + 70;

  const rad = (angle * Math.PI) / 180;
  return {
    startX,
    startY,
    angle,
    length,
    duration,
    dx: Math.cos(rad) * distance,
    dy: Math.sin(rad) * distance,
  };
}

export function ShootingStar() {
  const config = useMemo(() => generateStreakConfig(), []);

  return (
    <motion.span
      className="absolute z-0 rounded-full bg-gradient-to-r from-transparent to-white"
      style={{
        left: `${config.startX}%`,
        top: `${config.startY}%`,
        width: config.length,
        height: 2,
        rotate: config.angle,
        transformOrigin: "left center",
      }}
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{ opacity: [0, 1, 1, 0], x: config.dx, y: config.dy }}
      transition={{ duration: config.duration, times: [0, 0.1, 0.7, 1], ease: "easeOut" }}
    />
  );
}
