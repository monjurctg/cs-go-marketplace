import React from "react";

function Text({children, fw, fs, color}) {
  return (
    <p
      style={{fontWeight: fw, fontSize: `${fs}px`, color: color}}
      className="p">
      {children}
    </p>
  );
}

export default Text;
