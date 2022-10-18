import React from 'react'

export interface ButtonProps {
  variant?: "filled" | "outline" | "naked"
  theme?: "primary" | "destroy" | "alert"
  size?: "lg" | "md" | "sm" | "xs"
  label: string
  disabled: boolean
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({
  size = 'lg',
  label = "",
  theme = "primary",
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
      return "filled-btn"
    }
  }
  return (
    <button
      type="button"
      className={[
        "btn",
        `${size}-btn`,
        `${getVariantClass()}`,
        `${theme}-btn`,
      ].join(" ")}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};