'use client'
import { motion } from "framer-motion"
function Container({ children }) {
  return (
      <motion.section initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}  className="max-w-[1440px] overflow-hidden mx-auto shadow-md px-4 md:px-20 py-8">{children}</motion.section>
  )
}

export default Container