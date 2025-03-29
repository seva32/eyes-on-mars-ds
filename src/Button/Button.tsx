import React from "react";
import "./Button.scss";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "text" | "outline" | "filled";
type ButtonSize = "xs" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Determines the visual style of the button */
  variant?: ButtonVariant;
  /** Defines the size of the button */
  size?: ButtonSize;
};

/**
 * Reusable Button component with multiple variants and sizes.
 */
const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  return (
    <button
      className={`eom-button ${variant} ${size} ${className || ""}`.trim()}
      {...props}
    />
  );
};

export default Button;
