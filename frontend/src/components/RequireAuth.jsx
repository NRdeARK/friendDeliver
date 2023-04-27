import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedToken}) => {
    const { auth } = useAuth();
    const location = useLocation();
    return (
        auth?.user
            ?
            <Outlet/>
            :
            <Navigate to="/unauthorized" state={{from: location }} replace />
            // <Navigate to="/login" state={{from: location}} replace />
    )
}

export default RequireAuth