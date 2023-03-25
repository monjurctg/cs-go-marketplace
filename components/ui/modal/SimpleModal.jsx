import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  ddsApiCall,
  itemOnSaleApiCall,
} from "../../../redux/actions/staticBarActions";
import {setCardDetailsDeActive} from "../../../redux/actions/utilsAction";

function SimpleModal({
  isShow,
  body,
  width,
  height,
  setClose,
  from,
  size,
  isFromBalance,
  pageData,
}) {
  const [modalShow, setModalShow] = useState(false);
  const {cardDetailsActive} = useSelector((state) => state.utils);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isShow) {
      setModalShow(true);
    } else {
      setModalShow(false);
      dispatch(setCardDetailsDeActive());
    }
  }, [isShow, cardDetailsActive]);

  const closeModal = () => {
    console.log("close modal");
    setModalShow(!modalShow);

    // dispatch(itemOnSaleApiCall(pageData));
    setClose(false);
  };
  return (
    <>
      <div
        className="modal__gap py-5  modalContainer"
        style={{
          display: `${modalShow ? "block" : "none"}`,
        }}>
        <div
          className={
            size ? `modal__box small-modal  ${from}` : `modal__box ${from} `
          }
          style={{
            // width: "800px",
            width: width ? width : "",

            height:
              isFromBalance == "withdraw" ? "100vh" : height ? height : "",
            margin: "0 auto",
          }}>
          {body}

          <div className="modal__title">
            <span className="off" onClick={closeModal}>
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SimpleModal;
