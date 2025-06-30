import { Link } from "react-router-dom"
import logo from "../../assets/sentinelle_logo.png"
import { motion } from "motion/react"

export default function Header() {

    return <div className="hidden sm:flex items-center justify-between w-full p-4 bg-base-200 z-4">
        <Link to="/" className="flex items-center gap-2">
            <motion.img layoutId="layout-logo" src={logo} alt={`Sentinelle - logo`} className="w-10 h-10 mx-auto" />
            <h1 className="text-center text-2xl font-bold">Projet - Sentinelle</h1>
        </Link>

        <ul className="flex items-center gap-4">
            <li><Link to="#">Support</Link></li>
            <li><Link to="#">Contact</Link></li>
            <li><Link to="#">Profile</Link></li>
        </ul>
    </div>

}
