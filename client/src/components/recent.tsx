export default function Recent(){
    const datas = [
        {
            date: "29 May 2024",
            hrs : "5 hours"
        },
        {
            date: "29 May 2024",
            hrs : "5 hours"
        },
        {
            date: "29 May 2024",
            hrs : "5 hours"
        },
        {
            date: "29 May 2024",
            hrs : "5 hours"
        },
        {
            date: "29 May 2024",
            hrs : "5 hours"
        },
        {
            date: "29 May 2024",
            hrs : "5 hours"
        },
        {
            date: "29 May 2024",
            hrs : "5 hours"
        },
        {
            date: "29 May 2024",
            hrs : "5 hours"
        },
        
       
    ]
    return(
        <div className=" w-auto border rounded-md border-teal-200  bg-slate-50 dark:bg-slate-700 drop-shadow p-4 flex flex-col justify-center items-center m-4 gap-4">
            <h1 className="text-blue-600 dark:text-blue-400 text-xl font-semibold">Recent Jobs</h1>
            <table className=" w-full">
             
             
                    {
                        datas.map((data)=>(
                            <tr className="flex justify-between items-center">
                                <td className="text-teal-700 dark:text-teal-300">{data.date}</td>
                                <td className="text-blue-600 dark:text-blue-400">{data.hrs}</td>
                            </tr>
                            
                        ))
                    }
                
                
                
            </table>

        </div>
    );
}