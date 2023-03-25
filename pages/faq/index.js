import React, {useState} from "react";
import {useEffect} from "react";
import QuesAns from "../../components/faq/QuesAns";
// import InitialTab from "../../Components/faq_tab/InitialTab";
import Breadcrumb from "../../components/layouts/Breadcrumb";
import DotSpinner from "../../components/ui/DotSpinner";
// import FaqSidebar from "../../Components/sidebar/FaqSidebar";
import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";
import faqService from "../../services/faqServices";

function Index() {
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [faqCategory, setFaqCategory] = useState([]);

  const fetchFaq = async () => {
    setLoading(true);
    const res = await faqService.getAllFaq();
    const categoryResponse = await faqService.getAllFaqCategory();
    // console.log(res);

    if (res !== undefined && res.status === 200) {
      setFaqData(res.data.data);
      setLoading(false);
    }
    if (categoryResponse !== undefined && categoryResponse.status === 200) {
      // console.log(categoryResponse, "category");
      setFaqCategory(categoryResponse.data.data ?? []);
    }
  };
  // console.log(faqCategory, "faqCategory");

  let ansAndQuestion = <DotSpinner />;

  let faqCategoryData = (
    <div className="filter">
      <a
        href="#"
        className="d-flex justify-content-between align-items-center fq_ac">
        Loading ..
        <span>{/* <i className="fa-solid fa-chevron-right"></i> */}</span>
      </a>
    </div>
  );

  if (faqCategory.length > 0) {
    faqCategoryData = faqCategory.map((faqCat, index) => (
      <div key={index} className="filter">
        <a
          href="#"
          className="d-flex justify-content-between align-items-center ">
          {faqCat?.name}
          <span>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </a>
      </div>
    ));

    if (faqData.length > 0) {
      ansAndQuestion = faqData.map((faq, index) => (
        <QuesAns key={index} data={faq} />
      ));
    } else {
      ansAndQuestion = <h4>No Data Found</h4>;
    }
  } else {
    faqCategoryData = <p>No Data Found</p>;
    ansAndQuestion = <h4>No Data Found</h4>;
  }

  // console.log(faqCategory, "daata");
  useEffect(() => {
    fetchFaq();
  }, []);
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
                <Breadcrumb name={"Frequently Asked Questions"} />
              </div>
              <div className="col-lg-3 col-12">
                <div className="mr__filter mb-4 mb-lg-0">{faqCategoryData}</div>
              </div>
              <div className="col-xl-9">
                {/* <InitialTab activeComponent={activeComponent} /> */}
                {/* <div> */}
                {/* <h3 className="mb-4">General</h3> */}
                <div className="general__accor">
                  <div className="general__accor">{ansAndQuestion}</div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer page={"faq"} />
    </>
  );
}

export default Index;
