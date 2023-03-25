import React from "react";
import Footer from "../ui/Footer";
import StaticHeader from "./StaticHeader";
import {AiOutlineArrowUp} from "react-icons/ai";
function Staticlayout({children}) {
  return (
    <>
      <StaticHeader />
      <div className="row">
        <div className="col-xl-12"></div>
      </div>
      <main
        style={{
          padding: "8px",
          // marginTop: "125px",
          minHeight: "calc(100vh - 64px)",
        }}>
        {children}
      </main>
      <div
        onClick={() => window.scrollTo(0, 0)}
        style={{
          position: "fixed",
          background: "#ffc107",
          right: 0,
          bottom: "10%",
          right: 10,
          fontWeight: 600,
          borderRadius: 5,
          padding: "2px 9px",
          fontSize: 20,
          width: 35,
          cursor: "pointer",
        }}>
        <AiOutlineArrowUp />
      </div>
      <Footer />
    </>
  );
}

export default Staticlayout;
