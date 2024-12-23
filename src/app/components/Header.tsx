import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/src/app/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className='fixed top-0 z-50 w-full'>
      <nav className='container mx-auto px-14 py-5'>
        <div className='flex items-center justify-between'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href='/'
              className='flex items-center gap-2 text-xl font-bold'
            >
              DanielOM999
            </Link>
          </motion.div>

          <div className='hidden items-center gap-8 md:flex'>
            <div className='flex gap-6'>
              {['Skills', 'Work'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className='transition-colors hover:text-white/85'
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                variant='outline'
                className='border-secondary text-secondary hover:bg-primary hover:text-black'
              >
                Contact
              </Button>
            </motion.div>
          </div>

          <div className='relative md:hidden'>
            <motion.button
              className='text-white'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </motion.button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className='absolute right-0 top-full mt-2 w-36 rounded-md p-4 shadow-lg backdrop-blur-md'
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  ref={menuRef}
                >
                  <div className='flex flex-col gap-4 text-end'>
                    {['Home', 'About', 'Pricing', 'Contact'].map(
                      (item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link
                            href={
                              item === 'Home' ? '/' : `/${item.toLowerCase()}`
                            }
                            className='transition-colors hover:text-secondary'
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item}
                          </Link>
                        </motion.div>
                      )
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  )
}