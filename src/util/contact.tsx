import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeIn, staggerContainer } from "./variants";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

export interface ContactProps {
    icon: ReactNode;
    text: string;
    href: string;
    color?: string;
}

export const contacts: ContactProps[] = [
    { icon: <FaLinkedin />, text: "LinkedIn", href: "www.linkedin.com/in/richard-m-jang", color: "#0077b5" },
    { icon: <FaEnvelope />, text: "Email", href: "mailto:jang.richard7017@gmail.com", color: "#c5221f" },
    { icon: <FaGithub />, text: "GitHub", href: "https://github.com/Richard-Jang" },
];

export function ContactsComponent({ className }: { className?: string }) {
    return (
        <motion.div
            variants={staggerContainer}
            className={`${className || ""} w-full flex flex-col gap-2`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {contacts.map((value, index) => {
                return <motion.a
                    key={`Contact ${index}`}
                    target="_blank"
                    href={value.href}
                    className="w-full rounded-lg flex items-center justify-start gap-2 text-white/60"
                    variants={fadeIn}
                    whileHover={{
                        x: 20,
                        color: value.color ? value.color : "#ffffff",
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    {value.icon}
                    <span>{value.text}</span>
                </motion.a>
            })}
        </motion.div>
    )
}