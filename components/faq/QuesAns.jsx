import React from "react";
import {useState} from "react";

function QuesAns({data}) {
  const [active, setActive] = useState("");

  const activeFaqQuestion = (id) => {
    if (active) {
      setActive(0);
    } else {
      setActive(id);
    }
  };

  return (
    <>
      <div className="g_accorItem">
        <h2 onClick={() => activeFaqQuestion(data?.id)}>
          <i className="fa-solid fa-bars"></i> {data?.question}
        </h2>
        <div className={`gAccorContent ${active == data?.id ? "d-block" : ""}`}>
          <p>
            {/* Skins Dojo charges a maximum sale fee of 5% per sale from the sale
            amount to the seller`&apos;`s account`&apos;`s balance. This fee
            decreases as your sale volume increases.
            <br />
            <br />
            Higher tier accounts have lower fees. See Fee Schedule. 
            */}
            {data?.answer}
          </p>
        </div>
      </div>
    </>
  );
}

export default QuesAns;
