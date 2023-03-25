import React, {useState} from "react";
import {useEffect} from "react";
import DojoItemCard from "../../components/DojoItemCard";
import InventoryLayout from "../../components/layouts/InventoryLayout";
import InitailProcess from "../../components/process/sellItems/InitialProcess";
import SteamItemcard from "../../components/SteamItemcard";
import Footer from "../../components/ui/Footer";
import SimpleModal from "../../components/ui/modal/SimpleModal";
import Navbar from "../../components/ui/Navbar";
import SiderBar from "../../components/ui/SiderBar";
import MarketService from "../../services/MarketService";
import data from "../../steam_inventory_data.json";

function Index() {
  // console.log(data);

  const [selected, setSelected] = useState([]);
  const [defaltModalShow, setDefaultModalShow] = useState(false);
  const [selectCase, setSelectCase] = useState("");
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const onSelectItem = (id) => {
    if (selected.includes(id)) {
      const restId = selected.filter((sId) => sId !== id);
      setSelected(restId);

      return;
    } else {
      setSelected([...selected, id]);
    }
  };

  async function fetchData() {
    setLoading(true);
    const res = await MarketService.steamInventory();
    if (res.status === 200) {
      setLoading(false);
      setItems(res.data.data);
    } else {
      setLoading(false);
    }
  }
  const filterSelected = () => {
    const res = selected.map((aId) => {
      return items.filter((item) => aId == item?.asset?.asset_id)[0];
    });

    return res;
  };
  useEffect(() => {
    fetchData();
  }, []);

  let SteamInventoryNotFound = (
    <div className="inven__box">
      <div className="inven__content">
        <h3 className="mb-3">No Items Available</h3>
        <p className="mb-4">
          Your purchased items and any items you removed from sale will appear
          here.{" "}
        </p>
        <a href="dojoInventoryItems.html" className="btn">
          Go To Dojo Inventory{" "}
        </a>
      </div>
      <div className="inve__img mb-4 mb-md-0">
        <img src="img/pngaaa 2.png" alt="" />
      </div>
    </div>
  );
  return (
    <>
      <InventoryLayout fname={"Steam Inventory"}>
        <div className="col-lg-9 col-md-8">
          <h3 className="mb-5 d-flex align-items-center">
            <div className="inventory__icon me-3">
              <img
                style={{width: "40px", height: "40px"}}
                src="img/vector/Rectangle 14.png"
                alt=""
              />
            </div>
            Steam Inventory
          </h3>
          <div className="inven__itemBox">
            <p className="inven_p2 d-flex align-items-center p-3 mb-3">
              <i className="fa-solid fa-circle-exclamation"></i>
              Here you can pick items to put them on sale or withdraw back to
              your Steam account. <i className="fa-solid fa-xmark"></i>
            </p>
            <p className="inven_p d-flex align-items-center p-3 mb-5">
              <i className="fa-solid fa-circle-exclamation"></i> Reminder: if
              you do not have Steam Guard Mobile Authenticator enabled for at
              least 15 days, items that you withdraw will be held by Steam for
              15 days, before being delivered to your Steam account.{" "}
              <i className="fa-solid fa-xmark"></i>
            </p>
            {loading ? (
              <h1>Loading...</h1>
            ) : items.length > 0 ? (
              <>
                <div className="market__items mb-5 d-grid align-items-center">
                  {items.map((item, index) => (
                    <SteamItemcard
                      key={index}
                      item={item}
                      index={index}
                      selected={selected}
                      setSelected={setSelected}
                      onSelectItem={onSelectItem}
                    />
                  ))}
                </div>

                <div className="pagination mb-5">
                  {/* <button
                    className={
                      selected?.length > 0
                        ? "btn-withdraw active"
                        : "btn-withdraw"
                    }
                    onClick={() => {
                      setDefaultModalShow(!defaltModalShow);

                      setSelectCase("withdraw");
                    }}>
                    Withdraw
                  </button> */}
                  <button
                    className={
                      selected?.length > 0 ? "btn-sell " : "btn-sell deactive"
                    }
                    onClick={() => {
                      if (selected.length <= 0) return;
                      setDefaultModalShow(!defaltModalShow);
                      setSelectCase("sell");
                    }}>
                    Sell
                  </button>
                </div>
              </>
            ) : (
              SteamInventoryNotFound
            )}
          </div>
        </div>
      </InventoryLayout>

      <SimpleModal
        isShow={defaltModalShow}
        setClose={setDefaultModalShow}
        body={
          <InitailProcess
            filterSelected={filterSelected}
            setSelected={setSelected}
            setClose={setDefaultModalShow}
            isShow={defaltModalShow}
          />
        }
      />
    </>
  );
}

export default Index;
