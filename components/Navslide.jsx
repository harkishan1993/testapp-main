'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useAppSelector } from '@/redux/hooks'
function Navslide() {
    const useSelector = useAppSelector((state => state.navbarReducer.open));
    const [open, setOpen] = useState(useSelector);
    useEffect(()=>{
        setOpen(useSelector)
    },[useSelector])
    return (
        <motion.div initial={{right: -282 }} animate={{right: open?0:-282}} className='fixed w-[280px] min-h-full bg-black z-30 right-0 top-[80px]'></motion.div>
    )
}

export default Navslide