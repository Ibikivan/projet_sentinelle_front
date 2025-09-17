import { Link } from "react-router-dom";
import { motion } from "motion/react"

export default function HeaderHome({ logo, title, homePath, margingGap=4 }) {
    return <Link to={`${homePath}`} className={`flex items-center bg-base-200 -m-${margingGap} px-4 py-2 gap-2`}>
        <motion.img layoutId="layout-logo" src={logo} alt={`Sentinelle - logo`} className="w-10 h-10" />
        <h1 className="text-center text-md font-bold">{title}</h1>
    </Link>
}