import React, {useState} from "react";
import Breadcrumb from "../../components/layouts/Breadcrumb";
import Staticlayout from "../../components/layouts/Staticlayout";
import StaticsBars from "../../components/layouts/StaticsBars";
import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";

function Index() {
  const [barValues, setBarValues] = useState([
    "Introduction",
    "Service Provided by Us",
    "Age and eligibility",
    "Property Rights",
    " Customer Support",
    "Problems and Disputes",
  ]);
  const [dropShow, setDropShow] = useState(false);
  const [activeDrop, setActiveDrop] = useState("Introduction");
  return (
    <Staticlayout>
      <section className="market ">
        <div className="container-lg">
          <div className="row">
            <div className="col-xl-12 section__title">
              <Breadcrumb name={"Terms of Service"} />
            </div>
            <div className="col-lg-3 d-none d-md-block col-md-5">
              <StaticsBars arrays={barValues} />
            </div>
            <div
              className="d-block  d-md-none  "
              style={{
                border: "1px solid #2C1F59",
                height: "60px",
                padding: "20px ",
                borderRadius: "6px",
                cursor: "pointer",
              }}>
              <div
                className="d-flex justify-content-between"
                onClick={() => setDropShow(!dropShow)}>
                <a href="">{activeDrop}</a>
                <span>
                  <i className={`fa-solid fa-chevron-right`}></i>
                </span>
              </div>
              <div
                className={`drop_items  ${
                  dropShow ? "drop-item-show" : "drop-item-hide"
                }`}>
                {barValues.map((bar, index) => (
                  <>
                    <li
                      className={`drop-item  ${
                        activeDrop === bar ? "fq_ac" : ""
                      }`}
                      key={index}
                      onClick={() => {
                        setActiveDrop(bar);
                        setDropShow(false);
                      }}>
                      {bar}
                    </li>
                  </>
                ))}
              </div>
            </div>

            <div className="col-lg-9 col-md-7  policy">
              <h3 className="mb-4">{barValues[0]}</h3>
              <p className="mb-5">
                Please read these Terms of Use (these `&quot;`Terms) carefully
                as they govern your use of (which includes access to)
                Spotify`&#39;`s personalized services for streaming music and
                other content, including all of our websites and software
                applications that incorporate or link to these Terms
                (collectively, the `&quot;`Spotify Service) and any music,
                videos, podcasts, or other material that is made available
                through the Spotify Service (the `&quot;`Content).
                <br />
                <br />
                Use of the Spotify Service may be subject to additional terms
                and conditions presented by Spotify, which are hereby
                incorporated by this reference into these Terms.
                <br />
                <br />
                By signing up for, or otherwise using, the Spotify Service, you
                agree to these Terms. If you do not agree to these Terms, then
                you must not use the Spotify Service or access any Content.
                <br />
                <br />
                Service Provider
                <br />
                These Terms are between you and Spotify AB, Regeringsgatan 19,
                111 53, Stockholm, Sweden.
                <br />
                <br />
                Age and eligibility requirements
                <br />
                In order to use the Spotify Service and access any Content, you
                need to (1) be 13 years of age (or the equivalent minimum age in
                your home country) or older, (2) have parent or guardian consent
                if you are a minor in your home country; (3) have the power to
                enter a binding contract with us and not be barred from doing so
                under any applicable laws, and (4) reside in a country where the
                Service is available. You also promise that any registration
                information that you submit to Spotify is true, accurate, and
                complete, and you agree to keep it that way at all times If you
                are a minor in your home country, your parent or guardian will
                need to enter into these Terms on your behalf. You can find
                additional information regarding minimum age requirements in the
                registration process. If you do not meet the minimum age
                requirements then Spotify will be unable to register you as a
                user.
              </p>
              <h3 className="mb-4">{barValues[1]}</h3>
              <p>
                Please read these Terms of Use (these `&quot;`Terms) carefully
                as they govern your use of (which includes access to)
                Spotify`&#39;`s personalized services for streaming music and
                other content, including all of our websites and software
                applications that incorporate or link to these Terms
                (collectively, the `&quot;`Spotify Service) and any music,
                videos, podcasts, or other material that is made available
                through the Spotify Service (the `&quot;`Content).
                <br />
                <br />
                Use of the Spotify Service may be subject to additional terms
                and conditions presented by Spotify, which are hereby
                incorporated by this reference into these Terms.
                <br />
                <br />
                By signing up for, or otherwise using, the Spotify Service, you
                agree to these Terms. If you do not agree to these Terms, then
                you must not use the Spotify Service or access any Content.
                <br />
                <br />
                Service Provider
                <br />
                These Terms are between you and Spotify AB, Regeringsgatan 19,
                111 53, Stockholm, Sweden.
                <br />
                <br />
              </p>
              <h3 className="mb-4">{barValues[2]}</h3>
              <p>
                In order to use the Spotify Service and access any Content, you
                need to (1) be 13 years of age (or the equivalent minimum age in
                your home country) or older, (2) have parent or guardian consent
                if you are a minor in your home country; (3) have the power to
                enter a binding contract with us and not be barred from doing so
                under any applicable laws, and (4) reside in a country where the
                Service is available. You also promise that any registration
                information that you submit to Spotify is true, accurate, and
                complete, and you agree to keep it that way at all times If you
                are a minor in your home country, your parent or guardian will
                need to enter into these Terms on your behalf. You can find
                additional information regarding minimum age requirements in the
                registration process. If you do not meet the minimum age
                requirements then Spotify will be unable to register you as a
                user.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Staticlayout>
  );
}

export default Index;
