import { useState } from "react"
import logo from "../../assets/sentinelle_logo.png"
import { useLocation } from "react-router-dom"
import { usePageTitle } from "../../hooks/usePageTitle"

export default function RestaureAccount() {
    const [title, setTitle] = useState("Compte supprimé")
    usePageTitle(title)
    const location = useLocation()

    const requesterNumber = location.state?.split('')?.splice(3)?.join('')

    return <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-10">
        <div className="flex items-center w-90 sm:w-150 mb-6 gap-4">
            <img src={logo} alt="Sentinelle - logo" className="w-15 h-15" />
            <h1 className="text-2xl font-bold text-shadow-sm">{title} - Projet Sentinelle</h1>
        </div>

        <div className="card w-90 sm:w-150 mx-auto bg-base-100 shadow-l p-6">
            <fieldset className="fieldset bg-base-200 border-base-300/10 rounded-md px-4 pb-8">
                <legend className="fieldset-legend">
                    <h2 className="text-base/7 font-semibold text-shadow-xs">Un compte supprimé existe</h2>
                </legend>
                <p className="mt-1 text-sm/6 text-gray-500">Il existe un compte supprimé associé au numéro <strong>{requesterNumber}</strong>.</p>
                
                <ul className="list bg-base-100 rounded-box shadow-md">
                    <li className="list-row">
                        <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                        <div>
                            <div>Dio Lupa</div>
                            <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                        </div>
                        <p className="list-col-wrap text-xs">
                            "Remaining Reason" became an instant hit, praised for its haunting sound and emotional depth.
                        </p>
                        <button className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                        </button>
                        <button className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                        </button>
                    </li>
                </ul>
            </fieldset>
        </div>
    </div>
}
