'use client'

import React from 'react'

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/25 ${className}`}
    />
  )
}