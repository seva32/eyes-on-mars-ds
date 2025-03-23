import { FC, ButtonHTMLAttributes } from "react";
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
 * @property {boolean} disabled - Whether the button is disabled.
 * @property {boolean} label - Whether the button is disabled.
 */
interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  variant?: Variant;
  type?: ButtonType;
  href?: string;
  disabled?: boolean;
  label?: string;
  bgColor?: CSSPropertyRule;
}

const Button: FC<ButtonProps> = ({
  variant = "default",
  type = "button",
  href,
  disabled = false,
  children,
  label,
  bgColor,
  ...props
}) => {
  const className = `${styles.button} ${styles[variant]} ${
    disabled ? styles.disabled : ""
  }`;

  if (type === "link" && href) {
    return (
      <a
        href={href}
        className={`${styles.link} ${className || ""}`.trim()}
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

  const parsedType = type === "link" ? "button" : type;

  return (
    <button
      type={parsedType}
      className={`${className || ""}`.trim()}
      disabled={disabled}
      {...props}
    >
      {children || label || ""}
    </button>
  );
};

export default Button;
