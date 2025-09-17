import { Link } from "react-router-dom";

export default function NavLinkItem({ item, setActive, active }) {
    const isActive = active.link === item.link
    return <li>
        <Link
            to={`${item.link}`}
            className={`${isActive && 'glass text-gray-400'} flex justify-between items-center py-3 hover:glass hover:text-gray-400 -mx-4 px-6`}
            onClick={() => setActive(item)}
        >{item.name}</Link>
        {item.children && <span>v</span>}
    </li>
}