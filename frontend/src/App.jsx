import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Testing from "./pages/Testing.jsx"

function App() {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path ="/login" index element={<Login />} />
      <Route path ="/testing" index element = {<Testing />} />
    </Routes>
  )
}

export default App