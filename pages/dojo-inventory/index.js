import React, {useEffect} from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import DojoItemCard from "../../components/DojoItemCard";
import InventoryLayout from "../../components/layouts/InventoryLayout";

import InitailProcess from "../../components/process/sellItems/InitialProcess";
import InitailProcessWithdraw from "../../components/process/withdraw/InitalProccess";
import Footer from "../../components/ui/Footer";
import SimpleModal from "../../components/ui/modal/SimpleModal";
import NoItem from "../../components/ui/NoItem";
import Paginition from "../../components/ui/Paginition";
import {ddsApiCall} from "../../redux/actions/staticBarActions";
import {setSelectedItem} from "../../redux/actions/steamAction";
import MarketService from "../../services/MarketService";
import {errorNotification} from "../../utils/helperFunctions";
import {withAuth} from "../../utils/useAuth";

function Index() {
  // const [selectedItem, setSelected] = useState([]);
  const [defaltModalShow, setDefaultModalShow] = useState(false);
  const [selectCase, setSelectCase] = useState("");
  // console.log("selectCase", selectCase);
  const [loading, setLoading] = useState(true);
  const [pageData, setPagaData] = useState({
    per_page: 10,
    page: 1,
    filter: "",
  });
  // const [items, setItems] = useState([]);
  const userProfile = useSelector((state) => state.auth.userProfile);
  let dispatch = useDispatch();

  const ddsData = useSelector((state) => state.staticBar.ddsData);
  // console.log("ddsData", ddsData);

  // const [loader, setloader] = useState(true);

  useEffect(() => {
    dispatch(ddsApiCall(pageData));
    setLoading(false);
  }, [isGetAgain, pageData.page]);

  const {selectedItem, isGetAgain} = useSelector((state) => state.steamRed);

  const onItemSelect = (data) => {
    // console.log("dataddd new", data);
    // console.log("selectedItem", selectedItem);
    let arr = [];
    if (selectedItem?.length > 0) {
      if (
        selectedItem?.filter(
          (selectedItem) => selectedItem?.asset_id == data?.asset_id
        )?.length > 0
      ) {
        let newArr = selectedItem?.filter(
          (selectedItem) => selectedItem?.asset_id !== data?.asset_id
        );
        arr = [...newArr];
      } else {
        arr = [...selectedItem, data];
      }
    } else {
      arr.push(data);
    }

    // else if(!data?.tradable){
    //     errorNotification("This item is not available for trade")
    //     arr = [...selectedItem];
    // }
    // console.log('arr', arr)
    dispatch(setSelectedItem(arr));
  };

  // async function fetchData() {
  //   const res = await MarketService.dojoInventory();
  //   if (res.status === 200) {
  //     setLoading(false);
  //     setItems(res.data.data);
  //   } else {
  //     // console.log(res);
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleBtnclick = (name) => {
    // console.log('selectedItem', selectedItem)
    if (selectedItem.length <= 0) {
      errorNotification("Select any item");
      return;
    } else if (selectedItem?.length > 0) {
      console.log("name", name);
      if (name == "Sell") {
        let arr = selectedItem?.filter((item) => !item?.can_sell);
        // console.log("arr", arr);
        if (arr?.length > 0) {
          errorNotification("This items is not available for Sell");
          dispatch(setSelectedItem([]));
          return;
        } else {
          setDefaultModalShow(!defaltModalShow);
          setSelectCase(name);
        }
        // }
      } else if (name === "withdraw") {
        let arr = selectedItem?.filter((item) => !item?.can_withdraw);
        // console.log("arr", arr);
        if (arr?.length > 0) {
          errorNotification("This items is not available for Withdraw");
          dispatch(setSelectedItem([]));
          return;
        } else {
          setDefaultModalShow(!defaltModalShow);
          setSelectCase(name);
        }
        // }
      }
    }
  };

  return (
    <>
      <InventoryLayout fname={"Dojo Inventory"}>
        <div className="col-lg-9 col-md-12">
          <h3 className="mb-5 d-flex align-items-center">
            <div className="inventory__icon me-3">
              <img
                style={{width: "40px", height: "40px"}}
                src={userProfile?.data?.steam_user_info?.avatar}
                alt=""
              />
            </div>
            Dojo Inventory
          </h3>
          <div className="inven__itemBox">
            <p
              className="inven_p2 d-flex align-items-center p-3 mb-3"
              id="first">
              <i className="fa-solid fa-circle-exclamation"></i>
              Here you can pick items to put them on sale or withdraw back to
              your Steam account.{" "}
              <span
                onClick={() => {
                  document
                    .getElementById("first")
                    .setAttribute("style", "display:none !important");
                }}>
                <i
                  className="fa-solid fa-xmark"
                  style={{
                    cursor: "pointer",
                  }}
                />
              </span>
            </p>
            <p
              className="inven_p d-flex align-items-center p-3 mb-5"
              id="second">
              <i className="fa-solid fa-circle-exclamation"></i> Reminder: If
              you do not have Steam Guard Mobile Authenticator enabled for at
              least 15 days, items that you withdraw will be held by Steam for
              15 days, before being delivered to your Steam account.{" "}
              <span
                onClick={() => {
                  document
                    .getElementById("second")
                    .setAttribute("style", "display:none !important");
                }}>
                <i
                  className="fa-solid fa-xmark"
                  style={{
                    cursor: "pointer",
                  }}
                />
              </span>
            </p>
            {loading ? (
              <h1>Loading...</h1>
            ) : ddsData?.data?.length > 0 ? (
              <>
                <div className="market__items mb-5 d-grid align-items-center">
                  {ddsData?.data?.map((item, index) => (
                    <DojoItemCard
                      key={index}
                      item={item}
                      index={index}
                      selectedItem={selectedItem}
                      // setSelected={setSelected}
                      onSelectItem={onItemSelect}
                    />
                  ))}
                </div>

                <div className=" dojo_btns mb-5">
                  <button
                    id="withdraw"
                    style={{width: 170}}
                    class={
                      selectedItem?.length > 0
                        ? "btn-withdraw active"
                        : "btn-withdraw"
                    }
                    onClick={() => handleBtnclick("withdraw")}>
                    Withdraw
                  </button>
                  <button
                    className="ml-3"
                    style={{width: 170, padding: "14px 40px"}}
                    class={
                      selectedItem?.length > 0
                        ? "btn-sell "
                        : "btn-sell deactive"
                    }
                    onClick={() => handleBtnclick("Sell")}>
                    Sell
                  </button>
                </div>
                <Paginition
                  setPagaData={setPagaData}
                  pageData={pageData}
                  pageLength={ddsData?.meta?.last_page}
                />
              </>
            ) : (
              <NoItem
                from={"dojo"}
                routePath={"steam-inventory"}
                discription={`Your purchased items and any items you removed from sale will appear
                    here.`}
                title={"Check out the Market "}
              />
            )}
          </div>
        </div>
      </InventoryLayout>

      <SimpleModal
        pageData={pageData}
        isShow={defaltModalShow}
        setClose={setDefaultModalShow}
        body={
          selectCase == "Sell" ? (
            <InitailProcess
              // setSelected={setSelected}
              // filterSelected={filterSelected}
              withdrawSell={true}
              setClose={setDefaultModalShow}
              isShow={defaltModalShow}
              pageData={pageData}
              selectedItem={selectedItem}
            />
          ) : (
            <InitailProcessWithdraw
              // setSelected={setSelected}
              // filterSelected={filterSelected}
              pageData={pageData}
              selectedItem={selectedItem}
              setClose={setDefaultModalShow}
              isShow={defaltModalShow}
            />
          )
        }
      />
    </>
  );
}

export default Index;
