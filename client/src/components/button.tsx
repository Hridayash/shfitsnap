import { FC, ReactNode } from "react";

interface ButtonProps {
    label?: string;  // Make label optional if using children
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
    children?: ReactNode;  // Add children prop
    variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'; // Add variant prop
}

const Button: FC<ButtonProps> = ({
    label,
    onClick,
    type = "button",
    disabled = false,
    className = '',
    children,
    variant = 'primary',  // Default variant
}) => {
    // Determine class names based on the variant
    const variantClasses = variant === 'secondary' 
        ? 'bg-secondary dark:bg-darkSecondary' 
        : 'bg-primary dark:bg-darkPrimary';

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${variantClasses} text-white py-2 px-4 rounded-md ${className}`}
        >
            {children || label}  {/* Renders children if provided, otherwise label */}
        </button>
    );
}

export default Button;
