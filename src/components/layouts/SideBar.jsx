import { motion } from "motion/react";
import { useEffect, useState } from "react";
import logo from "../../assets/sentinelle_logo.png"
import HeaderHome from "../HeaderHome";
import ToggleSidebar from "../ToggleSidebar";
import NavLinkItem from "../NavLinkItem";

const variants = {
    hidden: { x: -280 },
    visible: { x: 0 },
};

export default function SideBar() {

    const [isOpen, setIsOpen] = useState(true)
    const screenWidth = window.innerWidth

    const navLinksItems = [
        {
            name: "Session de prière",
            link: '/',
            active: false,
            children: 'test'
        },
        {
            name: "Sujets de prière",
            link: '#',
            active: false,
            children: 'test'
        },
        {
            name: "Groupes",
            link: '#',
            active: false,
            children: null
        },
        {
            name: "Communautés",
            link: '#',
            active: false,
            children: null
        },
    ]

    useEffect(() => {
        if (screenWidth >= 640) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, {screenWidth})

    function toggleSidebar() {
        setIsOpen(!isOpen)
    }

    return <>
        <div
            className={`${!isOpen && 'hidden'} sm:hidden w-full h-full absolute z-3`}
            onClick={() => setIsOpen(false)}
        />
        <motion.div
            className="w-70 sm:w-80 h-full sm:h-auto p-4 glass absolute sm:static z-3 flex flex-col gap-4"
            initial="visible"
            animate={isOpen ? "visible" : "hidden"}
            variants={variants}
        >
            <HeaderHome logo={logo} title="Sentinelle" homePath="/" />
            <ToggleSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

            <div className="flex flex-col gap-2">
                {navLinksItems.map((item, index) => (
                    <NavLinkItem
                        key={`${index}-${item.link}`}
                        item={item}
                        index={index}
                    />
                ))}
            </div>
        </motion.div>
    </>

}
