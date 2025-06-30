import { motion } from "motion/react";
import { useState } from "react";
import Button from "../ui/Button";

const variants = {
    hidden: { x: -280 },
    visible: { x: 0 },
};

export default function SideBar() {

    const [isOpen, setIsOpen] = useState(true);

    function toggleSidebar() {
        setIsOpen(!isOpen)
    }

    return <motion.div
        className="w-70 sm:w-50 h-full sm:h-auto p-4 glass absolute sm:static z-3"
        initial="visible"
        animate={isOpen ? "visible" : "hidden"}
        variants={variants}
    >
        <div className="relative w-full flex items-center justify-end left-20 sm:hidden">
            <Button content="Toggle" onClick={toggleSidebar} classNames="btn-primary" />
        </div>

        <ul className="list">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
        </ul>
    </motion.div>

}
