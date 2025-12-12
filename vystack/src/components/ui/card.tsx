import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({ 
  children, 
  className = "", 
  hover = true,
  gradient = false,
  padding = "md" 
}: CardProps) {
  const paddingClasses = {
    sm: "p-4",
    md: "p-8",
    lg: "p-12"
  };

  const baseStyles = "rounded-2xl border transition-all duration-300";
  const hoverStyles = hover ? "hover:shadow-2xl hover:border-transparent hover:scale-105" : "";
  const gradientStyles = gradient ? "bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900" : "bg-white dark:bg-gray-800";
  const borderStyles = "border-gray-200 dark:border-gray-700";

  return (
    <div className={`${baseStyles} ${paddingClasses[padding]} ${gradientStyles} ${borderStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`mb-6 ${className}`}>
      {children}
    </div>
  );
}

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export function CardBody({ children, className = "" }: CardBodyProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div className={`mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
}