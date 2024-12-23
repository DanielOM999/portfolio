'use client'

import React from 'react'

export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ className, children, ...props }) => {
  return (
    <label
      {...props}
      className={`block text-sm font-semibold text-white ${className}`}
    >
      {children}
    </label>
  )
}