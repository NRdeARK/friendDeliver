import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path ="/login"index element={<Login />} />
    </Routes>
  )
}
