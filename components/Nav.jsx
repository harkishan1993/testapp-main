'use client'
import MenuToggler from "../components/MenuToggler";
import Navigation from "../components/Navigation";
import { motion, useCycle } from "framer-motion";

const sidebarVariants = {
  open: {
    clipPath: `circle(2000px at 0px 0px)`,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    clipPath: `circle(30px at 245px 40px)`,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

export default function Home() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.div className="background" variants={sidebarVariants}></motion.div>
      <MenuToggler toggle={() => toggleOpen()} />
      <Navigation />
    </motion.nav>
  );
}