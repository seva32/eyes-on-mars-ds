import React from "react";
import Toast from "./Toast";

export const Default = () => (
  <Toast
    show={true}
    onClose={() => console.log("Toast closed")}
    text="This is a default toast message."
  />
);

export const WithLeftButton = () => (
  <Toast
    show={true}
    onClose={() => console.log("Toast closed")}
    text="This is a toast message with a left button."
    leftButtonLabel="Left Button"
    leftButtonOnClick={() => console.log("Left button clicked")}
  />
);

export const WithBgColor = () => (
    <Toast
      show={true}
      bgColor="#f5f5f5"
      onClose={() => console.log("Toast closed")}
      text="This is a toast message with a left button."
      leftButtonLabel="Left Button"
      leftButtonOnClick={() => console.log("Left button clicked")}
    />
  );

export const WithRightButton = () => (
  <Toast
    show={true}
    onClose={() => console.log("Toast closed")}
    text="This is a toast message with a right button."
    rightButtonLabel="Right Button"
    rightButtonOnClick={() => console.log("Right button clicked")}
  />
);

export const WithThirdButton = () => (
  <Toast
    show={true}
    onClose={() => console.log("Toast closed")}
    text="This is a toast message with a third button."
    thirdButtonLabel="Third Button"
    thirdButtonOnClick={() => console.log("Third button clicked")}
  />
);

export const WithAllButtons = () => (
  <Toast
    show={true}
    onClose={() => console.log("Toast closed")}
    text="This is a toast message with all buttons."
    leftButtonLabel="Left Button"
    leftButtonOnClick={() => console.log("Left button clicked")}
    rightButtonLabel="Right Button"
    rightButtonOnClick={() => console.log("Right button clicked")}
    thirdButtonLabel="Third Button"
    thirdButtonOnClick={() => console.log("Third button clicked")}
  />
);

export const WithChildren = () => (
  <Toast
    show={true}
    onClose={() => console.log("Toast closed")}
    text="This is a toast message with children."
  >
    <div style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
      <p>This is a child element inside the toast.</p>
    </div>
  </Toast>
);
