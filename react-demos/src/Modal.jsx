import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          margin: "100px auto",
          width: "300px",
        }}
      >
        {children}
      </div>
    </div>,
    document.getElementById("portal-root"),
  );
}

export default Modal;
