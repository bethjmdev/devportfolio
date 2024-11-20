import React from "react";

function PurpleButton({ children, padding, fontSize }) {
  return (
    <div
      style={{
        background: "#7843E9",
        color: "#fff",
        textTransform: "uppercase",
        letterSpacing: "1px",
        display: "inline-block",
        fontWeight: "700",
        borderRadius: "5px",
        boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.15)",
        transition: "transform .3s",
        padding: padding,
        fontSize: fontSize,
      }}
    >
      <p>{children}</p>
    </div>
  );
}

export default PurpleButton;
