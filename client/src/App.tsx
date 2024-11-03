
import Edit from "./pages/edit"; 
import Home from "./pages/home"


import Login from "./pages/login"
import Profile from "./pages/profile"
import Signup from "./pages/signup"

import { Route , BrowserRouter , Routes } from "react-router-dom"
import Terms from "./pages/terms";
import PrivacyPolicy from "./pages/privacy";

function App() {


  return (
    <BrowserRouter>

        <Routes>
         <Route path ="/login" element  = {<Login />} />
         <Route path ="/signup" element  = {<Signup/>} />
         <Route path ="/home" element  = {<Home/>} />
         <Route path ="/profile" element  = {<Profile/>} />
         <Route path="/edit" element={<Edit />} />          

         <Route path="/terms" element={<Terms />} />  
         <Route path="/privacy" element={<PrivacyPolicy />} />    

        </Routes>
  
    </BrowserRouter>
  )
}

export default App
