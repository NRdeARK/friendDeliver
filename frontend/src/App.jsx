import "./App.css";
import Layout from "./components/Layout";
import Index from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register";
import Unauthorized from "./pages/Unauthorized";
import Missing from "./pages/Missing";
import Protected from "./pages/Protected";
import RequireAuth from "./components/RequireAuth";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Layout />}>
        {/*public routes*/}
        <Route path="/" element={<Index />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/*protected routes*/}
        <Route element={<RequireAuth />}>
          <Route path="protected" element={<Protected />} />
        </Route>

        {/*catch all*/}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
