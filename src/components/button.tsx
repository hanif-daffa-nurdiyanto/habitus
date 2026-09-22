import type { ReactNode } from "react";

interface ButtonProps {
  children?: string
  icon?: ReactNode
  variant?: "primary" | "secondary" | "cta" | "dark"
  size?: "sm" | "md"
  className?: string
}

const Button = ({ children = "..", icon, variant = 'primary', size='md', className }: ButtonProps) => (
  <button className={
    `rounded-full  cursor-pointer flex justify-center items-center gap-3.75 text-[16px]
    ${variant === 'primary' && 'bg-white text-dark '}
    ${variant === 'dark' && 'bg-dark text-white'}
    ${variant === 'cta' && 'bg-primary text-white '}
    ${variant === 'secondary' && 'border border-white text-white '}
    ${size === 'md' && 'px-10 py-5'}
    ${size === 'sm' && 'px-8.25 py-2.5'}
    ${className}
    `
  }>
    {icon}
    {children}
  </button>
)

export default Button;