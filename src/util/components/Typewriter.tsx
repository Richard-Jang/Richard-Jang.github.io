import { motion, useMotionValue, useTransform, animate, type Variants } from "framer-motion";
import { useEffect } from "react";

const cursorVariants: Variants = {
  blinking: {
    opacity: [0, 0, 1, 1],  
    transition: {
      duration: 1,  
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }  
  }  
};  

export function CursorBlinker() {
  return (
    <motion.div  
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-5 w-4 h-[2px] translate-y-1 bg-slate-900 ms-0.5"
    />  
  );  
}

export interface TypewriterProps {
    texts: string[];
    delay?: number;
    className?: string;
}

export function Typewriter({ delay, texts, className }: TypewriterProps) {
  const textIndex = useMotionValue(0);

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      delay: delay ? delay : 0,
      duration: 2,
      ease: "easeIn",
      repeat: texts.length == 1 ? 0 : texts.length,
      repeatType: "reverse",
      repeatDelay: 0.5,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span className={className}>
        <motion.span className="inline">{displayText}</motion.span>
        <CursorBlinker />
    </span>
}
