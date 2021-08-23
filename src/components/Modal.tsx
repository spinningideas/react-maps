import React from "react";

const Modal: React.FC<{
  title?: string;
  opened: boolean;
  onClose: Function;
  children: any;
}> = ({ title, opened, onClose, children }) => {
  if (opened === false) {
    return null;
  }
  return (
    <div className="modal-container">
      <div className="modal" id="modal">
        {title ? <div className="modal-title">{title}</div> : null}
        <div className="modal-content">{children}</div>
        <div className="modal-actions">
          <button className="modal-toggle-button" onClick={() => onClose()}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
