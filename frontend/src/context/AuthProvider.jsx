import { createContext, useState } from "react";
const AuthContext = createContext({});
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [toggleUpdateOrder, setToggleUpdateOrder] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isAllow, setIsAllow] = useState(false);
  const [data, setData] = useState({});
  const [submit, setSubmit] = useState(false)
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        toggleUpdateOrder,
        setToggleUpdateOrder,
        showModal,
        setShowModal,
        isAllow,
        setIsAllow,
        data,
        setData,
        submit, 
        setSubmit
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
