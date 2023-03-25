import React from "react";
import {useSelector} from "react-redux";
import FilterSlider from "../FilterSlider";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import SiderBar from "../ui/SiderBar";

function InventoryLayout({children, fname}) {
  const mobileBar = useSelector((state) => state.staticBar.mobileBar);
  return (
    <>
      <div className="header_area">
        <Navbar isAuth={true} />
        <hr className="mt-3 mb-5" />
      </div>
      <main
        className={
          mobileBar ? "pb-5 container-lg d-none" : "pb-5 container-lg"
        }>
        <section
          className="market "
          // style={{width: "85%", margin: "0 auto"}}
        >
          <div className="">
            <div className="row">
              <div className="col-md-4 col-lg-3 d-sm-none d-md-none d-lg-block">
                <SiderBar />
              </div>
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer page={fname} />
      <FilterSlider />
    </>
  );
}

export default InventoryLayout;
