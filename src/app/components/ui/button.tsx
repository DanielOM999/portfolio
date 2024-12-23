import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'px-4 py-2 rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50'

  const variantStyles =
    variant === 'outline'
      ? 'border border-white/70 text-white/70 hover:bg-white hover:text-black'
      : 'bg-white text-black hover:bg-white/90'

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button