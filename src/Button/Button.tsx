import React from "react";
import styles from "./Button.module.scss";

/**
 * Button variants.
 */
type Variant = "default" | "primary" | "secondary";

/**
 * Button types.
 */
type ButtonType = "submit" | "button" | "link";

/**
 * Button component props.
 * @property {Variant} variant - The variant of the button. Can be 'default', 'primary', or 'secondary'.
 * @property {ButtonType} type - The type of the button. Can be 'submit', 'button', or 'link'.
 * @property {string} href - The URL to navigate to when the button is of type 'link'.
 */
interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  variant?: Variant;
  type?: ButtonType;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  type = "button",
  href,
  children,
  ...props
}) => {
  const className = `${styles.button} ${styles[variant]}`;

  if (type === "link" && href) {
    return (
      <a href={href} className={`${styles.link} ${className || ""}`.trim()}>
        {children}
      </a>
    );
  }

  const parsedType = type === "link" ? "button" : type;

  return (
    <button
      type={parsedType}
      className={`${className || ""}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
