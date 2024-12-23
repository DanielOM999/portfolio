'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface SliderProps {
  value: number[]
  onValueChange: (value: number[]) => void
  max?: number
  step?: number
  className?: string
}

export default function Slider({
  value,
  onValueChange,
  max = 100,
  step = 1,
  className
}: SliderProps) {
  const [internalValue, setInternalValue] = useState(value[0])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10)
    setInternalValue(newValue)
    onValueChange([newValue])
  }

  return (
    <div className={`relative ${className}`}>
      <motion.input
        type='range'
        min='0'
        max={max}
        step={step}
        value={internalValue}
        onChange={handleChange}
        className='slider'
      />
    </div>
  )
}