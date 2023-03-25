import React, {useEffect, useState} from "react";
import {useMemo} from "react";
import {useDispatch} from "react-redux";
import {setCloseModal} from "../../../redux/actions/authAction";
import {setAuthModalHide} from "../../../redux/actions/steamAction";

function DefaultModal({isShow, body, setClose, from}) {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  useMemo(() => {
    if (isShow) {
      setModalShow(true);
    } else {
      setModalShow(false);
      // dispatch(setCloseModal());
    }
  }, [isShow]);

  const closeModal = () => {
    setModalShow(!modalShow);
    // dispatch(setCloseModal());
    // localStorage?.removeItem("modal");

    // if (from === "complete profile") {
    //   localStorage.setItem("trade_modal_on", false);
    // }
    setClose(false);
    dispatch(setCloseModal());
  };

  return (
    <div
      className="modalContainer"
      style={{display: `${modalShow ? "block" : "none"}`, zIndex: "99999"}}>
      <div className="modalContent">
        <div className="header">
          <div></div>
          <div className="close" onClick={closeModal}>
            X
          </div>
        </div>
        <div className="modalBody">{body}</div>
      </div>
    </div>
  );
}

export default DefaultModal;
