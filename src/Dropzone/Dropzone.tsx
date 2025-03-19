import { useState, DragEvent, MouseEvent, FC } from "react";
import Button from "../Button/Button";

import "./Dropzone.scss";

/**
 * Props for the Dropzone component.
 * @property {function} handleAcceptUpload - Function to handle the acceptance of the uploaded file.
 * @property {function} handleCancelUpload - Function to handle the cancellation of the upload.
 * @property {object} [header] - Optional header object containing title and description.
 * @property {string} [header.title] - Title for the header.
 * @property {string} [header.description] - Description for the header.
 * @property {string} [infoMessage] - Optional info message to display.
 * @property {boolean} [savingImage] - Flag indicating if the image is being saved.
 */
interface EOMDropzoneProps {
  handleAcceptUpload: ({ file }: { file: File | null }) => void;
  handleCancelUpload: () => void;
  header?: { title: string; description?: string };
  infoMessage?: string;
  savingImage?: boolean;
}

/**
 * Props for the handleFile function.
 * @property {File} selectedFile - The selected file to handle.
 */
interface HandleFileProps {
  selectedFile: File;
}

/**
 * Custom DropEvent interface extending DragEvent.
 * @property {DataTransfer} dataTransfer - DataTransfer object containing the files.
 */
interface DropEvent extends DragEvent<HTMLDivElement> {
  dataTransfer: DataTransfer & {
    files: FileList;
  };
}

/**
 * Dropzone component for handling file uploads.
 * @param {EOMDropzoneProps} props - Props for the Dropzone component.
 * @returns {JSX.Element} The rendered Dropzone component.
 */
const Dropzone: FC<EOMDropzoneProps> = ({
  handleAcceptUpload,
  handleCancelUpload,
  header,
  infoMessage,
  savingImage,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * Simulates the upload progress.
   */
  const simulateUpload = () => {
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 10;
      setProgress(progressValue);
      if (progressValue >= 100) clearInterval(interval);
    }, 80);
  };

  /**
   * Handles the selected file.
   * @param {HandleFileProps} param0 - Props containing the selected file.
   */
  const handleFile = ({ selectedFile }: HandleFileProps) => {
    if (selectedFile) {
      const allowedTypes = ["image/png", "image/jpeg"];
      if (!allowedTypes.includes(selectedFile.type)) {
        setError("Only PNG or JPG files are allowed.");
        return;
      }

      const maxSizeMB = 20;
      if (selectedFile.size > maxSizeMB * 1024 * 1024) {
        setError("File size must be smaller than 20MB.");
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result as string;

        img.onload = () => {
          setError(null);
          setFile(selectedFile);
          setPreview(URL.createObjectURL(selectedFile));
          simulateUpload();
        };

        img.onerror = () => {
          setError(
            "The image file is corrupted or cannot be read. Please try a different file."
          );
          setFile(null);
          setPreview(null);
        };
      };

      reader.onerror = () => {
        setError(
          "The image file is corrupted or cannot be read. Please try a different file."
        );
      };
    } else {
      setError(
        "The image file is corrupted or cannot be read. Please try a different file."
      );
    }
  };

  /**
   * Handles the removal of the selected file.
   * @param {MouseEvent} event - The mouse event.
   */
  const handleRemoveFile = (event: MouseEvent) => {
    event.stopPropagation();
    setFile(null);
    setPreview(null);
    setProgress(0);
    setError(null);
    const fileInput = document.getElementById(
      "fileInputBranding"
    ) as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  /**
   * Handles the drop event.
   * @param {DropEvent} event - The drop event.
   */
  const handleDrop = (event: DropEvent) => {
    const selectedFile = event.dataTransfer.files[0];

    if (selectedFile) {
      handleFile({ selectedFile });
    } else {
      setError("An error occurred while processing the file.");
    }
  };

  const dropzoneStyle = error
    ? { border: "1px solid red", backgroundColor: "#f8eeef" }
    : { border: "2px dashed #76b1c0", backgroundColor: "#edf3f5" };

  const Icon = error ? "❌" : "📤";

  const dropzoneText = error ? error : "Drag & drop your image here or";

  return (
    <div className="eom-dropzone-container">
      {header && (
        <div className="eom-dropzone_title">
          <h5 className="eom-dropzone_title-header">{header.title}</h5>
          {header.description && <p>{header.description}</p>}
        </div>
      )}
      {infoMessage && (
        <div className="eom-dropzone_info-wrapper">
          <div className="eom-dropzone_info-banner">
            <span className="eom-dropzone_info-banner-icon">ℹ️</span>
            <p className="eom-dropzone_info-banner-text">{infoMessage}</p>
          </div>
        </div>
      )}
      <div
        className="eom-dropzone_dropzone"
        style={dropzoneStyle}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInputBranding")?.click()}
      >
        <input
          type="file"
          id="fileInputBranding"
          className="eom-dropzone_input"
          onChange={(e) => {
            const selectedFile = e.target?.files?.[0];
            if (selectedFile) {
              handleFile({ selectedFile });
            } else {
              setError("An error occurred while processing the file.");
            }
          }}
        />
        {!file ? (
          <>
            <span style={{ fontSize: "45px" }}>{Icon}</span>
            <div className="eom-dropzone_dropzone-text">
              <span>{dropzoneText}</span>
              <div>
                <span className="eom-dropzone_dropzone-text-bold">
                  {error ? "Select another file" : "choose a file"}
                </span>
              </div>
            </div>
            {!error && (
              <span className="eom-dropzone_dropzone-text-grey">
                PNG or JPG (Max 20 MB)
              </span>
            )}
          </>
        ) : (
          <div className="eom-dropzone_preview">
            <div className="eom-dropzone_preview-wrapper">
              <img
                className="eom-dropzone_preview-image"
                src={preview || undefined}
                alt="preview"
              />
              <div className="eom-dropzone_preview-text">
                <p>{file.name}</p>
                <p>
                  {file.type?.split("/").pop()?.toUpperCase() ?? "UNKNOWN"}{" "}
                  &middot; {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <Button
                type="link"
                onClick={handleRemoveFile}
                className="eom-dropzone_preview-remove"
              >
                ✕
              </Button>
            </div>
            <div className="eom-dropzone_progress">
              <div className="eom-dropzone_progress-background">
                <div
                  className="eom-dropzone_progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              {progress < 100 ? (
                <div className="eom-dropzone_progress-porcentage">
                  {progress}%
                </div>
              ) : (
                <span className="eom-dropzone_progress-icon">✔️</span>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="eom-dropzone_actions">
        <Button
          variant="secondary"
          onClick={handleCancelUpload}
          disabled={savingImage}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => handleAcceptUpload({ file })}
          disabled={savingImage}
        >
          {`Sav${savingImage ? "ing" : "e"} Image ${
            savingImage ? "..." : ""
          }`.trim()}
        </Button>
      </div>
    </div>
  );
};

export default Dropzone;
