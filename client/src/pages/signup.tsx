import { Link } from "react-router-dom";

export default function Signup(){
    return(
    <div className="flex items-center justify-center " >
        <div>
            <form action="submit">
                
                <div className="flex flex-col gap-4 justify-center items-center w-screen h-screen  ">
                    <h1 className="text-4xl font-extrabold">SHIFTSNAP</h1>
                    <h1 className=" text-2xl">Sign Up</h1>
                    <input type="test" placeholder="Name" className=" bg-blue-800 rounded-md p-2 w-[80%] md:w-[60%] lg:w-[30%]"/>
                    <input type="email" placeholder="Email" className=" bg-blue-800 rounded-md p-2 w-[80%] md:w-[60%] lg:w-[30%]"/>
                    <input type="password" placeholder="password" className=" bg-blue-800 rounded-md p-2 w-[80%] md:w-[60%]  lg:w-[30%]"/>
                    <button className="bg-blue-500 py-2 px-20 w-[80%] md:w-[60%]  lg:w-[30%] rounded-md ">Sign Up</button>

                    <div className="flex flex-col items-center ">
                       
                    
                        <Link to="/login"><p>Login</p></Link>

                    </div>
                    
                </div>
                
            </form>
        </div>
    </div>
    );
}