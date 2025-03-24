import React, { useState } from "react";
import InputField from "./Input";
import type { Meta } from "@ladle/react";

export default {
  title: "Form/Input",
} satisfies Meta;

export const Default = () => {
  const [value, setValue] = useState("");
  return (
    <InputField
      id="default"
      label="Default Input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Required = () => {
  const [value, setValue] = useState("");
  return (
    <InputField
      id="required"
      label="Required Input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required
    />
  );
};

export const WithPlaceholder = () => {
  const [value, setValue] = useState("");
  return (
    <InputField
      id="placeholder"
      label="With Placeholder"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter text..."
    />
  );
};

export const PasswordInput = () => {
  const [value, setValue] = useState("");
  return (
    <InputField
      id="password"
      label="Password Input"
      type="password"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
