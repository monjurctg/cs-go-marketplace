import React from "react";

function Breadcrumb({name, title}) {
  return (
    <>
      <nav
        //   style="--bs-breadcrumb-divider: '.';"
        aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {name}
          </li>
        </ol>
      </nav>
      {/* <h1>{title ?? name}</h1> */}
    </>
  );
}

export default Breadcrumb;
