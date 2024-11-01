import { LuUserCircle2 } from "react-icons/lu";
import {useNavigate, Link } from "react-router-dom"



export default function Header(){

    const navigate = useNavigate();
    const handleProfileClick = ()=> {
        navigate("/profile")
    }
    return (
        <div className="flex justify-between  items-center p-2 bg-slate-50 dark:bg-slate-700 sticky top-0 left-0 w-screen z-10 shadow-md">
            <h1 className=" text-2xl font-black text-blue-600 dark:text-blue-300">SHIFTSNAP</h1>
            <div className="h-10 w-10 rounded-full bg-blue-600 dark:bg-blue-300 flex justify-center items-center"><LuUserCircle2 className=" text-9xl font-light" onClick={handleProfileClick}/></div>
        </div>
    );
}