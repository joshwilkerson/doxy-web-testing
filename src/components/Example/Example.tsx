import React from 'react'

export interface ExampleProps {
  variant?: 'filled' | "outline" | "naked"
  /**
   * How large should the button be?
   */
  size?: 'lg' | 'md' | 'sm' | 'xs'
  label: string
  disabled: boolean
  onClick: () => void
}

/**
 * Primary UI component for user interaction
*/
export const Example: React.FC<ExampleProps> = ({
  size = 'lg',
  label = "",
  variant = 'filled',
  disabled = false,
  ...props
}) => {
  return (
    <button
      type="button"
      className={['btn', `${size}-btn`, `${variant}-btn`].join(' ')}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};