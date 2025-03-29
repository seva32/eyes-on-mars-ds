import React from "react";
import IconButton from "./IconButton";

export const Rounded = () => (
  <IconButton
    onClick={() => alert("Rounded Button Clicked!")}
    icon={<div style={{ fontSize: "2rem" }}>🗑️</div>}
    shape="rounded"
    bgColor="blue"
  />
);

export const Squared = () => (
  <IconButton
    onClick={() => alert("Squared Button Clicked!")}
    icon={<div style={{ fontSize: "3rem" }}>🗑️</div>}
    shape="squared"
  />
);

export const BgColor = () => (
  <IconButton
    onClick={() => alert("Squared Button Clicked!")}
    icon={<div style={{ fontSize: "3rem" }}>🗑️</div>}
    shape="squared"
    bgColor="red"
  />
);
