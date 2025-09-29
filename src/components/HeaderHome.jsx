import { Link } from "react-router-dom";
import { motion } from "motion/react"

export default function HeaderHome({ logo, title, homePath, margingGap=4 }) {
    return <Link to={`${homePath}`} className={`flex justify-between navbar shadow-sm p-4 -m-4 bg-base-100 w-70 sm:w-80`}>
        <div className="flex">
            <motion.img layoutId="layout-logo" src={logo} alt="Sentinelle - logo" className="w-10 h-10" />
            <a className="btn btn-ghost text-xl">Sentinelle</a>
        </div>

        <div className="dropdown dropdown-end sm:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>
    </Link>
}