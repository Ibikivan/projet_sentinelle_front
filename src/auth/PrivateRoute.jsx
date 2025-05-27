import { Navigate } from "react-router-dom"
import { useAppStrore } from "../app/store"

export default function PrivateRoute({ allowedRoles, children }) {
    const user = useAppStrore.use.user()

    if (!user) return <Navigate to="/login" replace />
    user.roles = [user.role]
    const hasAccess = allowedRoles.some(role => user.roles.includes(role))
    if (!hasAccess) return <Navigate to="/forbidden" replace />

    return children
}
