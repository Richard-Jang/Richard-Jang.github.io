import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../util/variants";
import { Starfield } from "../util/components/Starfield";
import { ExperienceCard } from "../util/components/ExperienceCard";

export function Component() {
  return (
    <motion.div className="relative w-full overflow-hidden bg-gradient-to-b from-[#05060f] via-[#0a0d22] to-[#0e1230]">
      <Starfield
        count={60}
        seed={71}
        nebulas={[
          { color: "rgba(155,135,245,0.35)", size: 460, top: "-8%", left: "-10%" },
          { color: "rgba(92,200,255,0.28)", size: 380, bottom: "-8%", right: "-10%" },
        ]}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 flex flex-col gap-10 px-6 py-16 md:px-16 md:py-16"
      >
        <div className="flex flex-col gap-2">
          <motion.h1 variants={fadeIn} className="font-display text-3xl font-bold text-white md:text-4xl">
            Experience
          </motion.h1>
          <motion.p variants={fadeIn} className="text-[#9294ac]">
            Where I've built, competed, and learned.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <ExperienceCard
            category="Research"
            categoryColor="violet"
            title="UTD EV and Cybersecurity Research"
            description="Modeling real-time cyberattacks through Opal-RT while researching AI/ML theory."
            imageFit="contain"
          />
          <ExperienceCard
            category="Work"
            categoryColor="violet"
            title="ĀYŌDÈ Institute"
            description="Software developer, building and maintaining tools for the Institute's technical projects."
            image="https://www.ayode.org/images/ayode-logo-horizontal.png"
            imageFit="contain"
          />
          <ExperienceCard
            category="Competition"
            categoryColor="orange"
            title="CyberPatriot"
            description="Cyberpatriot Competition — hands-on network and real-time systems defense/hardening."
            imageFit="contain"
          />
          <ExperienceCard
            category="Personal Project"
            categoryColor="blue"
            title="Allen Cyber Invitational"
            description="Developed and hosted the Allen Cyber Invitational, an in-person event for students to learn cybersecurity."
            imageFit="cover"
          />
          <ExperienceCard
            category="Personal Project"
            categoryColor="blue"
            title="AHS Model Scheduler"
            description="A class scheduler application processing over 100 courses."
            image="/ModelScheduler.png"
            imageFit="cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
