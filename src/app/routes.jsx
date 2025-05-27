import { Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import PrivateRoute from "../auth/PrivateRoute";
import Home from "../pages/home/Home";
import AdminHome from "../pages/adminHome/AdminHome";
import Register from "../pages/register/Register";
import Forbidden from "../pages/forbidden/Forbidden";
import NotFound from "../pages/not_found/NotFound";

export const routes = [
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    {
        path: "/",
        element: <PrivateRoute allowedRoles={["USER", "ADMIN"]}>
            <Home />
        </PrivateRoute>
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
