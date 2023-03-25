import React from "react";
import {useState} from "react";
import Breadcrumb from "../../components/layouts/Breadcrumb";
import General from "../../components/settings/General";
import Profile from "../../components/settings/Profile";
import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";

const Index = () => {
  const [activeComponet, setActiveComponent] = useState("profile");
  return (
    <>
      <div className="header_area">
        <Navbar isAuth={true} />
        <hr className="mt-3 mb-5" />
      </div>
      <main className="pb-5">
        <section className="market section_center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 section__title">
                <Breadcrumb name={"Account Settings"} />
              </div>
              <div className="col-xl-12 mb-5">
                <div className="setting__title">
                  <a onClick={() => setActiveComponent("profile")}>
                    <i className="fa-regular fa-user"></i> Profile
                  </a>
                  <a onClick={() => setActiveComponent("general")}>
                    <i className="fa-solid fa-gear"></i> General
                  </a>
                </div>
              </div>
              {activeComponet === "profile" ? <Profile /> : <General />}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;
