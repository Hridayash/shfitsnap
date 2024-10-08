import { FaRegClock } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa6";
import { MdOutlineTrendingUp } from "react-icons/md";
import { LuUserCircle2 } from "react-icons/lu";

export default function Summary(){

    const summary = [
        {
            title : 'Total Hours',
            icon : <FaRegClock className="text-teal-500" />,
            value : "90",
            sub : "hours"
        },
        {
            title : 'Total Earning',
            icon : <FaMoneyBillWave className="text-teal-500" />,
            value : "90",
            sub : "$"
        },
        {
            title : 'AVG / Daily',
            icon : <MdOutlineTrendingUp className="text-teal-500" />,
            value : "90",
            sub : "hours"
        },
        {
            title : 'Top Employer',
            icon : <LuUserCircle2 className="text-teal-500"/>,
            value : "MLSE",
            sub : ""
        }

    ]



    return(
        <div className=" w-auto h-2/3 m-2 rounded-md p-2 flex flex-col justify-center items-center">
            
            <div className=" grid grid-cols-2 gap-4 align-middle">

             {summary.map((summary)=>(
                         <div className="border rounded-md border-teal-200 p-2  bg-slate-50 dark:bg-slate-700 shadow-md ">
                         <div className="flex items-center justify-between gap-16 ">
                             <h1 className="font-medium text-teal-700 dark:text-teal-300 text-sm">{summary.title}</h1>
                             {summary.icon}
                         </div>
                         <div>
                             <h1 className=" text-3xl font-bold text-blue-600 dark:text-blue-400">{summary.value}</h1>
                             <p className=" text-sm text-teal-600 dark:text-teal-300">{summary.sub}</p>
                         </div>
                     </div>
             ))}   
               

            </div>
            

        </div>
    );
}