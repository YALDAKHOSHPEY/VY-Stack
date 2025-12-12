import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  className?: string;
}

export function Badge({ 
  children, 
  variant = "default", 
  size = "md",
  icon: Icon,
  className = "" 
}: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full font-medium transition-colors";
  
  const variants = {
    default: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
    primary: "bg-gradient-to-r from-soft-purple-500/20 to-cyan-500/20 text-soft-purple-600 dark:text-soft-purple-400 border border-soft-purple-500/30",
    secondary: "bg-gradient-to-r from-gray-500/20 to-gray-700/20 text-gray-700 dark:text-gray-300 border border-gray-500/30",
    success: "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-600 dark:text-green-400 border border-green-500/30",
    warning: "bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-600 dark:text-yellow-400 border border-yellow-500/30",
    danger: "bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-600 dark:text-red-400 border border-red-500/30",
    outline: "border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
  };
  
  const sizes = {
    sm: "px-2 py-1 text-xs gap-1",
    md: "px-3 py-1.5 text-sm gap-2",
    lg: "px-4 py-2 text-base gap-2"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {Icon && <Icon className="w-3 h-3" />}
      {children}
    </span>
  );
}