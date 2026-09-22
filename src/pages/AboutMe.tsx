import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../util/variants";
import { Starfield } from "../util/components/Starfield";
import { Panel } from "../util/components/Panel";
import { Tag } from "../util/components/Tag";
import { GenreCluster } from "../util/components/GenreCluster";
import { CurrentlyReadingIndicator } from "../util/components/CurrentlyReadingIndicator";
import { FormField, FormTextarea } from "../util/components/FormField";
import { Button } from "../util/components/Button";
import { Link } from "react-router-dom";

const interests = [
  "Software Development",
  "Artificial Intelligence",
  "Cybersecurity",
  "Music",
  "Piano",
  "Electronics",
];

export function Component() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const subject = "Book recommendation" + (name ? ` from ${name}` : "");
  const mailtoHref = `mailto:jang.richard7017@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  return (
    <motion.div className="relative w-full overflow-hidden bg-gradient-to-b from-[#05060f] via-[#0a0d22] to-[#0e1230]">
      <Starfield
        count={60}
        seed={23}
        nebulas={[
          { color: "rgba(155,135,245,0.35)", size: 460, top: "-8%", right: "-10%" },
          { color: "rgba(92,200,255,0.28)", size: 380, bottom: "10%", left: "-10%" },
        ]}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 flex flex-col gap-16 px-6 py-16 md:px-16 md:py-16"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <motion.h1 variants={fadeIn} className="font-display text-3xl font-bold text-white md:text-4xl">
            About Me
          </motion.h1>
          <motion.p variants={fadeIn} className="font-quote text-xl text-[#d8d6ec] md:text-[26px]">
            "I came. I saw. I record..."
          </motion.p>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div variants={fadeIn} className="order-2 flex flex-col gap-5 md:order-1">
            <p className="text-sm font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--accent)" }}>
              Currently — Software Developer at ĀYŌDĒ Institute, B.S. Computer Science @ UT Dallas
            </p>
            <p className="text-[15px] leading-relaxed text-[#d6d6e6]">
              Hello! I'm Richard Jang, an enthusiast for software development, artificial intelligence, and
              cybersecurity. I'm currently working as a software developer at the{" "}
              <a href="https://www.ayode.org/" className="text-purple-400 hover:text-purple-300 transition-colors">
                ĀYŌDÈ Institute
              </a>
              . I'm also a student at{" "}
              <a href="https://www.utdallas.edu/" className="text-orange-400 hover:text-orange-300 transition-colors">
                The University of Texas at Dallas
              </a>{" "}
              majoring in computer science.
            </p>
            <p className="text-[15px] leading-relaxed text-[#d6d6e6]">
              My passions include music, reading, working out, and tinkering with electronics. Feel free to reach out whenever!
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {interests.map((interest) => (
                <Tag key={interest}>{interest}</Tag>
              ))}
            </div>
          </motion.div>
          <motion.img
            variants={fadeIn}
            src="/profile.png"
            alt="Richard Jang"
            className="order-1 h-[260px] w-full rounded-[14px] object-cover md:order-2 md:h-[404px]"
          />
        </div>

        <div className="flex flex-col gap-8">
          <motion.div variants={fadeIn} className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/40">My Library</span>
            <h2 className="font-display text-2xl font-bold text-white">Favorite reads</h2>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Panel className="flex items-center gap-4 p-6">
              <CurrentlyReadingIndicator size={48} />
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-white/40">Currently Reading</span>
                <p className="font-quote text-lg text-white/90">Designing Data-Intensive Applications</p>
                <p className="text-sm text-white/50">Martin Kleppman</p>
              </div>
            </Panel>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2">
            <motion.div variants={fadeIn} className="col-span-2">
              <GenreCluster
                genre="Fantasy"
                viewBox="0 0 498 230"
                nodes={[
                  { title: "Lord of the Mysteries", author: "Cuttlefish That Loves Diving", x: 78, y: 180, color: "#9b87f5" },
                  { title: "Omniscient Reader's Viewpoint", author: "Sing Shong", x: 247, y: 30, color: "#d9c652", delay: 1.1 },
                  { title: "Circle of Inevitability", author: "Sing Shong", x: 400, y: 100, color: "#e2793f", delay: 2 },
                ]}
                edges={[[0, 1], [1, 2]]}
                decorations={[{ x: 90, y: 60 }, { x: 440, y: 140 }]}
                className=""
              />
            </motion.div>
          </div>

          <motion.div variants={fadeIn}>
            <Panel className="flex flex-col gap-5 p-6 md:p-8">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-white/40">Got a recommendation?</span>
                <h3 className="font-display text-xl font-bold text-white">Suggest a book</h3>
                <p className="text-sm text-white/50">Send it straight to my inbox.</p>
              </div>
              <FormField label="Name (optional)" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
              <FormTextarea
                label="Recommendation"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What should I read next?"
                rows={4}
              />
              <Link to={mailtoHref} target="_blank" className="w-fit md:self-end">
                <Button
                  variant="primary"
                  className="w-full md:w-auto cursor-pointer"
                >
                  Send Recommendation
                </Button>
              </Link>
            </Panel>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
