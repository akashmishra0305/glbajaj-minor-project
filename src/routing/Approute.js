import { useRoutes , Navigate } from "react-router-dom"
import Login from "../components/auth/Login"
import Dashboard from "../components/Dashboard"
import NotFound from "../layout/NotFound"

export default function Approute(){
    const routes = [
        { path : "/" , element : <Navigate to={"/auth/login"} /> },
        { path : "/auth/login" , element : <Login/> },
        { path : "/dashboard", element : <Dashboard/> },
        { path : "*", element : <NotFound/> }
    ]

    return useRoutes(routes)
}