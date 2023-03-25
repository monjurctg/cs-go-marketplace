import React from "react";

let questionsAndAns = [
  {
    question: "What currency are the amounts in?",
    ans: `Skins Dojo charges a maximum sale fee of 5% per sale from the sale
    amount to the seller &apos s account &apos s balance. This fee
    decreases as your sale volume increases .
  
    Higher tier accounts have lower fees. See Fee Schedule.`,
  },
];

function General() {
  return (
    <div>
      <h3 className="mb-4">General</h3>
      <div className="general__accor">
        <div className="general__accor">
          <div className="g_accorItem">
            <h2>
              <i className="fa-solid fa-bars"></i> What currency are the amounts in?
            </h2>
            <div className="gAccorContent">
              <p>
                Skins Dojo charges a maximum sale fee of 5% per sale from the
                sale amount to the seller `&apos;` s account `&apos;`s balance.
                This fee decreases as your sale volume increases.
                <br />
                <br />
                Higher tier accounts have lower fees. See Fee Schedule.
              </p>
            </div>
          </div>
          <div className="g_accorItem">
            <h2>
              <i className="fa-solid fa-bars"></i> How much fee do you charge?
            </h2>
            <div className="gAccorContent d-block">
              <p>
                Skins Dojo charges a maximum sale fee of 5% per sale from the
                sale amount to the seller`&apos;`s account`&apos;`s balance.
                This fee decreases as your sale volume increases.
                <br />
                <br />
                Higher tier accounts have lower fees. See Fee Schedule.
              </p>
            </div>
          </div>
          <div className="g_accorItem">
            <h2>
              <i className="fa-solid fa-bars"></i> What is your API key and why do
              we need it?
            </h2>
            <div className="gAccorContent">
              <p>
                Skins Dojo charges a maximum sale fee of 5% per sale from the
                sale amount to the seller`&apos;`s account`&apos;`s balance.
                This fee decreases as your sale volume increases.
                <br />
                <br />
                Higher tier accounts have lower fees. See Fee Schedule.
              </p>
            </div>
          </div>
          <div className="g_accorItem">
            <h2>
              <i className="fa-solid fa-bars"></i> Why is my name different from my
              Steam account?
            </h2>
            <div className="gAccorContent">
              <p>
                Skins Dojo charges a maximum sale fee of 5% per sale from the
                sale amount to the seller`&apos;`s account`&apos;`s balance.
                This fee decreases as your sale volume increases.
                <br />
                <br />
                Higher tier accounts have lower fees. See Fee Schedule.
              </p>
            </div>
          </div>
          <div className="g_accorItem">
            <h2>
              <i className="fa-solid fa-bars"></i> What is your Refund Policy?
            </h2>
            <div className="gAccorContent">
              <p>
                Skins Dojo charges a maximum sale fee of 5% per sale from the
                sale amount to the seller`&apos;`s account`&apos;`s balance.
                This fee decreases as your sale volume increases.
                <br />
                <br />
                Higher tier accounts have lower fees. See Fee Schedule.
              </p>
            </div>
          </div>
          <div className="g_accorItem">
            <h2>
              <i className="fa-solid fa-bars"></i>Can I send items I purchased to a
              friend/my other account?
            </h2>
            <div className="gAccorContent">
              <p>
                Skins Dojo charges a maximum sale fee of 5% per sale from the
                sale amount to the seller`&apos;`s account`&apos;`s balance.
                This fee decreases as your sale volume increases.
                <br />
                <br />
                Higher tier accounts have lower fees. See Fee Schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default General;
