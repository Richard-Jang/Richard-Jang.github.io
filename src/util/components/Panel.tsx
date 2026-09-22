import { motion, type HTMLMotionProps } from "framer-motion";

export function Panel({ className = "", ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={`rounded-[20px] border border-white/12 bg-[rgba(14,16,34,0.55)] ${className}`}
      {...props}
    />
  );
}
