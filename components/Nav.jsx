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
export default Nav