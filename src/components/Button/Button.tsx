import React from "react"

export interface ButtonProps {
  variant?: "filled" | "outline" | "naked"
  /**
   * How large should the button be?
   */
  size?: "lg" | "md" | "sm" | "xs"
  label: string
  disabled: boolean
  onClick: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  size = "lg",
  label = "",
  variant = "filled",
  disabled = false,
  ...props
}) => {
  const getVariantClass = () => {
    if (variant == "naked") {
      return "naked-btn"
    } else if (variant == "outline") {
      return "secondary-btn"
    } else {
      return "primary-btn"
    }
  }
  return (
    <button
      type="button"
      className={["btn", `${size}-btn`, `${getVariantClass()}`].join(" ")}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  )
}
