interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, variant = 'primary' }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-xl font-semibold transition-all";
  
  if (variant === 'primary') {
    return (
      <button className={`${baseStyles} bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg`}>
        {children}
      </button>
    );
  }
  
  return (
    <button className={`${baseStyles} border-2 border-purple-500 text-purple-600 hover:bg-purple-50`}>
      {children}
    </button>
  );
}