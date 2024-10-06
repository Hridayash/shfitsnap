
import { Link , useNavigate } from "react-router-dom";
import { useState  } from "react";
import axios from "axios";
import Button from "../components/button";
import Input from "../components/input"


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

                    <Input type="email" placeholder="Email"  onChange={handlesChange} value={user.email} name = "email"/>
                    
                    <Input type="password" placeholder="password"  onChange={handlesChange} value={user.password} name = "password"/>
                    <Button type="submit"  label="Login" />

                    <div className="flex  items-center justify-between w-[80%] md:w-[60%] lg:w-[30%]">

                        <Link to="/"><p>Forgot Password?</p></Link>
                        <Link to="/signup"><p>Register</p></Link>
                   
                    </div>
                    
                </div>
                
            </form>

            <Button
                        onClick={toggleDarkMode}
                      label="Toggle Dark Mode"
                   />
                       
                    

        </div>
    </div>
    );
}