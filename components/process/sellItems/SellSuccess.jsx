import {useRouter} from "next/router";
import React from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {ddsApiCall} from "../../../redux/actions/staticBarActions";

function SellSuccess({pageData}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/items-on-sale");
  };
  useEffect(() => {
    dispatch(ddsApiCall(pageData));
  }, []);
  return (
    <>
      <div className="modal__title">
        <div className="title">
          <h2>
            <i className="fa-regular fa-circle-check"></i> Items were put on
            sale successfully
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
            You can manage them on the sale section of your inventory and share
            your shop page for faster sales.
          </p>
          <button className="btn" onClick={handleOnClick}>
            Go to Items on Sale
          </button>
        </div>
      </div>
    </>
  );
}

export default SellSuccess;
