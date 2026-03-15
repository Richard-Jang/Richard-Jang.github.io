import { useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import { fadeIn, staggerContainer } from "../util/variants";
import { Typewriter } from "../util/components/Typewriter";

const SPECK_COUNT = 80;

function generateSpecks() {
  return Array.from({ length: SPECK_COUNT }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 2}px`,
    opacity: (Math.random() * 0.45 + 0.07).toFixed(2),
    blur: `${Math.random() * 1.3}px`,
  }));
}

const staggerStars: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

export function Component() {
  const specks = useMemo(() => generateSpecks(), []);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full h-screen overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 bg-black"
        variants={staggerStars}
        animate="visible"
        initial="hidden"
      >
        {specks.map((speck, idx) => (
          <motion.span
            key={idx}
            className="absolute block rounded-full bg-slate-300 dark:bg-slate-100 w-2 aspect-square"
            style={{
              left: speck.left,
              top: speck.top,
              width: speck.size,
              height: speck.size,
              opacity: speck.opacity,
              filter: `blur(${speck.blur})`,
            }}
            variants={fadeIn}
          ></motion.span>
        ))}
      </motion.div>

      <div className="grid h-full place-content-center px-8 z-100 bg-white">
        <Typewriter
          delay={0.5}
          className="text-5xl font-bold text-white drop-shadow-lg z-100"
          texts={["Hello, World!", "My name is Richard Jang!"]}
        />
      </div>
    </motion.div>
  );
}