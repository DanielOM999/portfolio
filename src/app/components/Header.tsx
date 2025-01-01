import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/src/app/components/ui/button'

interface StartContactProps {
  setIsContact: Dispatch<SetStateAction<boolean>>
  isContact: boolean
  setClickPosition: Dispatch<SetStateAction<{ x: number; y: number }>>
  onHero: () => void
  onSkills: () => void
  onWork: () => void
  onAbout: () => void
}

export default function Header({ setIsContact, isContact, setClickPosition, onHero, onSkills, onWork, onAbout }: StartContactProps) {
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

  const handleContactToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    setClickPosition({ x: event.clientX, y: event.clientY })
    setIsContact(!isContact)
  }

  return (
    <header className='fixed top-0 z-50 w-full'>
      <nav className='container mx-auto px-14 py-5'>
        <div className='flex items-center justify-between'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
            onClick={onHero}
              className='flex items-center gap-2 text-xl font-bold'
            >
              DanielOM999
            </button>
          </motion.div>

          <div className='hidden items-center gap-8 md:flex'>
            <div className='flex gap-6'>
              {['Skills', 'Work', 'About'].map((item, index) => {
                const handleClick = () => {
                  if (item === 'Skills') onSkills();
                  if (item === 'Work') onWork();
                  if (item === 'About') onAbout();
                };

                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <button
                      onClick={handleClick}
                      className='transition-colors hover:text-white/85'
                    >
                      {item}
                    </button>
                  </motion.div>
                );
              })}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                variant='outline'
                className='border-secondary text-secondary hover:bg-primary hover:text-black'
                onClick={handleContactToggle}
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
                  className="absolute right-0 top-full mt-2 w-36 rounded-lg p-4 shadow-lg backdrop-blur-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  ref={menuRef}
                >
                  <div className="flex flex-col gap-4 text-end">
                    {['Skills', 'Work', 'About'].map((item, index) => {
                      const handleClick = () => {
                        if (item === 'Skills') onSkills();
                        if (item === 'Work') onWork();
                        if (item === 'About') onAbout();
                        setIsMenuOpen(false);
                      };

                      return (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <button
                            onClick={handleClick}
                            className="transition-colors hover:text-secondary"
                          >
                            {item}
                          </button>
                        </motion.div>
                      );
                    })}
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