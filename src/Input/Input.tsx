import React, { ChangeEvent } from "react";

import "./Input.scss";

/**
 * Props for the InputField component.
 */
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The id of the input field */
  id: string;
  /** The label for the input field */
  label: string;
  /** The function to call when the input value changes */
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * A reusable input field component.
 *
 * @param {InputFieldProps} props - The props for the component.
 * @returns {JSX.Element} The rendered input field component.
 */
const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  ...props
}) => (
  <div className="eom-input">
    <label htmlFor={id} className="eom-input_label">
      {label} {required && <span className="eom-input_label-required">*</span>}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="eom-input_input"
      autoComplete={id}
      aria-required={required}
      {...props}
    />
  </div>
);

export default InputField;