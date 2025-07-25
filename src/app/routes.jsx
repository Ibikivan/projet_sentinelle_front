import { Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import PrivateRoute from "../auth/PrivateRoute";
import Home from "../pages/home/Home";
import AdminHome from "../pages/adminHome/AdminHome";
import Register from "../pages/register/Register";
import Forbidden from "../pages/forbidden/Forbidden";
import NotFound from "../pages/not_found/NotFound";
import RestaureAccount from "../pages/register/RestaureAccount";
import PwdForgotten from "../pages/pwdForgotten/PwdForgotten";
import UserHome from "../components/user/UserHome";

export const routes = [
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/restore-account", element: <RestaureAccount /> },
    { path: "/pwd-forgotten", element: <PwdForgotten /> },
    {
        path: "/",
        element: <PrivateRoute allowedRoles={["USER", "ADMIN"]}>
            <Home />
        </PrivateRoute>,
        children: [
            {
                path: '',
                element: <UserHome />
            }
        ]
    },
    {
        path: "/admin",
        element: <PrivateRoute allowedRoles={["ADMIN"]}>
            <AdminHome />
        </PrivateRoute>
    },
    { path: "/forbidden", element: <Forbidden /> },
    { path: "/not-found", element: <NotFound /> },
    { path: "*", element: <Navigate to="/not-found" /> }
]
