'use client'
import { useCycle, motion } from 'framer-motion';
import React from 'react'
import Toggler from './Toggle'
function Nav() {
    const [isOpen, toggleOpen] = useCycle(false, true);
    return (
        <>
            <motion.div className='flex justify-center items-center w-[50px] h-[50px] pt-[2px] pl-[1px] rounded-full bg-black' initial={false} animate={isOpen ? "open" : "closed"}>
                <Toggler toggle={() => toggleOpen()} />
            </motion.div>
        </>
    )
}

export default Nav