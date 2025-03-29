import React, { FC, ButtonHTMLAttributes } from "react";

import "./IconButton.scss";

interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  icon: React.ReactNode;
  className?: string;
  shape?: "rounded" | "squared";
  bgColor?: string;
  textColor?: string;
}

const IconButton: FC<IconButtonProps> = ({
  onClick,
  icon,
  className = "",
  shape = "squared",
  bgColor = "transparent",
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`eom-icon-button ${
        shape === "rounded" ? "rounded" : "squared"
      } ${className}`}
      style={{
        backgroundColor: bgColor,
      }}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;
