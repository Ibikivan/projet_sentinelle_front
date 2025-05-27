import { useAppStrore } from "../app/store"
import { getCurrentUser } from "../utils/api/api"
import { useQuery } from "react-query"

export default function AuthProvider({ children }) {
    const updateUser = useAppStrore.use.updateUser()
    const provideAuth = useAppStrore.use.provideAuth()
    const queryKey = ['currentUser']
    
    const { isLoading, data } = useQuery(queryKey, () => getCurrentUser(), {
        enabled: provideAuth,
        retry: false
    })

    if (data) updateUser(data)
    if (!data) {
        updateUser(null)
        useAppStrore.persist.clearStorage()
    }

    if (isLoading) return <h1>Loading...</h1>

    return <div className="relative h-screen">
        {/* Potentiel background travaillé ici */}
        {children}
    </div>
}
