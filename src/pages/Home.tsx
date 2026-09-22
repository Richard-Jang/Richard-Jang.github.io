import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../util/variants";
import { Button } from "../util/components/Button";
import { Constellation } from "../util/components/Constellation";
import { Starfield } from "../util/components/Starfield";
import { ShootingStar } from "../util/components/ShootingStar";
import { useShootingStarSchedule } from "../util/useShootingStarSchedule";

export function Component() {
  const navigate = useNavigate();
  const shootingStarRun = useShootingStarSchedule();

  return (
    <motion.div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#05060f] via-[#0a0d22] to-[#0e1230]">
      <Starfield
        count={90}
        seed={7}
        nebulas={[
          { color: "rgba(155,135,245,0.35)", size: 460, top: "-6%", right: "-8%" },
          { color: "rgba(92,200,255,0.28)", size: 380, bottom: "-8%", left: "-8%" },
        ]}
      />

      <Constellation className="pointer-events-none absolute top-10 right-10 md:right-24 w-56 h-40 z-0 opacity-80" />

      {shootingStarRun > 0 && <ShootingStar key={shootingStarRun} />}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 flex min-h-screen flex-col justify-end gap-5 px-6 sm:px-10 md:px-16 pt-24 pb-20 max-w-2xl"
      >
        <motion.p
          variants={fadeIn}
          className="text-sm font-semibold tracking-[0.2em] text-purple-400 uppercase"
        >
          Welcome to my corner of the universe
        </motion.p>
        <motion.h1
          variants={fadeIn}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] text-white"
        >
          Richard
          <br />
          Jang
        </motion.h1>
        <motion.p variants={fadeIn} className="max-w-md text-lg text-white/60">
          Software developer exploring AI and cybersecurity — building at the
          ĀYŌDĒ Institute and studying computer science at UT Dallas.
        </motion.p>
        <motion.div variants={fadeIn} className="flex gap-4 pt-2">
          <Button variant="primary" onClick={() => navigate("/contact")}>Get In Touch</Button>
          <Button variant="outline" onClick={() => navigate("/about")}>About Me</Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
