import { useMutation } from "react-query";
import Button from "../ui/Button";
import { useAppStore } from "../../app/store";
import { requestAccountRestoration } from "../../utils/api/api";

export default function RequestToRestaure({ requesterNumber, setStep }) {

    const pushToast = useAppStore.use.pushToast()
    const { isLoading, mutate: request, reset } = useMutation(data => requestAccountRestoration(data), {
        onSuccess: (data) => {
            pushToast({
                type: 'success',
                message: `${data.message} to ${requesterNumber}.`,
            })
            reset()
            setStep(1)
        },
        onError: (error) => {
            pushToast({ message: error?.response?.data?.message || "An error occured.", type: 'error' })
        }
    })

    return <div>
        <p className="my-2 text-sm/6 text-gray-500 mb-4">Il existe un compte supprimé associé au numéro <strong>{requesterNumber}</strong>.</p>
        <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="list-row items-center">
                <span className="icon-[line-md--account]"></span>
                <div>
                    <div>Xxxxx</div>
                    <div className="text-xs uppercase font-semibold opacity-60">Xxxxxxx</div>
                </div>
                <Button content="Restaurer" classNames="btn-primary" onClick={() => request(requesterNumber)} isLoading={isLoading} />
            </li>
        </ul>
    </div>
    
}
