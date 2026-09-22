import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { Starfield } from "../util/components/Starfield";
import { ShootingStar } from "../util/components/ShootingStar";
import { useShootingStarSchedule } from "../util/useShootingStarSchedule";
import { contacts } from "../util/contact";
import { fadeIn } from "../util/variants";

// Faster than the shared staggerContainer (0.15s/child) — a card with 10 fields
// should still feel like it's arrived instantly, not unspool for two seconds.
const cardStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const email = contacts.find((c) => c.text === "Email")!;
const linkedin = contacts.find((c) => c.text === "LinkedIn")!;
const github = contacts.find((c) => c.text === "GitHub")!;

const rowClass =
  "flex items-center gap-4 rounded-xl border border-white/15 px-5 py-4 text-white/90 hover:border-white/30 transition-colors";
const badgeClass =
  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/25";

export function Component() {
  const navigate = useNavigate();
  const shootingStarA = useShootingStarSchedule();
  const shootingStarB = useShootingStarSchedule();

  return (
    <motion.div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#05060f] via-[#0a0d22] to-[#0e1230] px-4 py-16">
      <Starfield
        count={90}
        seed={41}
        bigThreshold={0.86}
        nebulas={[
          { color: "rgba(155,135,245,0.4)", size: 560, top: "-10%", left: "-10%" },
          { color: "rgba(92,200,255,0.32)", size: 480, bottom: "-10%", right: "-10%" },
        ]}
      />
      {shootingStarA > 0 && <ShootingStar key={`a-${shootingStarA}`} />}
      <div className="hidden md:contents">
        {shootingStarB > 0 && <ShootingStar key={`b-${shootingStarB}`} />}
      </div>

      <motion.div
        variants={cardStagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[620px] rounded-[26px] border border-white/12 bg-[rgba(12,14,30,0.55)] p-8 text-center shadow-[0_40px_100px_rgba(0,0,0,0.55)] backdrop-blur-[18px] md:p-14"
      >
        <motion.img
          variants={fadeIn}
          src="/avatar.png"
          alt="Richard Jang"
          className="mx-auto h-[104px] w-[104px] rounded-full border-2 object-cover shadow-[0_0_24px_rgba(155,135,245,0.5)] md:h-32 md:w-32"
          style={{ borderColor: "var(--accent)" }}
        />
        <motion.h1 variants={fadeIn} className="font-display mt-6 text-3xl font-bold text-white">
          Richard Jang
        </motion.h1>
        <motion.p variants={fadeIn} className="mt-2 text-white/70">
          Software Developer · AI & Cybersecurity
        </motion.p>
        <motion.p variants={fadeIn} className="mt-1 text-sm text-white/50">
          B.S. Computer Science, UT Dallas
        </motion.p>

        <motion.div variants={fadeIn} className="my-8 h-px w-full bg-white/10" />

        <div className="flex flex-col gap-3 text-left">
          <motion.a variants={fadeIn} href={email.href} className={rowClass}>
            <span className={badgeClass}>{email.icon}</span>
            <span className="hidden sm:inline">jang.richard7017@gmail.com</span>
            <span className="sm:hidden">Email</span>
          </motion.a>
          <motion.a variants={fadeIn} href={linkedin.href} target="_blank" rel="noreferrer" className={rowClass}>
            <span className={badgeClass}>{linkedin.icon}</span>
            LinkedIn
          </motion.a>
          <motion.a variants={fadeIn} href={github.href} target="_blank" rel="noreferrer" className={rowClass}>
            <span className={badgeClass}>{github.icon}</span>
            GitHub
          </motion.a>
        </div>

        <motion.button
          variants={fadeIn}
          onClick={() => navigate("/")}
          className="mt-8 text-sm text-white/50 transition-colors hover:text-white cursor-pointer"
        >
          ← Back to the site
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
