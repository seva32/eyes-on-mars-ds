// import * as React from "react";
// import Button from "./Button";

// export const ButtonVariant = () => (
//   <>
//     <Button variant="default">Default Button</Button>
//     <div style={{ minHeight: "1rem" }} />
//     <Button variant="primary" type="submit">
//       Primary Button
//     </Button>
//     <div style={{ minHeight: "1rem" }} />
//     <Button variant="secondary" type="button">
//       Secondary Button
//     </Button>
//   </>
// );

// export const ButtonLink = () => (
//   <Button variant="primary" type="link" href="https://example.com">
//     Link Button
//   </Button>
// );

import React from "react";
import Button from "./Button";

export const Primary = () => <Button variant="primary">Primary Button</Button>;
export const Secondary = () => <Button variant="secondary">Secondary Button</Button>;
export const Text = () => <Button variant="text">Text Button</Button>;
export const Outline = () => <Button variant="outline">Outline Button</Button>;
export const Filled = () => <Button variant="filled">Filled Button</Button>;

export const ExtraSmall = () => <Button size="xs">XS Button</Button>;
export const Medium = () => <Button size="md">MD Button</Button>;
export const Large = () => <Button size="lg">LG Button</Button>;

export const Disabled = () => <Button variant="primary" disabled>Disabled Button</Button>;

