import React, {useState} from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import DojoItemCard from "../../components/DojoItemCard";
import InventoryLayout from "../../components/layouts/InventoryLayout";
import InitailProcess from "../../components/process/sellItems/InitialProcess";
import SteamItemcard from "../../components/SteamItemcard";
import Footer from "../../components/ui/Footer";
import SimpleModal from "../../components/ui/modal/SimpleModal";
import Navbar from "../../components/ui/Navbar";
import NoItem from "../../components/ui/NoItem";
import Paginition from "../../components/ui/Paginition";
import SiderBar from "../../components/ui/SiderBar";
import {sdsApiCall} from "../../redux/actions/staticBarActions";
import {setSelectedItem} from "../../redux/actions/steamAction";
import MarketService from "../../services/MarketService";
import data from "../../steam_inventory_data.json";
import {withAuth} from "../../utils/useAuth";

function Index() {
  // console.log(data);
  const middleLoader = useSelector((state) => state.staticBar.middleLoader);
  const sdsData = useSelector((state) => state.staticBar.sdsData);
  // console.log('sdsData', sdsData)

  const userProfile = useSelector((state) => state.auth.userProfile);

  // const [selectedItem, setSelectedItem] = useState([]);
  let dispatch = useDispatch();
  const {selectedItem, isGetAgain} = useSelector((state) => state.steamRed);
  const [loading, setLoading] = useState(true);
  // console.log("selectedItem in index", selectedItem);
  const [defaltModalShow, setDefaultModalShow] = useState(false);
  const [selectCase, setSelectCase] = useState("");
  const [items, setItems] = useState([]);
  const [pageData, setPagaData] = useState({
    per_page: 10,
    page: 1,
    filter: "",
  });

  const onItemSelect = (data) => {
    // console.log('data', data)
    // console.log('selectedItem', selectedItem)
    let arr = [];
    if (selectedItem?.length > 0) {
      if (
        selectedItem?.filter(
          (selected) => selected?.asset?.asset_id == data?.asset?.asset_id
        )?.length > 0
      ) {
        let newArr = selectedItem?.filter(
          (selected) => selected?.asset?.asset_id !== data?.asset?.asset_id
        );
        arr = [...newArr];
      } else {
        arr = [...selectedItem, data];
      }
    } else {
      arr.push(data);
    }
    // console.log('arr', arr)
    dispatch(setSelectedItem(arr));
  };

  // console.log(items, "items");
  useEffect(() => {
    dispatch(sdsApiCall(pageData));
    setLoading(false);
  }, [isGetAgain, pageData.page]);

  return (
    <>
      <InventoryLayout fname={"Steam Inventory"}>
        <div class="col-lg-9 col-md-10">
          <h3 class="mb-5 d-flex align-items-center">
            <div class="inventory__icon me-3">
              <img
                style={{width: "40px", height: "40px"}}
                src={userProfile?.data?.steam_user_info?.avatar}
                alt=""
              />
            </div>
            Steam Inventory
          </h3>
          <div class="inven__itemBox">
            <p class="inven_p2 d-flex align-items-center p-3 mb-3" id="first">
              <i class="fa-solid fa-circle-exclamation"></i>
              Here you can pick items to put them on sale or withdraw back to
              your Steam account.{" "}
              <span
                onClick={() => {
                  document
                    .getElementById("first")
                    .setAttribute("style", "display:none !important");
                }}>
                <i
                  class="fa-solid fa-xmark"
                  style={{
                    cursor: "pointer",
                  }}
                />
              </span>
            </p>
            <p class="inven_p d-flex align-items-center p-3 mb-5" id="second">
              <i class="fa-solid fa-circle-exclamation"></i> Reminder: if you do
              not have Steam Guard Mobile Authenticator enabled for at least 15
              days, items that you withdraw will be held by Steam for 15 days,
              before being delivered to your Steam account.{" "}
              <span
                onClick={() => {
                  document
                    .getElementById("second")
                    .setAttribute("style", "display:none !important");
                }}>
                <i
                  class="fa-solid fa-xmark"
                  style={{
                    cursor: "pointer",
                  }}
                />
              </span>
            </p>
            {loading ? (
              <div className="text-center" style={{marginTop: "60px"}}>
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : !loading && sdsData?.data?.length > 0 ? (
              <>
                <div class="market__items mb-5 d-grid align-items-center">
                  {sdsData?.data?.map((item, index) => (
                    <SteamItemcard
                      key={index}
                      item={item}
                      selectedItem={selectedItem}
                      onSelectItem={onItemSelect}
                    />
                  ))}
                </div>

                <div class=" mb-5">
                  {/* <button
                    class={
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
                    style={{width: 100, padding: "11px 22px"}}
                    class={
                      selectedItem.length > 0
                        ? "btn-sell "
                        : "btn-sell deactive"
                    }
                    onClick={() => {
                      if (selectedItem.length <= 0) return;
                      setDefaultModalShow(!defaltModalShow);
                      setSelectCase("sell");
                    }}>
                    Sell
                  </button>
                </div>
                <Paginition
                  setPagaData={setPagaData}
                  pageData={pageData}
                  pageLength={sdsData?.meta?.last_page}
                />
              </>
            ) : (
              <NoItem
                discription={"Seems like you don’t have any items on Steam."}
                from={"steam"}
                routePath={"dojo-inventory"}
                title={"Go to Dojo Inventory"}
              />
            )}
          </div>
        </div>
      </InventoryLayout>

      <SimpleModal
        isShow={defaltModalShow}
        setClose={setDefaultModalShow}
        body={
          <InitailProcess
            selectedItem={selectedItem}
            // setSelected={setSelected}
            setClose={setDefaultModalShow}
            isShow={defaltModalShow}
          />
        }
      />
    </>
  );
}

export default Index;
