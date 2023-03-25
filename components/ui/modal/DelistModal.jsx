import React from "react";

function DelistModal() {
  return (
    <div className="delist_modal">
      <div className="delist_body">
        <div className="modal__title">
          <div className="title">
            <h2>
              <i className="fa-regular fa-circle-check"></i> Item was delisted
              successfully
            </h2>
          </div>
          <span className="off">
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div className="modal__content success d-flex justify-content-between align-items-center flex-column flex-sm-row">
          <div className="modal__success">
            <img src="img/check.png" alt="" />
          </div>
          <div className="justify-content-start">
            <p className="succes__text">
              This item has been removed from sale. Now this skin is available
              in Dojo Inventory. You can either withdraw it or put on sale
              again.
            </p>
            <button
              className="btn"
              //   onClick={handleOnClick}
            >
              Go to Dojo Inventory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DelistModal;
