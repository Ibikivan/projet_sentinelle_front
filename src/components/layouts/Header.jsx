import { Link } from "react-router-dom"
import logo from "../../assets/sentinelle_logo.png"
import HeaderHome from "../HeaderHome"

export default function Header() {

    return <div className="hidden sm:flex items-center justify-between w-full p-4 z-4">
        <HeaderHome logo={logo} title="Projet - Sentinelle" homePath="/" />

        <ul className="flex items-center gap-4">
            <li><Link to="#">Support</Link></li>
            <li><Link to="#">Contact</Link></li>
            <li><Link to="#">Profile</Link></li>
        </ul>
    </div>

}
