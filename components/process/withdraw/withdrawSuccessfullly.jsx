import React from "react";
import AcceptTradeItemCard from "../../AcceptTradeItemCard";

function withdrawSuccessfullly() {
  return (
    <div>
      <div className="modal__title">
        <div className="title">
          <h2>
            <i className="fa-regular fa-circle-check"></i> Items were withdrawn
            successfully
          </h2>
          <p>Your items were withdrawn to your Steam account.</p>
        </div>
        <span className="off">
          <i className="fa-solid fa-xmark"></i>
        </span>
      </div>
      <div className="modal__content">
        <span className="trade">Items Withdrawn: 3</span>
        <div className="market__items mb-5 d-grid align-items-center">
          {/* <div style={{opacity: "50%"}} className="innr">
            <a href="#" className="mrkt_item">
              <h6>
                Water elemental <span>FN</span>
              </h6>
              <div className="bDeals__img">
                <img src="img/330x192 (1) 1.png" alt="" />
              </div>
              <div className="dis__price d-flex align-items-center">
                <div className="dis">
                  <span className="bg-transparent" style={{color: "#9DB4D3"}}>
                    0.1913
                  </span>
                  <p>$4.00</p>
                </div>
                <div className="pinCode">
                  <p>
                    <i className="fa-solid fa-lock"></i> 17
                  </p>
                  <span className="d-flex justify-content-end fs-4">
                    <i className="fa-solid fa-ellipsis"></i>
                  </span>
                </div>
              </div>
            </a>
            <p style={{color: "white"}} className="take">
              <i className="fa-regular fa-clock"></i>
              00:09:42
            </p>
            <span style={{color: "#05BB59"}} className="cancel">
              <i className="fa-solid fa-check"></i> Trade Accepted
            </span>
          </div>
          <div style={{opacity: "50%"}} className="innr">
            <a href="#" className="mrkt_item">
              <h6>
                Water elemental <span>FN</span>
              </h6>
              <div className="bDeals__img">
                <img src="img/330x192 (1) 1 (1).png" alt="" />
              </div>
              <div className="dis__price">
                <div className="dis">
                  <span className="bg-transparent" style={{color: "#9DB4D3"}}>
                    0.1913
                  </span>
                  <p>$4.00</p>
                </div>
                <div className="pinCode">
                  <p>
                    <i className="fa-solid fa-lock"></i> 17
                  </p>
                  <span className="d-flex justify-content-end fs-4">
                    <i className="fa-solid fa-ellipsis"></i>
                  </span>
                </div>
              </div>
            </a>
            <p style={{color: "white"}} className="take">
              <i className="fa-regular fa-clock"></i>
              00:09:42
            </p>
            <span style={{color: "#05BB59"}} className="cancel">
              <i className="fa-solid fa-check"></i> Trade Accepted
            </span>
          </div>
          <div style={{opacity: "50%"}} className="innr">
            <a href="#" className="mrkt_item">
              <h6>
                Water elemental <span>FN</span>
              </h6>
              <div className="bDeals__img">
                <img src="img/330x192 (1) 1 (3).png" alt="" />
              </div>
              <div className="dis__price">
                <div className="dis">
                  <span className="bg-transparent" style={{color: "#9DB4D3"}}>
                    0.1913
                  </span>
                  <p>$4.00</p>
                </div>
                <div className="pinCode">
                  <p>
                    <i className="fa-solid fa-lock"></i> 17
                  </p>
                  <span className="d-flex justify-content-end fs-4">
                    <i className="fa-solid fa-ellipsis"></i>
                  </span>
                </div>
              </div>
            </a>
            <p style={{color: "white"}} className="take">
              <i className="fa-regular fa-clock"></i>
              00:09:42
            </p>
            <span style={{color: " #05BB59"}} className="cancel">
              <i className="fa-solid fa-check"></i> Trade Accepted
            </span>
          </div> */}
          <AcceptTradeItemCard />
        </div>
        <div className="modal__btn">
          <button className="btn">Back to My Inventory</button>
        </div>
      </div>
    </div>
  );
}

export default withdrawSuccessfullly;
