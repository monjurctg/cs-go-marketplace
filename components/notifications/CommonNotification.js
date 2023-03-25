import React from "react";

function CommonNotification({title, children}) {
  return (
    <div className="gene__box mb-4">
      <div className="gene__title border border-0 p-0">
        <span>{title}</span>
        {children}
        {/* <span
          style={{color: "#FFC700", cursor: "pointer"}}
          className="fs-6 m-0">
          <i className="fa-solid fa-xmark"></i> Clear
        </span> */}
      </div>
    </div>
  );
}

export default CommonNotification;
