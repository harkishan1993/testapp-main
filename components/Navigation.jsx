"use client";
import { motion } from "framer-motion";
import NavItems from "./NavItems";
import { usePathname } from "next/navigation";
import Cartlogo from "./Cartlogo";
const navigationVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
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
const Navigation = () => {
  const pathname = usePathname();
  const linkTag = [
    {
      href: "/",
      name: "home",
    },
    {
      href: "/products",
      name: "products",
    },
    {
      href: "/services",
      name: "services",
    },
    {
      href: "/industries",
      name: "industries",
    },
    {
      href: "/application",
      name: "application",
    },
    {
      href: "/contact-us",
      name: "contact us",
    },
    {
      href: "/login",
      name: "login",
    },
  ];
  return (
    <>
    <motion.ul variants={navigationVariants}>
    <motion.li variants={menuItemVariants}>
      <Cartlogo color="text-white"/>
    </motion.li>
      {linkTag.map((link, i) => (
        <NavItems
          href={link.href}
          name={link.name}
          active={pathname == link.href}
          key={i}
        />
      ))}
    </motion.ul>
    </>
  );
};

export default Navigation;
