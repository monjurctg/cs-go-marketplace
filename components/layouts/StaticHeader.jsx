import React from "react";
import Navbar from "../ui/Navbar";

function StaticHeader() {
  return (
    <div
      className="static_header"
      // style={{ position: "fixed", width: "100%",top:0 }}
    >
      <div className="header_area">
        <Navbar isAuth={true} />
        {/* <div className="container">
          <BottomNav />
        </div> */}
        <hr className="mt-3 mb-5" />
      </div>
    </div>
  );
}

export default StaticHeader;
