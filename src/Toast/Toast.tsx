import React, { ReactNode } from "react";
import classNameDefaults from "../utils/classNameDefaults";
import Button from "../Button/Button";

import "./Toast.scss";

export interface Props {
  className?: string;
  show?: boolean;
  onClose: () => void;
  text: ReactNode;
  leftButtonLabel?: string;
  leftButtonOnClick?: (e: React.MouseEvent<HTMLElement>) => void;
  leftButtonDisabled?: boolean;
  rightButtonLabel?: string;
  rightButtonOnClick?: (e: React.MouseEvent<HTMLElement>) => void;
  rightButtonDisabled?: boolean;
  thirdButtonLabel?: string;
  thirdButtonOnClick?: (e: React.MouseEvent<HTMLElement>) => void;
  thirdButtonDisabled?: boolean;
  children?: ReactNode;
  bgColor?: string;
}

/**
 * Toast component.
 *
 * @param {string} className Additional class name.
 * @param {boolean} show If true, shows the Toast otherwise hides.
 * @param {ReactNode} text String or React component, the text of the Toast.
 * @param {() => void} onClose Function for the Close icon onClick handler.
 * @param {string} leftButtonLabel Label of the left button. If it is undefined then the secondary button will not be rendered.
 * @param {boolean} leftButtonDisabled Disables left button
 * @param {() => void} leftButtonOnClick Left button click handler function.
 * @param {string} rightButtonLabel Label of the right button. If it is undefined then the secondary button will not be rendered.
 * @param {boolean} rightButtonDisabled Disables right button
 * @param {() => void} rightButtonOnClick Right button click handler function.
 * @param {string} thirdButtonLabel Label of the third button. If it is undefined then the secondary button will not be rendered.
 * @param {boolean} thirdButtonDisabled Disables third button
 * @param {() => void} thirdButtonOnClick third button click handler function.
 * @param {string} bgColor bg color
 * @param {ReactNode} children
 */

const Toast = ({
  className,
  show,
  onClose,
  text,
  leftButtonLabel,
  leftButtonOnClick,
  leftButtonDisabled,
  rightButtonLabel,
  rightButtonOnClick,
  rightButtonDisabled,
  thirdButtonLabel,
  thirdButtonOnClick,
  thirdButtonDisabled,
  children,
  bgColor = "#fff",
}: Props): React.ReactElement => {
  const toastClasses = `eom-toast ${classNameDefaults([
    [show, "show"],
    [!!children, "with-children"],
    [!!className, className as string],
  ])}`.trim();

  return (
    <div id="toast" className={toastClasses} role="alert" style={{ backgroundColor: bgColor }}>
      <div className="eom-toast-text-container">
        <div className="eom-toast-close-button-container">
          <button
            className="eom-toast-close-button"
            type="button"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <span
          className="eom-toast-text"
          style={{ paddingRight: !!children ? "5px" : "20px" }}
        >
          {text}
        </span>
      </div>
      {children ? (
        <div style={{ flexGrow: 1 }}>{children}</div>
      ) : (
        <div className="eom-toast-buttons">
          {thirdButtonLabel && (
            <Button
              variant="primary"
              label={thirdButtonLabel}
              onClick={thirdButtonOnClick}
              disabled={thirdButtonDisabled}
            />
          )}
          {leftButtonLabel && (
            <Button
              variant="primary"
              label={leftButtonLabel}
              onClick={leftButtonOnClick}
              disabled={leftButtonDisabled}
            />
          )}
          {rightButtonLabel && (
            <Button
              variant="primary"
              label={rightButtonLabel}
              onClick={rightButtonOnClick}
              disabled={rightButtonDisabled}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Toast;
