import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import InventoryLayout from "../../components/layouts/InventoryLayout";
import Item from "../../components/market/Item";
import MarketItem from "../../components/market/MarketItem";
import MarketSlider from "../../components/market/MarketSlider";
import BottomNav from "../../components/ui/BottomNav";
import DotSpinner from "../../components/ui/DotSpinner";
import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";
import NoItem from "../../components/ui/NoItem";
import Paginition from "../../components/ui/Paginition";
import SiderBar from "../../components/ui/SiderBar";
import {mdsApiCall} from "../../redux/actions/staticBarActions";
import MarketService from "../../services/MarketService";
import {withAuth} from "../../utils/useAuth";
// const items = [
//   {
//     id: 1,
//     name: " Water elemental",
//     model: "Fn",
//     img: "img/330x192 (1) 1 (1).png",
//     discount: "-12.97%",
//     price: "4.00",
//     pincode: "0.198752",
//     steamPrice: " 6.77",
//   },
//   {
//     id: 2,
//     name: " Water elemental",
//     model: "Fn",
//     img: "img/330x192 (1) 1.png",
//     discount: "-12.97%",
//     price: "4.00",
//     pincode: "0.198752",
//     steamPrice: " 6.77",
//   },
//   {
//     id: 3,
//     name: " Water elemental",
//     model: "Fn",
//     img: "img/330x192 (1) 1 (3).png",
//     discount: "-12.97%",
//     price: "4.00",
//     pincode: "0.198752",
//     steamPrice: " 6.77",
//   },
//   {
//     id: 4,
//     name: " Water elemental",
//     model: "Fn",
//     img: "img/330x192 (1) 1 (1).png",
//     discount: "-12.97%",
//     price: "4.00",
//     pincode: "0.198752",
//     steamPrice: " 6.77",
//   },
//   {
//     id: 5,
//     name: " Water elemental",
//     model: "Fn",
//     img: "img/330x192 (1) 1 (1).png",
//     discount: "-12.97%",
//     price: "4.00",
//     pincode: "0.198752",
//     steamPrice: " 6.77",
//   },
//   {
//     id: 6,
//     name: " Water elemental",
//     model: "Fn",
//     img: "img/330x192 (1) 1 (1).png",
//     discount: "-12.97%",
//     price: "4.00",
//     pincode: "0.198752",
//     steamPrice: " 6.77",
//   },
//   {
//     id: 7,
//     name: " Water elemental",
//     model: "Fn",
//     img: "img/330x192 (1) 1 (1).png",
//     discount: "-12.97%",
//     price: "4.00",
//     pincode: "0.198752",
//     steamPrice: " 6.77",
//   },
// ];

function Index() {
  const mdsData = useSelector((state) => state.staticBar.mdsData);
  const [loader, setloader] = useState(true);
  const [pageData, setPagaData] = useState({
    per_page: 10,
    page: 1,
    filter: "",
  });
  // console.log(pageData, "pageData");

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(mdsApiCall(pageData));
    setloader(false);
  }, [pageData.page]);

  let marketData = [
    {
      img: "/img/330x192 (1) 1 (1).png",
      percent: 12.2,
      floatValue: 0.0,
      fee: 5,
      recommended_price: 34,
      bot_price: 45,
      id: 1,
      restraction: 7,
    },
    {
      img: "/img/330x192 (1) 1 (3).png",
      percent: 11.2,
      floatValue: 0.0,
      fee: 5,
      recommended_price: 34,
      bot_price: 45,
      id: 2,
      restraction: 0,
    },
    {
      img: "/img/330x192 (1) 1 (3).png",
      percent: 11.2,
      floatValue: 0.0,
      fee: 5,
      recommended_price: 34,
      bot_price: 45,
      id: 2,
      restraction: 0,
    },
    {
      img: "/img/330x192 (1) 1 (3).png",
      percent: 11.2,
      floatValue: 0.0,
      fee: 5,
      recommended_price: 34,
      bot_price: 45,
      id: 2,
      restraction: 0,
    },
    {
      img: "/img/330x192 (1) 1 (3).png",
      percent: 11.2,
      floatValue: 0.0,
      fee: 5,
      recommended_price: 34,
      bot_price: 45,
      id: 2,
      restraction: 0,
    },
    {
      img: "/img/330x192 (1) 1 (3).png",
      percent: 11.2,
      floatValue: 0.0,
      fee: 5,
      recommended_price: 34,
      bot_price: 45,
      id: 2,
      restraction: 0,
    },
    {
      img: "/img/330x192 (1) 1 (3).png",
      percent: 11.2,
      floatValue: 0.0,
      fee: 5,
      recommended_price: 34,
      bot_price: 45,
      id: 2,
      restraction: 0,
    },
    {
      img: "/img/330x192 (1) 1 (3).png",
      percent: 11.2,
      floatValue: 0.0,
      fee: 5,
      recommended_price: 34,
      bot_price: 45,
      id: 2,
      restraction: 0,
    },
  ];

  let marketItem = "";
  if (marketData.length > 0) {
    marketItem = marketData.map((item, index) => (
      <MarketItem key={index} item={item} module={"market"} />
    ));
  }
  return (
    <InventoryLayout fname={"Market"}>
      <div className="col-md-12 col-lg-9">
        <h3 className="mb-4">Market</h3>
        {marketData?.length > 0 && !loader ? (
          <div className="market__items mb-5 d-grid align-items-center">
            {marketItem}
          </div>
        ) : loader ? (
          <>
            <div className="text-center" style={{marginTop: "60px"}}>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </>
        ) : (
          <NoItem
            from={"market"}
            discription={"Please try again or check out the Market."}
            routePath={"/market"}
            title={"Check out the Market"}
          />
        )}
      </div>
      <Paginition
        setPagaData={setPagaData}
        pageData={pageData}
        pageLength={mdsData?.data?.meta?.last_page}

        // style={mdsData?.data?.data?.length > 0 ? {minHeight: "100vh"} : {}}
      />
      <MarketSlider />
    </InventoryLayout>
  );
}

export default Index;

// withAuth(Index)
