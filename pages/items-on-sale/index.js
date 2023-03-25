import Image from "next/image";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import InventoryLayout from "../../components/layouts/InventoryLayout";

import Item from "../../components/market/Item";
import NoItem from "../../components/ui/NoItem";
import Paginition from "../../components/ui/Paginition";
import {itemOnSaleApiCall} from "../../redux/actions/staticBarActions";

import {withAuth} from "../../utils/useAuth";

function Index() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const userProfile = useSelector((state) => state.auth.userProfile);
  const itemOnSaleData = useSelector((state) => state.staticBar.itemOnSaleData);
  const dispatch = useDispatch();
  const [pageData, setPagaData] = useState({
    per_page: 8,
    page: 1,
    filter: "",
  });

  console.log("itemOnSaleData", itemOnSaleData);

  function getWindowSize() {
    if (typeof window !== "undefined") {
      let {innerWidth, innerHeight} = window
        ? window
        : {innerWidth: 0, innerHeight: 0};
      return {innerWidth, innerHeight};
    }
  }

  useEffect(() => {
    // if (window) setreload(false);
    // getItemOnSaleData();
    dispatch(itemOnSaleApiCall(pageData));
    // itemOnSaleApiCall
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [pageData.page]);

  const marketItem = itemOnSaleData?.data?.map((item, index) => (
    <Item key={index} item={item} module={"itemOnSale"} pageData={pageData} />
  ));
  const shareShop = async () => {
    try {
      await navigator.share({
        url: "https://skinsdojo.com/shop/" + userProfile?.data?.id,
      });
      setIsShared(true);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <InventoryLayout fname="Items on Sale">
      <div className="col-md-12 col-lg-9 ">
        <div
          className="sales__title d-flex justify-content-between align-items-center mb-5"
          style={{marginTop: "10px"}}>
          <h3
            className="d-flex align-items-center"
            style={{
              fontWeight: 400,
              fontSize: 25,
            }}>
            <div className="inventory__icon me-3">
              <Image
                width={40}
                height={40}
                style={{borderRadius: "50%"}}
                src={userProfile?.data?.steam_user_info?.avatar}
                alt=""
              />
            </div>
            Items on sale
          </h3>
          {/* {windowSize && windowSize.innerWidth <= 460 ? ( */}

          <div className="share" onClick={shareShop}>
            <i
              className="fa-solid fa-share-nodes"
              style={{fontSize: "20px", color: "#FFC700"}}></i>
          </div>
          {/* ) : ( */}
          <button
            className="h_btn align-items-center share-h"
            // style={{ width: "200px" }}
            onClick={shareShop}>
            <i className="fa-solid fa-share-nodes pe-3"></i> Share my shop
          </button>
          {/* )} */}
        </div>
        <div className="inven__itemBox">
          <div className="market__items flex-wrap d-grid  mb-5 align-items-center">
            {itemOnSaleData?.data?.length > 0 && <>{marketItem}</>}
          </div>
          {itemOnSaleData?.data?.length > 0 && (
            <Paginition
              setPagaData={setPagaData}
              pageData={pageData}
              pageLength={itemOnSaleData?.meta?.last_page}
            />
          )}

          {itemOnSaleData?.data?.length === 0 && (
            <NoItem
              discription={"Seems like you don’t have any items on sale."}
              from={"steam"}
              routePath={"dojo-inventory"}
              title={"Go to Dojo Inventory"}
            />
          )}
        </div>
      </div>
    </InventoryLayout>
  );
}

export default withAuth(Index);
