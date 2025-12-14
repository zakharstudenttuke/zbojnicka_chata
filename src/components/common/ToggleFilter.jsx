import React from "react";


export const ToggleFilter = ({ label, icon, active = false, onClick }) => {
  const [hovered, setHovered] = React.useState(false);

  const background = active
    ? "#80CED7"
    : hovered
    ? "#9AD1D4"
    : "#CCDBDC";

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background,
        borderRadius: 6,
        border: "none",
        cursor: "pointer",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        height: 55,
        width: "100%",
        transition: "background 0.2s ease",
      }}
    >
      {icon && <img src={icon} alt="" style={{ width: 20, height: 20 }} />}
      <span
        style={{
          fontFamily: "Montserrat",
          fontSize: 14,
          fontWeight: 700,
        }}
      >
        {label}
      </span>
    </button>
  );
};