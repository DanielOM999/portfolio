'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

interface AlertProps {
  variant: 'warning' | 'info' | 'error' | 'success'
  children: ReactNode
  className?: string
}

export function Alert({ variant, children, className = '' }: AlertProps) {
  const variantClasses = {
    warning: 'bg-white/10 text-white/25',
    info: 'bg-blue-400/10 text-blue-400',
    error: 'bg-red-400/10 text-red-400',
    success: 'bg-green-400/10 text-green-400'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
      className={`flex items-center rounded-lg p-4 ${variantClasses[variant]} ${className}`}
    >
      <AlertTriangle className='mr-2 h-5 w-5' />
      {children}
    </motion.div>
  )
}

export function AlertDescription({ children }: { children: ReactNode }) {
  return <div className='ml-2 text-sm'>{children}</div>
}