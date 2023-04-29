import "./App.css";
import Layout from "./components/Layout";
import Index from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register";
import Unauthorized from "./pages/Unauthorized";
import Missing from "./pages/Missing";
import Protected from "./pages/Protected";
import RequireAuth from "./components/RequireAuth";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import CreateOrder from "./pages/CreateOrder";
import OpenPost from "./pages/OpenPost";
import OpenOrder from "./pages/OpenOrder";
import OrderStatus from "./pages/OrderStatus";
import TestConfirm from "./pages/TestConfirm";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Layout />}>
        {/*public routes*/}
        <Route path="/" element={<Index />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="openPost" element={<OpenPost/>}/>
        {/* <Route path="openOrder" element={<OpenOrder/>}/> */}
        <Route path="testOrderConfirm" element={<TestConfirm/>}/>

        {/*protected routes*/}
        <Route element={<RequireAuth />}>
          <Route path="protected" element={<Protected />} />
          <Route path ="createPost" element = {<CreatePost/>} />
          {/* <Route path ="createOrder" element = {<CreateOrder/>}/> */}
          <Route path="profile" element={<Profile />} />
          <Route path="orderStatus" element={<OrderStatus/>}/>
        </Route>

        {/*catch all*/}
        <Route path="*" element={<Missing />} />
      </Route>
      {/* <Route index element={<Index />} />
      <Route path ="/login" index element={<Login />} />
      <Route path ="/testing" index element = {<Testing />} />
      <Route path ="/register" index element = {<Register />} />
       */}
    </Routes>
  );
}

export default App;
