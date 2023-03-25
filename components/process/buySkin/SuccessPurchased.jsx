import Image from "next/image";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import img1 from "../../../public/img/dis.png";
import MarketService from "../../../services/MarketService";
function SuccessPurchased(onNext) {
  const router = useRouter();
  const [item, setItem] = useState(null);

  const {id} = router.query;
  // console.log("isadasdasdasd", id);

  // // console.log("item", items);
  let getMarketListings = async () => {
    if (id) {
      let res = await MarketService.singleMarket(id);
      console.log("res", res.data.data);
      setItem(res.data.data);
    }
  };

  useEffect(() => {
    getMarketListings();
  }, [id]);
  return (
    <>
      <div className="modal__title">
        <div className="title">
          <h2>
            <i className="fa-regular fa-circle-check"></i> You have successfully
            purchased
          </h2>
        </div>
        <span className="off">
          <i className="fa-solid fa-xmark"></i>
        </span>
      </div>
      <div className="discountItems__area">
        <div className="row">
          <div className="col-xl-12 d-flex align-items-start lign-items-sm-center justify-content-between flex-column flex-sm-row">
            <div className="dis__title modal__dis w-100 w-sm-50">
              <span>{item?.asset_details?.details?.type}</span>
              <h3>{item?.asset_details?.details?.name}</h3>
              <p className="m-0">
                No suicide squad would be complete without it
              </p>
            </div>
            <div className="dis__img w-100 w-sm-50">
              <div className="disImg_big2">
                <Image
                  width={250}
                  height={200}
                  src={item?.asset_details?.details?.icon_url}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal__btn mt-5 d-flex align-items-center justify-content-center flex-column flex-sm-row">
        <button
          className="h_btn me-0 me-sm-2 mb-2 mb-sm-0"
          onClick={() => router.push("/market")}>
          Back to Market
        </button>
        <button className="btn" onClick={() => router.push("/dojo-inventory")}>
          Go to Dojo Inventory
        </button>
      </div>
    </>
  );
}

export default SuccessPurchased;
