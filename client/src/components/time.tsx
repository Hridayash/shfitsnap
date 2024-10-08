import Button from "./button";


export default function Time(){
     return (
        <div className=" w-auto border rounded-md border-teal-200  bg-slate-50 dark:bg-slate-700 drop-shadow p-4 flex flex-col justify-center items-center m-4 gap-4">

            <h1 className="text-blue-600 dark:text-blue-400 text-xl font-semibold">Add Time Entry</h1>
            <div className="flex flex-col w-full   items-center gap-4 ">
                <div className="flex  items-center justify-between gap-4">
                        <h1 className="dark:text-teal-300 text-teal-700">Date</h1>
                        <input type = "Date" className="bg-slate-50 dark:bg-slate-700 border rounded-md border-teal-200 text-white-300 p-2 w-[245px] md:w-[60%] lg:w-[30%]" />
                </div>
                <div className="flex justify-between items-center gap-4">
                        <h1 className="dark:text-teal-300 text-teal-700">Start</h1>
                        <input type = "time" className="bg-slate-50 border  dark:bg-slate-700 rounded-md border-teal-200  p-2 w-[245px] md:w-[60%] lg:w-[30%]" />
                </div>
                <div className="flex justify-between items-center gap-4">
                        <h1 className="dark:text-teal-300 text-teal-700">End</h1>
                        <input type = "time" className="bg-slate-50 border  dark:bg-slate-700 rounded-md border-teal-200 text-white-300 p-2 w-[245px] md:w-[60%] lg:w-[30%]" />
                </div>
                

            </div>
            

            <Button label = "Add Entry" />
        </div>
     );
}