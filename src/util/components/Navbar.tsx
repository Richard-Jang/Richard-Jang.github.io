import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from '../variants';
import { ContactsComponent } from '../contact';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (to: string) => {
    setMenuOpen(false);
    navigate(to);
  };

  return (
    <>
      <motion.div className="fixed top-0 left-0 hidden h-screen w-72 flex-col overflow-y-auto border-e border-white/10 bg-black/40 backdrop-blur px-6 py-8 text-white z-[100] md:flex">
        <motion.button
          className="text-lg font-bold text-left mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          viewport={{ once: true }}
          onClick={() => go('/')}
        >
          Richard Jang
        </motion.button>

        <motion.div
          className="flex flex-col gap-2 border-t border-white/10 pt-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <motion.button
                whileHover={{ scale: active ? 1 : 1.02 }}
                whileTap={{ scale: active ? 1 : 0.98 }}
                key={item.to}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium w-full text-start transition-colors ${active ? "bg-purple-600 text-white cursor-not-allowed" : "border border-white/15 text-white/70 hover:text-white hover:border-white/30 cursor-pointer"}`}
                disabled={active}
                aria-current={active ? "page" : undefined}
                onClick={() => go(item.to)}
                variants={fadeIn}
              >
                {item.label}
              </motion.button>
            )
          })}
        </motion.div>

        <div className="mt-auto pt-8 border-t border-white/10">
          <motion.div
            variants={staggerContainer}
            className="text-white flex flex-col gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeIn} className='text-xs font-semibold uppercase tracking-widest text-white/40'>
              Connect with me
            </motion.h2>
            <ContactsComponent showIcon={false} />
          </motion.div>
        </div>
      </motion.div>

      <div className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between border-b border-white/10 bg-black/60 px-5 py-[22px] text-white backdrop-blur md:hidden">
        <button className="text-lg font-bold" onClick={() => go('/')}>Richard Jang</button>
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20"
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path d="M0 1h18M0 7h18M0 13h18" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex flex-col gap-10 bg-[rgba(4,5,14,0.97)] px-6 py-7 text-white md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">Richard Jang</span>
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const active = location.pathname === item.to;
                return (
                  <button
                    key={item.to}
                    disabled={active}
                    aria-current={active ? "page" : undefined}
                    onClick={() => go(item.to)}
                    className={`w-full rounded-lg px-4 py-3.5 text-start text-[17px] font-medium transition-colors ${active ? "bg-purple-600 text-white cursor-not-allowed" : "border border-white/15 text-white/80"}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
            <div className="mt-auto flex flex-col gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40">Connect with me</h2>
              <ContactsComponent showIcon={false} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
