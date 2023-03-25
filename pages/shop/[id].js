import Image from "next/image";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Item from "../../components/market/Item";
import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";
import MarketService from "../../services/MarketService";
function Shop() {
  const router = useRouter();
  const [data, setdata] = useState([]);
  const {id} = router.query;

  const [isShared, setIsShared] = useState(false);

  const shareShop = async () => {
    try {
      await navigator.share({
        url: "https://skinsdojo.com/shop/" + id,
      });
      setIsShared(true);
    } catch (err) {
      console.error(err);
    }
  };

  let getShop = async () => {
    let res = await MarketService.shopItems(id);
    if (res.status === 200) {
      setdata(res.data.data);
      console.log("res shop", res.data.data);
    }
  };
  useEffect(() => {
    getShop();
  }, [id]);

  const marketItem =
    data?.length > 0 &&
    data?.map((item, index) => (
      <Item key={index} item={item} module={"itemOnSale"} />
    ));

  return (
    <>
      <div className="header_area">
        <Navbar isAuth={true} />
        <hr className="mt-3 mb-5" />
      </div>
      <main className="pb-5">
        <section className="market section_center">
          <div className="container-lg">
            <div
              className="sales__title d-flex justify-content-between align-items-center mb-5"
              style={{marginTop: "10px"}}>
              {data?.length > 0 && (
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
                      src={data[0]?.seller_info?.seller_details?.avatar}
                      alt=""
                    />
                  </div>
                  {data[0]?.seller_info?.seller_details?.username}
                </h3>
              )}

              {/* {windowSize && windowSize.innerWidth <= 460 ? ( */}

              <div
                className="share"
                onClick={shareShop}
                style={{cursor: "pointer"}}>
                <i
                  className="fa-solid fa-share-nodes"
                  style={{fontSize: "20px", color: "#FFC700"}}></i>
              </div>
              {/* ) : ( */}
              <button
                className="h_btn align-items-center share-h"
                onClick={shareShop}
                style={{width: "200px"}}>
                <i className="fa-solid fa-share-nodes pe-3"></i>{" "}
                {isShared ? "Link shared!" : "Share my shop"}
              </button>
              {/* )} */}
            </div>
            <div className="inven__itemBox">
              <div className="market__items flex-wrap d-grid  mb-5 align-items-center">
                {marketItem}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Shop;
