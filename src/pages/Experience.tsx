import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../util/variants";

export function Component() {

  const projects: { name: string, src: string, description?: string, href?: string }[] = [
    {
      name: "ĀYŌDÈ Institute",
      src: "https://www.ayode.org/images/ayode-logo-horizontal.png",
      description: "",
      href: "https://www.ayode.org/",
    },
    {
      name: "CyberPatriot",
      src: "https://www.uscyberpatriot.org/Style%20Library/CyberPatriot/img/AFA-CyberPatriot-White.png",
      href: "https://www.uscyberpatriot.org/"
    },
    {
      name: "Allen Cyber Invitational",
      src: "/AHSCyberInvitational.png"
    },
    { 
      name: "AHS Model Scheduler",
      src: "/ModelScheduler.png"
    },
  ];

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
        Projects
      </motion.h2>
      <motion.div
        className="grid grid-cols-3 gap-5"
        variants={staggerContainer}
      >
        {projects.map((value, index) => {
          return <motion.a
            key={`Project ${index}`}
            variants={fadeIn}
            whileTap={{ scale: value.href ? 0.95 : 1 }}
            whileHover={{ scale: value.href ? 1.05 : 1 }}
            className="flex flex-col gap-3 p-8 rounded-lg border border-gray-700 bg-gray-900"
            target="_blank"
            href={value.href}
          >
            <div className="h-50 grid place-content-center mb-5">
              <img
                src={value.src}
                alt={`${value.name}`}
                className="rounded-xl w-full"
              />
            </div>
            <h3 className="text-xl font-bold">{value.name}</h3>
            {value.description ? <span>{value.description}</span> : <></>}
          </motion.a>
        })}
      </motion.div>
    </motion.div>
  )
}