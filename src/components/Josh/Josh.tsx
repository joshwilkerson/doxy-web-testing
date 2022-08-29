import React from "react"

export interface JoshProps extends React.HTMLAttributes<HTMLButtonElement> {
  className: string
  disabled: boolean
  label: string
  onClick(): void
  theme: string
  variant: "filled" | "outline" | "naked"
  size: "lg" | "md" | "sm" | "xs"
}

export const Josh: React.FunctionComponent<JoshProps> = ({
  className = "", 
  disabled, 
  label, 
  onClick, 
  size, 
  variant, 
  theme 
}) => {
  
  const getButtonClasses = () => {
    const buttonClasses = [`btn ${className}`]

    if (size) {
      buttonClasses.push(`${size}-btn`)
    }

    if (theme) {
      buttonClasses.push(`${theme}-btn`)
    }

    if (variant) {
      buttonClasses.push(`${variant}-btn`)
    }

    return buttonClasses.join(" ")
  }
  
  const buttonClassNames =  getButtonClasses()

  return (
    <button className={buttonClassNames} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
}
