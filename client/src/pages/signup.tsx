import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";

interface User{
        name :string
        email: string
        password :string
}

export default function Signup(){

    const navigate = useNavigate();
    const api  = import.meta.env.VITE_BACKEND_URL
    const [user ,setUser] = useState <User>({
        name : '',
        email : '',
        password: '',
    })

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        const {name ,value } = e.target
        setUser((prevUser) =>({
            ...prevUser , 
            [name] : value,
        }))

    }


        const handleSubmit   =async(e : React.FormEvent)=>{ 
            e.preventDefault()
            try{
              const response =  await axios.post(`${api}/user/signup` , user)
              alert("success")
              console.log(response.data)
              navigate('/login')
         
            }catch(err){
                console.log(err)
            }
            
         }








  


    console.log(user.name)




    return(

    <div className="flex items-center justify-center " >
        <div>
            <form onSubmit={handleSubmit}>
                
                <div className="flex flex-col gap-4 justify-center items-center w-screen h-screen  ">
                    <h1 className="text-4xl font-extrabold text-primary  dark:text-darkPrimary">SHIFTSNAP</h1>
                    <h1 className=" text-2xl text-primary  dark:text-darkPrimary">Register</h1>
                    <Input type="text" placeholder="Name"   name = "name" value = {user.name} onChange={handleChange} />
                    <Input type="Email" placeholder="Email"   name = "email" value = {user.email} onChange={handleChange}/>
                    <Input type="password" placeholder="password"  name = "password" value = {user.password} onChange={handleChange}/>
                    <Button type="submit"  label="Sign Up" />

                    <div className="flex  items-center justify-between w-[80%] md:w-[60%] lg:w-[30%]">
                        <Link to="/"><p>Forgot Password?</p></Link>
                        <Link to="/login"><p>Login</p></Link>
                   
                    </div>

                    
                    
                </div>
               
                
            </form>
            
            
        </div>
    </div>
    );
}