import * as React from "react";
import Button from "./Button";

export const ButtonVariant = () => (
  <>
    <Button variant="default">Default Button</Button>
    <div style={{ minHeigth: "1rem" }} />
    <Button variant="primary" type="submit">
      Primary Button
    </Button>
    <div style={{ minHeigth: "1rem" }} />
    <Button variant="secondary" type="button">
      Secondary Button
    </Button>
  </>
);

export const ButtonLink = () => (
  <Button variant="primary" type="link" href="https://example.com">
    Link Button
  </Button>
);
