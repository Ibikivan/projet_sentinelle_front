import { useAppStore } from "../../app/store"
import { InputText } from "../../components/ui"
import { usePageTitle } from "../../hooks/usePageTitle"

export default function Home() {
    usePageTitle("Accueille")
    const user = useAppStore.use.user()
    const pushToast = useAppStore.use.pushToast()
    let count = 1

    function onSubmit() {
        pushToast({ message: `Bravo ${count} ! Action réussi`, type: 'error' })
        count++
    }
    
    return <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className="card w-85 bg-base-100 shadow-xl p-6">
            <h1 className="text-center text-3xl font-bold">{user.firstName} {user.lastName} welcome to the Home Page</h1>

            <InputText id="test" label="Champ de test" name="test" placeholder="Merci de renseigner le champ" />
            <button className="btn" onClick={onSubmit}>Toast</button>

            <p className="mt-4 text-center">This is a protected route. Only authorized users can see this page.</p>
        </div>
    </div>
}
