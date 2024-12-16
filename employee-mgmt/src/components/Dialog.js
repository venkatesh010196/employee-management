import React from "react";
import "./Dialog.css";

const Dialog = ({ isVisible, children, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
      <button
          className="dialog-close"
          onClick={() => {
            console.log("Close button clicked");
            onClose();
          }}
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
