
import Edit from "./pages/edit"; 
import Home from "./pages/home"


import Login from "./pages/login"
import Profile from "./pages/profile"
import Signup from "./pages/signup"

import { Route , BrowserRouter , Routes } from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
ß
        <Routes>
         <Route path ="/login" element  = {<Login />} />
         <Route path ="/signup" element  = {<Signup/>} />
         <Route path ="/home" element  = {<Home/>} />
         <Route path ="/profile" element  = {<Profile/>} />
         <Route path="/edit" element={<Edit />} />          

        </Routes>
  
    </BrowserRouter>
  )
}

export default App
