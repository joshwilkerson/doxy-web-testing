import React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "filled" | "outline" | "naked"
  size: "lg" | "md" | "sm" | "xs"
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  ...props
}) => {
  const classNames = `btn btn-${variant} btn-${size}`;
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};
