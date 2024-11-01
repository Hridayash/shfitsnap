// Avatar.tsx

import { FC } from "react";

// Main Avatar Component
interface AvatarProps {
  children: React.ReactNode;
  className?: string;
}

export const Avatar: FC<AvatarProps> = ({
  children,
  className = "relative w-16 h-16 rounded-full overflow-hidden",
}) => (
  <div className={className}>{children}</div>
);

// Avatar Image Component
interface AvatarImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export const AvatarImage: FC<AvatarImageProps> = ({
  src,
  alt = "Avatar",
  className = "w-full h-full object-cover",
}) => (
  <img src={src} alt={alt} className={className} />
);

// Avatar Fallback Component

interface AvatarFallbackProps {
    fallbackText: string; // Required prop for the fallback text
}

export const AvatarFallback: FC<AvatarFallbackProps> = ({ fallbackText }) => {
    return (
        <div className="flex items-center justify-center bg-gray-200 h-full w-full">
            <span className="text-gray-500">{fallbackText}</span>
        </div>
    );
};
