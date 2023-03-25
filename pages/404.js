import Image from "next/image";
import React from "react";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import notFound from "../public/img/404.png";
function FourOFour() {
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
              <div className="col-xl-12">
                <div className="add404 d-flex justify-content-center align-items-center flex-column">
                  <div className="404_img">
                    <Image src={notFound} alt="" />
                  </div>
                  <h3 className="mb-4">We couldn’t find this page</h3>
                  <p className="text-center mb-5">
                    Either something went wrong or the page
                    <br /> doesn’t exist anymore
                  </p>
                  <button className="btn">Check out the Market</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default FourOFour;
