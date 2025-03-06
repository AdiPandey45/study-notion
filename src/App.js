import { Routes } from "react-router-dom";
import "./App.css";
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashBoard from "./pages/DashBoard";
import{useState} from "react";
import NavBar from "./components/NavBar";


function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return(


  <div>
  <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
  
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
    <Route path="signup" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
    <Route path="dashboard" element={<DashBoard/>}/>
  </Routes>
    </div>
)

  

}

export default App;
