import { useMutation } from "react-query";
import { useAppStore } from "../../app/store";
import { InputText } from "../ui";
import Button from "../ui/Button";
import { verifyRestosationOTP } from "../../utils/api/api";
import { useNavigate } from "react-router-dom";

export default function VerifyOTP({ requesterNumber, setStep }) {
    
    const pushToast = useAppStore.use.pushToast()
    const navigate = useNavigate()
    const { isLoading, mutate: verify, reset } = useMutation(data => verifyRestosationOTP(data), {
        onSuccess: (data) => {
            pushToast({
                type: 'success',
                message: data.message,
                duration: 3000
            })
            reset()
            // sessionStorage.removeItem('phoneNumber') // à activer après les tests
            setStep(0)
            navigate('/login', { replace: true })
        },
        onError: (error) => {
            pushToast({ message: error?.response?.data?.message || "An error occured.", type: 'error' })
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const otpCode = formData.get('otpCode')

        if (!otpCode || otpCode.length !== 6) {
            pushToast({ message: "Le code doit contenir 6 chiffres.", type: 'error' })
            return
        }
        
        verify({
            otpCode: otpCode,
            phoneNumber: requesterNumber
        })
    }

    return <div>
        <p className="my-2 text-sm/6 text-gray-500 mb-4">Un code à été envoyé au numéro <strong>{requesterNumber}</strong> et par email.</p>
        <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="flex flex-col items-center gap-2 py-4 sm:flex-row sm:py-0 sm:px-4 sm:gap-4">
                <span className="icon-[line-md--check-all] text-success"></span>
                <form id="verify" onSubmit={handleSubmit} className="flex flex-col flex-1 px-4">
                    <InputText
                        id="otpCode"
                        name="otpCode"
                        label="Entrez le code à 6 chiffres"
                        placeholder="Entrez le code à 6 chiffres"
                        required={true}
                        className="sm:border-base-300/10"
                    />
                </form>
                <Button
                    type="submit"
                    content="vérifier"
                    classNames="btn-primary"
                    isLoading={isLoading}
                    form="verify"
                />
            </li>
        </ul>
    </div>

}
