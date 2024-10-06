import { FC } from "react";

interface InputProps {
    type : string;
    placeholder: string;
    className?: string;
    name : string;
    value : string | number;
    onChange : ( e : React.ChangeEvent<HTMLInputElement>)=>any;  
}

const Input: FC<InputProps> = (
    {
        type,
        placeholder,
        className =  ' bg-neutral dark:bg-darkNeutral rounded-md p-2 w-[80%] md:w-[60%] lg:w-[30%]',
        name,
        value,
        onChange

    })=>{
        return (
            <input
                type = {type}
                placeholder={placeholder}
                className={className}
                name={name}
                value={value}
                onChange={onChange}
            />

           
        )

}

export default Input