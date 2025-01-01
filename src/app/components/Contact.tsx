'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Loader2,
  Check
} from 'lucide-react'
import Button from '@/src/app/components/ui/button'
import { Input } from '@/src/app/components/ui/input'
import { Label } from '@/src/app/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/src/app/components/ui/dialog'
// import { sendEmail } from '@/src/app/components/actions/sendEmail'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  clickPosition?: { x: number; y: number }
}

export default function Contact({
  isOpen,
  onClose,
  clickPosition = { x: 0, y: 0 }
}: ContactModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!name || !email || !message) {
      alert('Please fill in all fields')
      return
    }
    setIsLoading(true)

    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('message', message)

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();
      setIsLoading(false);
      setIsSuccess(result.success);
    } catch (error) {
      console.error('Failed to send email:', error);
      setIsLoading(false);
      alert('Failed to send message. Please try again.');
    }
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        onClose()
      }}
    >
      <DialogContent className='w-full text-white md:w-3/5 lg:w-2/4 xl:w-1/4'>
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            I&apos;d love to hear from you! Fill out the form below to get in touch.
          </DialogDescription>
        </DialogHeader>
        <motion.div
          initial={{
            scale: 0,
            x: clickPosition.x - window.innerWidth / 2.5,
            y: clickPosition.y - window.innerHeight / 2
          }}
          animate={{ scale: 1, x: 0, y: 0 }}
          exit={{ scale: 0, x: clickPosition.x, y: clickPosition.y }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='space-y-6'
        >
          <AnimatePresence mode='wait'>
            {isLoading ? (
              <motion.div
                key='loading'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='flex flex-col items-center justify-center space-y-4'
              >
                <Loader2 className='h-12 w-12 animate-spin text-secondary' />
                <p className='text-lg font-semibold'>Sending your message...</p>
              </motion.div>
            ) : isSuccess ? (
              <motion.div
                key='success'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='flex flex-col items-center justify-center space-y-4'
              >
                <div className='rounded-full bg-green-500 p-2'>
                  <Check className='h-8 w-8 text-white' />
                </div>
                <p className='text-lg font-semibold'>
                  Your message was sent successfully!
                </p>
                <Button
                  onClick={() => {
                    onClose()
                    setIsSuccess(false) // Reset success state
                    setName('')
                    setEmail('')
                    setMessage('')
                  }}
                  className='mt-4'
                >
                  Close
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key='form'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className='space-y-4'>
                  <div>
                    <Label htmlFor='name'>Your Name</Label>
                    <Input
                      id='name'
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder='Enter your name'
                    />
                  </div>
                  <div>
                    <Label htmlFor='email'>Your Email</Label>
                    <Input
                      id='email'
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Enter your email'
                    />
                  </div>
                  <div>
                    <Label htmlFor='message'>Your Message</Label>
                    <textarea
                      id='message'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder='Enter your message'
                      rows={4}
                      className='w-full rounded-md border border-secondary-active bg-black/50 p-3 text-white'
                    />
                  </div>
                </div>

                <div className='flex justify-end space-x-2 mt-4'>
                  <Button variant='outline' onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    className='bg-secondary text-black hover:bg-secondary-dark'
                  >
                    Send Message
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}