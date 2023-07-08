import { useState } from "react"
import { MdArrowDropUp } from 'react-icons/md'
import { FaAngleDoubleRight } from 'react-icons/fa'
import MyLink from "./Mylink"
export default function SidebarItem({ item }) {
    const [open, setOpen] = useState(false)
    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <MyLink href={item.path || "#"} className="navlink">
                        {item.title}
                    </MyLink>
                    <span><MdArrowDropUp className='text-[40px] toggle-btn text-white' onClick={() => setOpen(!open)} /></span>
                </div>
                <div className="sidebar-content navlink flex flex-col gap-2 px-1">
                    {item.childrens.map((child, index) => <SidebarItem key={index} item={child} />)}
                </div>
            </div>
        )
    } else {
        return (
            <MyLink href={item.path || "#"} className="navlink flex items-start gap-2 py-1">
               <FaAngleDoubleRight className="pt-[2px] text-lg" /> {item.title}
            </MyLink>
        )
    }
}