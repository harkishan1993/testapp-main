"use client"
import { getroute } from "@/redux/reducers/navbarReducer"
import {FaChevronRight} from "react-icons/fa"
import React, { useEffect, useState } from "react"
import { useAppDispatch } from "@/redux/hooks"
import { usePathname } from "next/navigation"
import MyLink from "./Mylink"
function Getroute() {
    const getpath = usePathname();
    const dispatch = useAppDispatch();
    const routeArray = getpath.replace('/', '').split('/')
    const [route, setRoute] = useState([])
    useEffect(() => {
        dispatch(getroute(getpath))
        setRoute(routeArray)
    }, [getpath])

    return (
        <>
            {route.map((path, index) => {
                return (
                    <React.Fragment key={index}>
                        <span className="capitalize text-base text-gray-400"><FaChevronRight /></span>
                        <span className="capitalize text-base text-gray-400">
                            {route.length == index + 1 ? path : (<><MyLink href={`/${path}`} className="capitalize text-base text-gray-400 hover:text-white">{path}</MyLink></>)}
                        </span>
                    </React.Fragment>
                )
            })}
        </>
    )
}

export default Getroute