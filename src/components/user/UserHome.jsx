import { useAppStore } from "../../app/store";
import { InputText } from "../ui";

export default function UserHome() {

    const user = useAppStore.use.user()
    const pushToast = useAppStore.use.pushToast()
    let count = 1

    function onSubmit() {
        pushToast({ message: `Bravo ${count} ! Action réussi`, type: 'error' })
        count++
    }

    return <div className="flex items-center justify-center grow">
            <div className="card w-85 bg-base-100 shadow-xl p-6 mx-auto my-6">
            <h1 className="text-center text-3xl font-bold">{user.firstName} {user.lastName} welcome to the Home Page</h1>

            <InputText id="test" label="Champ de test" name="test" placeholder="Merci de renseigner le champ" />
            <button className="btn" onClick={onSubmit}>Toast</button>

            <p className="mt-4 text-center">This is a protected route. Only authorized users can see this page.</p>
        </div>
    </div>

}
