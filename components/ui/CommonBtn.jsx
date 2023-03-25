import React from "react";

function CommonBtn({children, onClick, className, width, style}) {
  return (
    <div
      className={`cmn-Btn ${className}`}
      style={{
        width: `${width}px`,
        ...style,
      }}
      onClick={onClick}>
      {children}
    </div>
  );
}

export default CommonBtn;
