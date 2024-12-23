import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`rounded-lg border border-gray-700 bg-accent/25 ${className}`}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: ReactNode
}

export const CardHeader = ({ children }: CardHeaderProps) => {
  return <div className='border-b border-gray-700 px-6 py-4'>{children}</div>
}

interface CardTitleProps {
  children: ReactNode
}

export const CardTitle = ({ children }: CardTitleProps) => {
  return <h3 className='text-2xl font-semibold text-white'>{children}</h3>
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export const CardContent = ({ children, className }: CardContentProps) => {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>
}

interface CardFooterProps {
  children: ReactNode
}

export const CardFooter = ({ children }: CardFooterProps) => {
  return <div className='border-t border-gray-700 px-6 py-4'>{children}</div>
}