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
        </div>
    </div>
    );
}