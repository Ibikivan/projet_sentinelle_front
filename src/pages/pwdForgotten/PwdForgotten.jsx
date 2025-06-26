import { useState } from "react"
import logo from "../../assets/sentinelle_logo.png"
import { usePageTitle } from "../../hooks/usePageTitle"
import RequestTo from "../../components/auth/RequestTo"
import VerifyOTP from "../../components/auth/VerifyOTP"
import { motion } from "motion/react"

export default function PwdForgotten() {

    const [step, setStep] = useState(0)
    const restorationStep = [
        {
            step: 1,
            title: "Mot de passe Oublié",
            description: "Récupération de compte",
            content: <RequestTo useCase={'forgotten_pwd'} setStep={setStep} />
        },
        {
            step: 2,
            title: "Vérification de vos informations",
            description: "Un email a été envoyé.",
            content: <VerifyOTP useCase={'forgotten_pwd'} setStep={setStep} />
        },
        {
            step: 3,
            title: "Réinitialisation du mdp",
            description: "Vous pouvez maintenant changer de mdp.",
            content: <RequestTo useCase={'reset_password'} setStep={setStep} />
        }
    ]
    
    usePageTitle(restorationStep[step].title)

    return <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-10">
        <div className="flex items-center w-90 sm:w-150 mb-6 gap-4">
            <motion.img layoutId="layout-logo" src={logo} alt="Sentinelle - logo" className="w-15 h-15" />
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
