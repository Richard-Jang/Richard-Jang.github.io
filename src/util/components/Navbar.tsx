import { useLocation, useNavigate } from 'react-router-dom'
import { FaBook, FaUser, FaHistory, FaPaperPlane } from 'react-icons/fa';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from '../variants';
import { ContactsComponent } from '../contact';

const navItems = [
  { to: '/', label: 'Home', icon: <FaBook /> },
  { to: '/about', label: 'About', icon: <FaUser /> },
  { to: '/experience', label: 'Experience', icon: <FaHistory /> },
  { to: '/contact', label: 'Contact', icon: <FaPaperPlane /> },
]

export default function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <motion.div
      className="fixed top-0 left-0 h-screen w-72 overflow-y-auto flex flex-col border-e border-gray-700 p-8 text-white z-[100] backdrop-blur"
    >
      <motion.button
        className="text-2xl font-bold p-8"
        initial={{ opacity: 0, x: 0, y: 0 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        viewport={{ once: true }}
        onClick={() => navigate('/')}
      >
        Richard Jang
      </motion.button>

      <motion.div
        className="flex flex-col gap-3 items-start border-y border-gray-700 py-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {navItems.map((value, index) => (
          <motion.button
            whileHover={{ scale: location.pathname == value.to ? 1 : 1.05 }}
            whileTap={{ scale: location.pathname == value.to ? 1 : 0.95 }}
            key={`Navbar ${index}`}
            className={`rounded-lg px-4 py-2 text-lg border w-full text-start ${location.pathname == value.to ? "border-white/30 text-white/30 cursor-not-allowed" : "border-white/60 text-white cursor-pointer"}`}
            disabled={location.pathname == value.to}
            onClick={() => navigate(value.to)}
            variants={fadeIn}
          >
            {value.label}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className="text-white py-8 flex flex-col gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={fadeIn}
          className='text-xl font-bold'
        >
          Connect with me!
        </motion.h2>
        <ContactsComponent />
      </motion.div>
    </motion.div>
  )
}
