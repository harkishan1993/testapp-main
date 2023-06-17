'use client'
import { motion } from "framer-motion";
const Path = ({ openPath, closedPath, ...rest }) => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="white"
      strokeLinecap="round"
      variants={{
        open: { d: openPath, transition: { duration: 0.3 } },
        closed: { d: closedPath, transition: { duration: 0.3 } },
      }}
      {...rest}
    ></motion.path>
  );
};

const Toggler = ({ toggle }) => {
  return (
    <button className="flex justify-center items-center" onClick={toggle}>
      <svg className="flex flex-col justify-center items-center" width="22" height="22" viewBox="0 0 22 22">
        <Path openPath="M 3 16.5 L 17 2.5" closedPath="M 2 2.5 L 20 2.5" />
        <Path closedPath="M 2 9.423 L 20 9.423" openPath="M -10 -10 L -10 -10" />
        <Path closedPath="M 2 16.346 L 20 16.346" openPath="M 3 2.5 L 17 16.346" />
      </svg>
    </button>
  );
};

export default Toggler;