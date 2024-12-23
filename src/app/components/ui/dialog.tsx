'use client'

import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DialogProps {
  open: boolean
  onOpenChange: () => void
  children: ReactNode
}

interface DialogContentProps {
  className?: string
  children: ReactNode
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, ease: 'easeInOut' }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
          onClick={onOpenChange}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function DialogContent({ className, children }: DialogContentProps) {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9 }}
      className={`rounded-lg bg-black/10 p-6 backdrop-blur-sm ${className}`}
      onClick={e => e.stopPropagation()}
    >
      {children}
    </motion.div>
  )
}

export function DialogHeader({ children }: { children: ReactNode }) {
  return <div className='mb-4 text-lg font-semibold'>{children}</div>
}

export function DialogTitle({ children }: { children: ReactNode }) {
  return <h2 className='text-xl font-bold'>{children}</h2>
}

export function DialogDescription({ children }: { children: ReactNode }) {
  return <p className='text-sm text-gray-400'>{children}</p>
}