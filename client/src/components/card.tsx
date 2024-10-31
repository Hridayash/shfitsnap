// Card.tsx

import { FC, ReactNode } from "react";

// Main Card Component
interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className = "bg-white shadow-md rounded-md p-4" }) => (
  <div className={className}>{children}</div>
);

// Card Header Component
interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export const CardHeader: FC<CardHeaderProps> = ({ children, className = "mb-4" }) => (
  <div className={className}>{children}</div>
);

// Card Title Component
interface CardTitleProps {
  title: string;
  className?: string;
}

export const CardTitle: FC<CardTitleProps> = ({ title, className = "text-lg font-bold" }) => (
  <h2 className={className}>{title}</h2>
);

// Card Content Component
interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent: FC<CardContentProps> = ({ children, className = "text-gray-700" }) => (
  <div className={className}>{children}</div>
);
