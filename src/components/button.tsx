import type { ReactNode } from "react";

interface ButtonProps {
  children?: string
  icon?: ReactNode
  variant?: "primary" | "secondary" | "cta" | "dark"
  size?: "sm" | "md"
  className?: string
}

const variantClasses = {
  primary: 'bg-white text-dark hover:bg-[#F1F3F6]',
  secondary: 'border border-white text-white hover:bg-white/15',
  cta: 'bg-primary text-white hover:bg-[#E9512B]',
  dark: 'bg-dark text-white hover:bg-[#263244]',
}

const Button = ({ children = "..", icon, variant = 'primary', size='md', className }: ButtonProps) => (
  <button className={
    `rounded-full cursor-pointer flex justify-center items-center gap-3.75 text-[16px] transition-colors duration-200 ease-out
    ${variantClasses[variant]}
    ${size === 'md' && 'px-10 py-5'}
    ${size === 'sm' && 'px-8.25 py-2.5'}
    ${className ?? ''}
    `
  }>
    {icon}
    {children}
  </button>
)

export default Button;
