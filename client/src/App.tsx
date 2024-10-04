import Login from "./pages/login"
import Signup from "./pages/signup"

import { Route , BrowserRouter , Routes } from "react-router-dom"

function App() {


  return (
    <BrowserRouter>

        <Routes>
         <Route path ="/login" element  = {<Login />} />
         <Route path ="/signup" element  = {<Signup/>} />

        </Routes>
  
    </BrowserRouter>
  )
}

export default App
