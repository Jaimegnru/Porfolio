import { useContext } from "react"
import { AppContext } from "../contexts/App.contexts"
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
const {token} = useContext(AppContext);

return !!token ? <Outlet /> : <Navigate to={'/login'}/>;

}