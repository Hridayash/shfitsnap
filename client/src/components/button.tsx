import { FC } from "react";
interface ButtonProps {
    label : string;
    onClick?:(event : React.MouseEvent<HTMLButtonElement>) => void;
    type? : 'button' | 'submit' | 'reset';
    disabled? : boolean;
    className? : string;
    
}


const Button: FC<ButtonProps> = ({
    label,
    onClick,
    type = "button",
    disabled = false,
    className = 'bg-secondary dark:bg-darkSecondary text-white py-2 px-20 w-[80%] md:w-[60%]  lg:w-[30%] rounded-md ',
    

}) =>{
    return (
        < button 
            type = {type}
            onClick = {onClick} 
            disabled = {disabled}
            className={className}
            >
       
          {label}
        </button>
    );

}

export default Button;