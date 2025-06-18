import { useState } from "react"
import logo from "../../assets/sentinelle_logo.png"
import { useLocation } from "react-router-dom"
import { usePageTitle } from "../../hooks/usePageTitle"
import RequestToRestaure from "../../components/auth/RequestToRestaure"
import VerifyOTP from "../../components/auth/VerifyOTP"

export default function RestaureAccount() {

    const [step, setStep] = useState(0)
    const location = useLocation()
    const requesterNumber = sessionStorage.getItem('phoneNumber') ||  location.state?.phoneNumber

    const restorationStep = [
        {
            step: 1,
            title: "Compte supprimé",
            description: "Un compte supprimé existe",
            content: <RequestToRestaure useCase={'change_user_password'} requesterNumber={requesterNumber} setStep={setStep} />
        },
        {
            step: 2,
            title: "Restauration du compte",
            description: "Un email a été envoyé.",
            content: <VerifyOTP requesterNumber={requesterNumber} setStep={setStep} />
        },
    ]
    usePageTitle(restorationStep[step].title)

    return <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-10">
        <div className="flex items-center w-90 sm:w-150 mb-6 gap-4">
            <img src={logo} alt="Sentinelle - logo" className="w-15 h-15" />
            <h1 className="text-2xl font-bold text-shadow-sm">{restorationStep[step].title} - Projet Sentinelle</h1>
        </div>

        <div className="card w-90 sm:w-150 mx-auto bg-base-100 shadow-l p-6">
            <fieldset className="fieldset bg-base-200 border-base-300/10 rounded-md px-4 pb-8">
                <legend className="fieldset-legend">
                    <h2 className="text-base/7 font-semibold text-shadow-xs">{restorationStep[step].description}</h2>
                </legend>

                {restorationStep[step]?.content}
            </fieldset>
        </div>
    </div>

}
