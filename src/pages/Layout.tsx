import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import Navbar from "../util/components/Navbar";
import { staggerContainer } from "../util/variants";

export function Component() {
  return (
    <motion.div
      className="min-h-screen overflow-x-hidden overflow-y-auto transition-colors bg-black"
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
    >
      <Navbar />
      <motion.div
        className="ml-80 text-white"
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