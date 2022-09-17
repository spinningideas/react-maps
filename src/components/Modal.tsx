import React from "react";

const Modal = ({
  title,
  width = 500,
  opened,
  onClose,
  children,
}: {
  title?: string;
  width?: number;
  opened: boolean;
  onClose: Function;
  children: any;
}) => {
  if (opened === false) {
    return null;
  }
  return (
    <div className="modal-container">
      <div className="modal" id="modal" style={{ maxWidth: width }}>
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
