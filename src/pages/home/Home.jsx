import { useAppStore } from "../../app/store"
import { InputText } from "../../components/ui"
import { usePageTitle } from "../../hooks/usePageTitle"

export default function Home() {
    usePageTitle("Home page")
    const user = useAppStore.use.user()
    
    return <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='text-primary text-xl my-4 w-auto'>Logo</div>
        <div className="card w-85 bg-base-100 shadow-xl p-6">
            <h1 className="text-center text-3xl font-bold">{user.firstName} {user.lastName} welcome to the Home Page</h1>

            <InputText id="test" label="Champ de test" name="test" placeholder="Merci de renseigner le champ" />

            <p className="mt-4 text-center">This is a protected route. Only authorized users can see this page.</p>
        </div>
    </div>
}
