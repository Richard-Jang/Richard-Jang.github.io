import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../util/variants";
import { contacts } from "../util/contact";

export function Component() {

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col gap-8 p-8"
    >
      {/* Projects */}
      <motion.h2
        className="text-3xl text-white font-bold tracking-wider"
        variants={fadeIn}
      >
        Connect With Me!
      </motion.h2>
      <motion.div
        className="grid grid-cols-3 gap-5"
        variants={staggerContainer}
      >
        {contacts.map((value, index) => {
          return <motion.a
            key={`Project ${index}`}
            variants={fadeIn}
            whileTap={{ scale: value.href ? 0.95 : 1 }}
            whileHover={{ scale: value.href ? 1.05 : 1 }}
            className="flex items-center gap-3 p-8 rounded-lg border border-gray-700 bg-gray-900"
            target="_blank"
            href={value.href}
          >
            <div className="text-4xl">
              {value.icon}
            </div>
            <h3 className="text-xl font-bold">{value.text}</h3>
          </motion.a>
        })}
      </motion.div>
    </motion.div>
  )
}