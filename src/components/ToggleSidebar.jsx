import Button from "./ui/Button";
import { motion } from "motion/react"

const variant = {
    close: { rotate: 0 },
    open: { rotate: 180 }
}

export default function ToggleSidebar({ isOpen, toggleSidebar }) {

    return <div className="realtive glass flex py-2 my-4 -mx-4">
        <div className="flex flex-grow justify-between w-full">
            <Button children={<span>🔎</span>} classNames="h-full" />
            <div className="w-full h-full">
                <div className="w-full h-1/2 border-b text-left">Rechercher</div>
                <div className="w-full h-1/2 border-t text-right">trier</div>
            </div>
            <Button children={<span>📐</span>} classNames="h-full" />
        </div>
        <Button
            children={<motion.span
                initial="open"
                variants={variant}
                animate={isOpen ? "open" : "close"}
            >➡️</motion.span>}
            classNames="sm:hidden absolute h-full flex left-11 glass"
            onClick={toggleSidebar}
        />
    </div>
}