interface SwitchProps {
    checked: boolean
    onCheckedChange: (checked: boolean) => void
    className?: string
  }
  
  const Switch = ({ checked, onCheckedChange, className }: SwitchProps) => {
    return (
      <button
        role='switch'
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ease-in-out ${className}`}
      >
        <span
          className={`absolute left-1 top-1 block h-4 w-4 transform rounded-full bg-white transition-all duration-300 ease-in-out ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
        <span
          className={`h-full w-full rounded-full ${checked ? 'bg-white' : 'bg-white/25'}`}
        />
      </button>
    )
  }
  
  export default Switch