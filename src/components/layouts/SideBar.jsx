import { motion } from "motion/react";
import { useState } from "react";
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
    const [active, setActive] = useState({
        name: "Session de prière",
        link: '/',
        active: false,
        children: null
    })

    const navLinksItems = [
        {
            name: "Session de prière",
            link: '/',
            active: false,
            children: null
        },
        {
            name: "Sujets de prière",
            link: 'subjects',
            active: false,
            children: null
        },
        {
            name: "Groupes",
            link: 'crews',
            active: false,
            children: null
        },
        {
            name: "Communautés",
            link: 'communauties',
            active: false,
            children: null
        },
    ]

    function toggleSidebar() {
        setIsOpen(!isOpen)
    }

    return <>
        <div
            className={`${!isOpen && 'hidden'} sm:hidden w-full h-full absolute z-3`}
            onClick={() => setIsOpen(false)}
        />
        <motion.div
            className="w-70 sm:w-50 h-full sm:h-auto p-4 glass absolute sm:static z-3 flex flex-col gap-4"
            initial="visible"
            animate={isOpen ? "visible" : "hidden"}
            variants={variants}
        >
            <HeaderHome logo={logo} title="Sentinelle" homePath="/" />
            <ToggleSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

            <ul>
                {navLinksItems.map((item, index) => (
                    <NavLinkItem
                        key={`${index}-${item.link}`}
                        item={item}
                        setActive={setActive}
                        active={active}
                    />
                ))}
            </ul>
        </motion.div>
    </>

}
