import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Logout = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    setAuth({});
    navigate('/');
}

export default Logout