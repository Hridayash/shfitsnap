
import { Link , useNavigate } from "react-router-dom";
import { useState  } from "react";
import axios from "axios"

interface User{
    email : string
    password : string
}

export default function Login(){

    //setup api from env variable
    const api = import.meta.env.VITE_BACKEND_URL
    //setup navigation to different apge
    const navigate = useNavigate()

    //to store the input of userid and password to send into backend

    const [user , setUser] = useState <User>({
        email : '',
        password :''
    })


//To change the light mode of the entire app #temporory
    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
      };

//to handle all the changes in the input fileds
      const handlesChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        const {name , value } = e.target
        setUser((prevUser) =>({
            ...prevUser ,
            [name] : value
        }))
      }

//to handle the submit button
        const handleSubmit = async(e : React.FormEvent)=>{
            e.preventDefault()
            try{
                const response = await axios.post(`${api}/user/login` , user)
                alert("success")
                console.log(response.data)
                navigate("/home")
            }catch(err){
                console.log(err)
            }
        }




    return(
    <div className="flex items-center justify-center " >
        <div>
            <form onSubmit={handleSubmit}>
                
                <div className="flex flex-col gap-4 justify-center items-center w-screen h-screen  ">
                    <h1 className="text-4xl font-extrabold text-primary dark:text-darkPrimary">SHIFTSNAP</h1>
                    <h1 className=" text-2xl text-primary dark:text-darkPrimary">Login</h1>
                    <input type="email" placeholder="Email" className=" bg-neutral dark:bg-darkNeutral rounded-md p-2 w-[80%] md:w-[60%] lg:w-[30%]" onChange={handlesChange} value={user.email} name = "email"/>
                    <input type="password" placeholder="password" className=" bg-neutral  dark:bg-darkNeutral rounded-md p-2 w-[80%] md:w-[60%]  lg:w-[30%]" onChange={handlesChange} value={user.password} name = "password"/>
                    <button className="bg-secondary dark:bg-darkSecondary text-white py-2 px-20 w-[80%] md:w-[60%]  lg:w-[30%] rounded-md " type="submit">Login</button>

                    <div className="flex  items-center justify-between w-[80%] md:w-[60%] lg:w-[30%]">

import { Link } from "react-router-dom";


export default function Login(){
    return(
    <div className="flex items-center justify-center " >
        <div>
            <form action="submit">
                
                <div className="flex flex-col gap-4 justify-center items-center w-screen h-screen  ">
                    <h1 className="text-4xl font-extrabold">SHIFTSNAP</h1>
                    <h1 className=" text-2xl">Login</h1>
                    <input type="text" placeholder="Email" className=" bg-blue-800 rounded-md p-2 w-[80%] md:w-[60%] lg:w-[30%]"/>
                    <input type="password" placeholder="password" className=" bg-blue-800 rounded-md p-2 w-[80%] md:w-[60%]  lg:w-[30%]"/>
                    <button className="bg-blue-500 py-2 px-20 w-[80%] md:w-[60%]  lg:w-[30%] rounded-md ">Login</button>

                    <div className="flex flex-col items-center">

                        <Link to="/"><p>Forgot Password?</p></Link>
                        <Link to="/signup"><p>Register</p></Link>
                   
                    </div>
                    
                </div>
                
            </form>

            <button
                        onClick={toggleDarkMode}
                        className="bg-secondary text-white px-4 py-2 rounded dark:bg-darkSecondary"
                    >
                        Toggle Dark Mode
                    </button>

        </div>
    </div>
    );
}