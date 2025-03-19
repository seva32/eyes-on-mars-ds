import React from "react";
import Dropzone from "./Dropzone";

export const Default = () => (
  <Dropzone
    handleAcceptUpload={({ file }) => console.log("Accepted file:", file)}
    handleCancelUpload={() => console.log("Upload cancelled")}
  />
);

export const SavingImage = () => (
  <Dropzone
    handleAcceptUpload={({ file }) => console.log("Accepted file:", file)}
    handleCancelUpload={() => console.log("Upload cancelled")}
    savingImage={true}
  />
);

export const WithCustomHeader = () => (
  <Dropzone
    handleAcceptUpload={({ file }) => console.log("Accepted file:", file)}
    handleCancelUpload={() => console.log("Upload cancelled")}
    header={{
      title: "Custom Header",
      description: "This is a custom header description",
    }}
    infoMessage="Only PNG or JPG files are allowed. Max size: 20MB."
  />
);
