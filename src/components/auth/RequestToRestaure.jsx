import { useMutation } from "react-query";
import Button from "../ui/Button";
import { useAppStore } from "../../app/store";
import { currentUserChangePwd, requestAccountRestoration, requestToChangePhoneNumber } from "../../utils/api/api";
import { InputText } from "../ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RequestToRestaure({ useCase, requesterNumber, setStep }) {

    const [showPassword, setShowPassword] = useState(false)
    const pushToast = useAppStore.use.pushToast()
    const navigate = useNavigate()

    const { isLoading: restoring, mutate: restore, reset: resetRestore } = useMutation(data => requestAccountRestoration(data), {
        onSuccess: (data) => {
            pushToast({
                type: 'success',
                message: `${data.message} to ${requesterNumber}.`,
                duration: 3000
            })
            resetRestore()
            setStep(step => step++)
        },
        onError: (error) => {
            pushToast({ message: error?.response?.data?.message || "An error occured.", type: 'error' })
        }
    })

    const { isLoading: changing, mutate: change, reset: resetChange } = useMutation(data => requestToChangePhoneNumber(data), {
        onSuccess: (data) => {
            pushToast({type: 'success', message: data.message, duration: 3000})
            resetChange()
            setStep(step => step++)
        },
        onError: (error) => pushToast({ message: error?.response?.data?.message || "An error occured.", type: 'error' })
    })

    const { isLoading: changingPwd, mutate: changePwd, reset: resetChangePwd } = useMutation(data => currentUserChangePwd(data), {
        onSuccess: (data) => {
            pushToast({type: 'success', message: data.message, duration: 3000})
            resetChangePwd()
            navigate('/login', { replace: true })
        },
        onError: (error) => pushToast({ message: error?.response?.data?.message || "An error occured.", type: 'error' })
    })

    function handlePhoneNumberChange(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newPhoneNumber = formData.get('newPhoneNumber')

        if (!newPhoneNumber) {
            pushToast({ message: "Entrez un numéro de téléphone.", type: 'error' })
            return
        }

        change({ newPhoneNumber: newPhoneNumber })
    }

    function handleChangePwd(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)

        if (!data.oldPassword || !data.newPassword) {
            pushToast({ message: "Veuillez renseigner tous les champs.", type: 'error' })
        }

        if (data.oldPassword === data.newPassword) {
            pushToast({ message: "Le nouveau doit différer de l'ancien.", type: 'error' })
            return
        }

        console.log('change pwd data :', data)

        changePwd(data)
    }

    function toggleShowPassword() {
        setShowPassword(!showPassword)
    }

    const usesCases = {
        request_to_restore_account: {
            description: <span>Il existe un compte supprimé associé au numéro <strong>{requesterNumber}</strong>.</span>,
            caseIncon: <span className="icon-[line-md--account]"></span>,
            body: (<div className="flex flex-col flex-1 py-4">
                <div>Xxxxx</div>
                <div className="text-xs uppercase font-semibold opacity-60">Xxxxxxx</div>
            </div>),
            button: <Button content="Restaurer" classNames="btn-primary" onClick={() => restore(requesterNumber)} isLoading={restoring} />
        },
        request_to_change_phoneNumber: {
            description: 'Vous allez entrer le nouveau numéro pour confirmation avant association',
            caseIncon: <span className="icon-[line-md--cellphone-arrow-up]"></span>,
            body: (<form id="change_phoneNumber" onSubmit={handlePhoneNumberChange} className="flex flex-col flex-1">
                <InputText
                    id="newPhoneNumber"
                    name="newPhoneNumber"
                    label="Entrez le nouveau numero"
                    placeholder="Entrez le nouveau numero"
                    required={true}
                    className="sm:border-base-300/10"
                />
            </form>),
            button: <Button type="submit" content="Envoyer" classNames="btn-primary" isLoading={changing} form="change_phoneNumber" />
        },
        change_user_password: {
            description: 'Vous allez changer le mot de passe de votre compte',
            body: (<form onSubmit={handleChangePwd} className="flex flex-col flex-1 p-4">
                <InputText
                    id="oldPassword"
                    name="oldPassword"
                    label="Entrez votre mot de passe actuel"
                    placeholder="Entrez votre mot de passe actuel"
                    type={showPassword ? 'text' : 'password'}
                    required={true}
                    className="sm:border-base-300/10 focus:outline-none"
                >
                    <div className='absolute inset-y-0 right-3 flex items-center cursor-pointer z-3' onClick={toggleShowPassword}>
                        {!showPassword
                            ? <span className="icon-[weui--eyes-on-filled] text-primary"></span>
                            : <span className="icon-[weui--eyes-off-filled] text-primary"></span>
                        }
                    </div>
                </InputText>
                <InputText
                    id="newPassword"
                    name="newPassword"
                    label="Entrez le nouveau mot de passe"
                    placeholder="Entrez le nouveau mot de passe"
                    type={showPassword ? 'text' : 'password'}
                    required={true}
                    className="sm:border-base-300/10 focus:outline-none"
                >
                    <div className='absolute inset-y-0 right-3 flex items-center cursor-pointer z-3' onClick={toggleShowPassword}>
                        {!showPassword
                            ? <span className="icon-[weui--eyes-on-filled] text-primary"></span>
                            : <span className="icon-[weui--eyes-off-filled] text-primary"></span>
                        }
                    </div>
                </InputText>
                <Button type="submit" content="Changer" classNames="btn-primary mt-2" isLoading={changingPwd} />
            </form>)
        }
    }

    const selectedCase = usesCases[useCase]

    return <div>
        {selectedCase?.description && <p className="my-2 text-sm/6 text-gray-500 mb-4">{selectedCase.description}</p>}
        <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="flex flex-col items-center gap-2 py-4 sm:flex-row sm:py-0 sm:px-4 sm:gap-4">
                {selectedCase?.caseIncon && selectedCase.caseIncon}
                {selectedCase.body}
                {selectedCase?.button && selectedCase.button}
            </li>
        </ul>
    </div>
    
}
