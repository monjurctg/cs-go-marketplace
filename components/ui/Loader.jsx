import React from "react";

function Loader() {
  return (
    <>
      <div
        style={{
          border: "1px solid #adb5bd42",
          height: 200,
          width: "50%",
          textAlign: "center",
          margin: "100px auto",
          padding: "20px",
        }}>
        <h5>Loading....</h5>
        <div className="text-center" style={{marginTop: "60px"}}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;
