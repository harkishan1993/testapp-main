<<<<<<< HEAD
'use client'
import { motion } from 'framer-motion';
import { useAppSelector } from '@/redux/hooks';
import React from 'react'
import Toggler from './Toggle'
function Nav() {
    const useSelector = useAppSelector((state => state.navbarReducer.open));
    return (
        <>
            <motion.div className='flex justify-center items-center w-[50px] h-[50px] pt-[2px] pl-[1px] rounded-full bg-black' initial={false} animate={useSelector ? "open" : "closed"}>
                <Toggler />
            </motion.div>
        </>
    )
}

=======
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

>>>>>>> dbb843ae840d98166e0e1ba2c54c26324fa8ae98
export default Nav