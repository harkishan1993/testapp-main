'use client'
import MyLink from "./Mylink"
import { useState } from "react";
import { FaDownload } from "react-icons/fa"
import { AiFillCloseSquare } from 'react-icons/ai'
import { motion, AnimatePresence } from "framer-motion";
function Download() {
    const [selectedId, setSelectedId] = useState(null)
    const handle = () => {
        if (!selectedId) {
            setSelectedId(1)
            setTimeout(() => {
                window.scroll({
                    top: document.body.offsetHeight + 200,
                    left: 0,
                    bottom: 0,
                    behavior: 'smooth',
                });
            },50)
        } else {
            setSelectedId(null)
        }
    }
    return (
        <div className="flex flex-col gap-8">
            <motion.div className="cursor-pointer" layoutId={1} onClick={handle} >
                <div className="border-[2px] flex flex-col gap-1 justify-center  items-center hover:bg-sky-800 border-white w-[200px] h-[80px] bg- rounded-full">
                    <span><FaDownload /></span>
                    <span className="text-base font-medium">Download</span>
                </div>
            </motion.div>
            <AnimatePresence>
                {selectedId && (<motion.div className="flex flex-col gap-2" layoutId={selectedId}>
                    <motion.span onClick={handle} className="text-2xl w-[4px] cursor-pointer"><AiFillCloseSquare /></motion.span>
                    <p className="text-sm capitalize">Send download link to:</p>
                    <input type="email" placeholder="Email" className="outline-none text-black px-4 py-2 rounded-[10px]" />
                    <div className="flex justify-center items-center">
                        <MyLink href='/' className="text-sm capitalize bg-sky-800 px-6 py-2 rounded-[10px]">send link</MyLink>
                    </div>
                </motion.div>)}
            </AnimatePresence>
        </div>
    )
}

export default Download