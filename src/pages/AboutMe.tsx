import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../util/variants";
import { Typewriter } from "../util/components/Typewriter";

export function Component() {
  return (
    <motion.div
      className="p-8 gap-5"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
    >
      <motion.h2
        className="font-bold text-3xl"
        variants={fadeIn}
      >
        About Me
      </motion.h2>

      <div className="h-[30vh] grid place-content-center text-5xl italic font-serif">
        <Typewriter texts={['"I came. I saw. I record..."']} />
      </div>

      <motion.div
        variants={staggerContainer}
        className="flex gap-5 mt-8 items-center"
      >
        <motion.span
          variants={fadeIn}
          className="w-2/3 text-lg flex flex-col gap-5"
        >
          <span>Hello! I'm Richard Jang, an enthusiast for software development, artificial intelligence, and cybersecurity. I'm currently working as a software developer at the <a href="https://www.ayode.org/" className="text-purple-500 hover:text-purple-600 transition-colors">ĀYŌDÈ Institute.</a> I'm also a student at <a href="https://www.utdallas.edu/" className="text-orange-500 hover:text-orange-600 transition-colors">The University of Texas at Dallas</a> majoring in computer science.</span>
          <span>My passions include music, reading, working out, and creating with electronics. I've spent 6 years performing choral music, and I'm currently picking up the piano. My favorite books are Lord of the Mysteries written by Cuttlefish That Loves Diving and Omniscient Reader's Viewpoint written by Sing Shong. These are two books that are absolutely worth the read.</span>
        </motion.span>
        <motion.img
          variants={fadeIn}
          className="rounded-lg w-1/3"
          src="/profile.png"
        />
      </motion.div>
    </motion.div>
  )
}