'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useAppSelector } from '@/redux/hooks'
import {items} from '@/data/sidebar'
import SidebarItem from './SidebarItem'
function Navslide() {
    const useSelector = useAppSelector((state => state.navbarReducer.open));
    const [open, setOpen] = useState(useSelector);
    useEffect(()=>{
        setOpen(useSelector)
    },[useSelector])
    return (
        <motion.div initial={{right: -282 }} animate={{right: open?0:-282}} className='fixed w-[280px] h-full flex flex-col gap-2 overflow-auto bg-black z-30 p-6 right-0 top-[80px]'>
            { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </motion.div>
    )
}

export default Navslide