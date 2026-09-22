import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import Navbar from "../util/components/Navbar";
import { staggerContainer } from "../util/variants";

export function Component() {
  return (
    <motion.div
      className="min-h-screen overflow-x-hidden overflow-y-auto transition-colors bg-gradient-to-b from-[#05060f] via-[#0a0d22] to-[#0e1230]"
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
    >
      <Navbar />
      <motion.div
        className="pt-[76px] text-white md:pt-0 md:ml-72"
        variants={staggerContainer}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <Outlet />
      </motion.div>
    </motion.div>
  )
}