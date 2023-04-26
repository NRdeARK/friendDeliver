import { createContext, useState } from "react";
const AuthContext = createContext({});
export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [toggleUpdateOrder, setToggleUpdateOrder] = useState(true);
    return (
        <AuthContext.Provider value={{ auth, setAuth,toggleUpdateOrder, setToggleUpdateOrder}}>
            {children}
        </AuthContext.Provider>
    )
}

