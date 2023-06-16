'use client'
import { motion } from "framer-motion";
import Mylink from "./Mylink";
const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const MenuItem = ({name, href, active}) => {
  return (
    <motion.li variants={menuItemVariants}>
      <Mylink href={href} className={`${active?'active':''} navlink`}>{name}</Mylink>
    </motion.li>
  );
};

export default MenuItem;