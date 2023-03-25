import React, { useEffect, useState } from "react";
import filters from "../../public/images/filters.svg";
import types from "../../public/images/types.svg";

import sort from "../../public/images/sort.svg";
import { useDispatch } from "react-redux";
import {
  ddsApiCall,
  itemOnSaleApiCall,
  mdsApiCall,
  sdsApiCall,
  setActiveMobileBar,
} from "../../redux/actions/staticBarActions";
import HoverMenu from "../HoverMenu";
import { useRouter } from "next/router";

function BottomNav() {
  let dispatch = useDispatch();
  const [filter, setfilter] = useState(null);
  const [selectedData, setSelectedData] = useState([]);
  const [selectSortBy, setSelectSortBy] = useState("Default");
  const { pathname } = useRouter();

  // useEffect(() => {
  //   dispatch(ms)

  //   return () => {
  //     second
  //   }
  // }, [third])

  let changeFilter = (data) => {
    if (filter !== data) {
      dispatch(setActiveMobileBar(data));
    } else dispatch(setActiveMobileBar(null));
  };

  const handleItemClick = (name) => {
    console.log("name", name);
    if (selectedData.includes(name)) {
      console.log("hello");
      const restData = selectedData.filter((sName) => sName !== name);
      if (pathname == "/dojo-inventory") {
        dispatch(ddsApiCall({ weapon: restData }));
      } else if (pathname == "/items-on-sale") {
        dispatch(itemOnSaleApiCall({ weapon: restData }));
      } else if (pathname == "/steam-inventory") {
        dispatch(sdsApiCall({ weapon: restData }));
      } else {
        dispatch(mdsApiCall({ weapon: restData }));
      }

      // console.log('first', restData)
      setSelectedData(restData);
    } else {
      // console.log('name', name)
      if (pathname == "/dojo-inventory") {
        dispatch(ddsApiCall({ weapon: [...selectedData, name] }));
      } else if (pathname == "/items-on-sale") {
        dispatch(itemOnSaleApiCall({ weapon: [...selectedData, name] }));
      } else if (pathname == "/steam-inventory") {
        dispatch(sdsApiCall({ weapon: [...selectedData, name] }));
      } else {
        dispatch(mdsApiCall({ weapon: [...selectedData, name] }));
      }

      setSelectedData([...selectedData, name]);
    }
  };

  // console.log(selectedData, "selectedData");
  const knivesData = [
    "All",
    "Bayonet",
    "Bowie",
    "Buterfly",
    "Falchion",
    "Flip",
    "GUT",
    "Karambit",
    "M9 Bayonet",
  ];
  const GlovesData = [
    "All",
    "Bloodhound",
    "Driver",
    "Hand Wraps",
    "Hydra",
    "Moto",
    "Spacialist",
    "Sport",
  ];

  const PistolsData = [
    "All",
    "CZ75-Auto",
    "Desert Eagl",
    "Dual Bearttas",
    "Five-SeveN",
    "Glock-18",
    "PP-Bizon",
    "p2000",
    "p250",
  ];
  const SMGsData = [
    "All",
    "MAC-10",
    "MP5-SD",

    "MP7",
    "MP9",
    "P90",
    "PP-Bizon",
    "UMP-45",
  ];
  const RiflesData = [
    "All",
    "Ak-47",
    "AUG",
    "FAMAS",
    "Gali AR",
    "M4A1-S",
    "M4A4",
    "5G 553",
  ];
  const ShotgunsData = ["All", "MAG-7", "Nova", "Sawed-Off", "XM1014"];
  const SniperData = ["All", "AWP", "G3SG1", "SCAR-20", "SSG 08"];

  const selectFilterData = (name) => {};

  let before1200 = (
    <div className=" mt-5 medium">
      <div className="sortList">
        <ul className="d-flex align-items-center justify-content-between">
          <HoverMenu
            title={"Knives"}
            data={knivesData}
            onSelect={handleItemClick}
            selectedData={selectedData}
          />
          <HoverMenu
            title={"Gloves"}
            data={GlovesData}
            onSelect={handleItemClick}
            selectedData={selectedData}
          />
          <HoverMenu
            title={"Pistols"}
            data={PistolsData}
            onSelect={handleItemClick}
            selectedData={selectedData}
          />
          <HoverMenu
            title={"SMGs"}
            data={SMGsData}
            onSelect={handleItemClick}
            selectedData={selectedData}
          />

          <HoverMenu
            title={" Rifles"}
            data={RiflesData}
            onSelect={handleItemClick}
            selectedData={selectedData}
          />
          <HoverMenu
            title={"Sniper Rifles"}
            data={SniperData}
            onSelect={handleItemClick}
            selectedData={selectedData}
          />
          <HoverMenu
            title={"Shotguns"}
            data={ShotgunsData}
            onSelect={handleItemClick}
            selectedData={selectedData}
          />
          {/* <HoverMenu
              title={"Other"}
              data={[]}
              onSelect={handleItemClick}
              selectedData={selectedData}
            /> */}

          <li className="menu">
            <a href="#">Other</a>
          </li>
        </ul>
      </div>
      <div
        className="searchList mt-4 d-flex align-items-center justify-content-between"
        style={{ width: "100%" }}
      >
        <div className="search d-flex align-items-center ">
          <i className="fa-solid fa-magnifying-glass px-2"></i>

          <input
            type="text"
            onChange={(e) => {
              if (pathname == "/dojo-inventory") {
                // console.log('datap[l;kl;k;lk')
                dispatch(ddsApiCall({ search_value: e.target.value }));
              } else if (pathname == "/steam-inventory") {
                // console.log('datap[l;kl;k;lk')
                dispatch(sdsApiCall({ search_value: e.target.value }));
              } else if (pathname == "/items-on-sale") {
                dispatch(itemOnSaleApiCall({ search_value: e.target.value }));
              } else {
                dispatch(mdsApiCall({ search_value: e.target.value }));
              }
            }}
            name="sortSearch"
            id="sortSearch"
            placeholder="Search..."
          />
        </div>
        <div className="sort__dropDown d-flex ">
          <span className="me-2 sort-by-text">Sort by:</span>
          <div className="s__sub-dropDown menu">
            <p>
              ({selectSortBy}) <i className="fa-solid fa-angle-down"></i>
            </p>
            <ul className="sub__menu">
              <li
                onClick={(e) => {
                  setSelectSortBy("Default");
                  if (pathname == "/dojo-inventory") {
                    // console.log('datap[l;kl;k;lk')
                    dispatch(ddsApiCall({ sort_by: "default" }));
                  } else if (pathname == "/items-on-sale") {
                    dispatch(itemOnSaleApiCall({ sort_by: "default" }));
                  } else if (pathname == "/steam-inventory") {
                    // console.log('datap[l;kl;k;lk')
                    dispatch(sdsApiCall({ sort_by: "default" }));
                  } else {
                    dispatch(mdsApiCall({ sort_by: "default" }));
                  }
                }}
              >
                Default
              </li>
         
              {pathname !== "/steam-inventory" && (
                <>
                     <li
                onClick={(e) => {
                  setSelectSortBy("Best deals");
                  if (pathname == "/dojo-inventory") {
                    // console.log('datap[l;kl;k;lk')
                    dispatch(ddsApiCall({ sort_by: "best_deals" }));
                  } else if (pathname == "/items-on-sale") {
                    dispatch(itemOnSaleApiCall({ sort_by: "best_deals" }));
                  } else if (pathname == "/steam-inventory") {
                    // console.log('datap[l;kl;k;lk')
                    dispatch(sdsApiCall({ sort_by: "best_deals" }));
                  } else {
                    dispatch(mdsApiCall({ sort_by: "best_deals" }));
                  }
                }}
              >
                Best deals
              </li>
                  <li
                    onClick={(e) => {
                      setSelectSortBy(" Price: High to low");
                      if (pathname == "/dojo-inventory") {
                        // console.log('datap[l;kl;k;lk')
                        dispatch(ddsApiCall({ sort_by: "price_high_to_low" }));
                      } else if (pathname == "/items-on-sale") {
                        dispatch(
                          itemOnSaleApiCall({ sort_by: "price_high_to_low" })
                        );
                      } else {
                        dispatch(mdsApiCall({ sort_by: "price_high_to_low" }));
                      }
                    }}
                  >
                    Price: High to low
                  </li>
                  <li
                    onClick={(e) => {
                      setSelectSortBy("Price: Low to high");
                      if (pathname == "/dojo-inventory") {
                        // console.log('datap[l;kl;k;lk')
                        dispatch(ddsApiCall({ sort_by: "price_low_to_high" }));
                      } else if (pathname == "/items-on-sale") {
                        dispatch(
                          itemOnSaleApiCall({ sort_by: "price_low_to_high" })
                        );
                      } else {
                        dispatch(mdsApiCall({ sort_by: "price_low_to_high" }));
                      }
                    }}
                  >
                    Price: Low to high
                  </li>
                </>
              )}
                  <li
                    onClick={(e) => {
                      setSelectSortBy("Float: High to low");
                      if (pathname == "/dojo-inventory") {
                        // console.log('datap[l;kl;k;lk')
                        dispatch(ddsApiCall({ sort_by: "float_high_to_low" }));
                      } else if (pathname == "/items-on-sale") {
                        dispatch(
                          itemOnSaleApiCall({ sort_by: "float_high_to_low" })
                        );
                      } else {
                        dispatch(mdsApiCall({ sort_by: "float_high_to_low" }));
                      }
                    }}
                  >
                    Float: High to low
                  </li>
                  <li
                    onClick={(e) => {
                      setSelectSortBy("Float: Low to high");
                      if (pathname == "/dojo-inventory") {
                        // console.log('datap[l;kl;k;lk')
                        dispatch(ddsApiCall({ sort_by: "float_low_to_high" }));
                      } else if (pathname == "/items-on-sale") {
                        dispatch(
                          itemOnSaleApiCall({ sort_by: "float_low_to_high" })
                        );
                      } else {
                        dispatch(mdsApiCall({ sort_by: "float_low_to_high" }));
                      }
                    }}
                  >
                    Float: Low to high
                  </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  let before600 = (
    <div className="small mt-2">
      <div className="searchList mt-4" style={{ width: "100%" }}>
        <div className="search d-flex align-items-center ">
          <i className="fa-solid fa-magnifying-glass px-2"></i>
          <input
            type="text"
            name="sortSearch"
            id="sortSearch"
            placeholder="Search..."
            onChange={(e) => {
              if (pathname == "/dojo-inventory") {
                // console.log('datap[l;kl;k;lk')
                dispatch(ddsApiCall({ search_value: e.target.value }));
              } else if (pathname == "/steam-inventory") {
                // console.log('datap[l;kl;k;lk')
                dispatch(sdsApiCall({ search_value: e.target.value }));
              } else if (pathname == "/items-on-sale") {
                dispatch(itemOnSaleApiCall({ search_value: e.target.value }));
              } else {
                dispatch(mdsApiCall({ search_value: e.target.value }));
              }
            }}
          />
        </div>
        <div className="mt-4 d-flex align-items-center justify-content-between">
          <div
            className="d-flex position-relative"
            style={{ gap: 10 }}
            onClick={() => changeFilter("Filters")}
          >
            <img src={filters.src} alt="" />
            <p>Filters</p>
          </div>
          <div
            className="d-flex"
            style={{ gap: 10 }}
            onClick={() => changeFilter("Types")}
          >
            <img src={types.src} alt="" />
            <p>Types</p>
          </div>
          <div
            className="d-flex"
            style={{ gap: 10 }}
            onClick={() => changeFilter("Sort by")}
          >
            <img src={sort.src} alt="" />
            <p>Sort by</p>
          </div>

          {/* <div className="sort__dropDown d-flex ">
      <span className="me-2 sort-by-text">Sort by:</span>
      <div className="s__sub-dropDown menu">
        <p>
          Float (Low to high) <i className="fa-solid fa-angle-down"></i>
        </p>
        <ul className="sub__menu">
          <li>Default</li>
          <li>Best deals</li>
          <li>Price: High to low</li>
          <li>Price: Low to high</li>
          <li>Float: High to low</li>
          <li>Float: Low to high</li>
        </ul>
      </div>
    </div> */}
        </div>
      </div>
    </div>
  );
  return (
    <>
      {before600}
      {before1200}
      <div className="header__sortList d-flex align-items-center justify-content-between mt-4">
        <div className="sortList">
          <ul className="d-flex align-items-center justify-content-between">
            {/* <HoverMenu /> */}
            <HoverMenu
              title={"Knives"}
              data={knivesData}
              onSelect={handleItemClick}
              selectedData={selectedData}
            />
            <HoverMenu
              title={"Gloves"}
              data={GlovesData}
              onSelect={handleItemClick}
              selectedData={selectedData}
            />
            <HoverMenu
              title={"Pistols"}
              data={PistolsData}
              onSelect={handleItemClick}
              selectedData={selectedData}
            />
            <HoverMenu
              title={"SMGs"}
              data={SMGsData}
              onSelect={handleItemClick}
              selectedData={selectedData}
            />

            <HoverMenu
              title={" Rifles"}
              data={RiflesData}
              onSelect={handleItemClick}
              selectedData={selectedData}
            />
            <HoverMenu
              title={"Sniper Rifles"}
              data={SniperData}
              onSelect={handleItemClick}
              selectedData={selectedData}
            />
            <HoverMenu
              title={"Shotguns"}
              data={ShotgunsData}
              onSelect={handleItemClick}
              selectedData={selectedData}
            />
            {/* <HoverMenu
              title={"Other"}
              data={[]}
              onSelect={handleItemClick}
              selectedData={selectedData}
            /> */}

            <li className="menu">
              <a href="#">Other</a>
            </li>

            {/* <li className="menu">
              <a href="#">Sniper Rifles</a>
              <ul className="sub__menu">
                <li>All</li>
                <li>MAG -7</li>
                <li>Nova</li>
                <li>Karambit</li>
                <li>Swaed-off</li>
                <li>XM1914</li>
              </ul>
            </li> */}
            {/* <li className="menu">
              <a href="#">Shotguns</a>
            </li> */}
            {/* <li>
              <a href="#">Other</a>
            </li> */}
          </ul>
        </div>
        <div className="searchList d-flex align-items-center justify-content-between">
          <div className="search d-flex align-items-center ">
            <i className="fa-solid fa-magnifying-glass px-2"></i>
            <input
              type="text"
              name="sortSearch"
              id="sortSearch"
              placeholder="Search..."
              onChange={(e) => {
                if (pathname == "/dojo-inventory") {
                  // console.log('datap[l;kl;k;lk')
                  dispatch(ddsApiCall({ search_value: e.target.value }));
                } else if (pathname == "/items-on-sale") {
                  dispatch(itemOnSaleApiCall({ search_value: e.target.value }));
                } else if (pathname == "/steam-inventory") {
                  dispatch(sdsApiCall({ search_value: e.target.value }));
                } else {
                  dispatch(mdsApiCall({ search_value: e.target.value }));
                }
              }}
            />
          </div>
          {/* <div className="sort__dropDown d-flex ">
            <span className="me-2 sort-by-text">Sort by:</span>
            <div className="s__sub-dropDown menu">
              <p>
                Float (Low to high) <i className="fa-solid fa-angle-down"></i>
              </p>
              <ul className="sub__menu">
                <li>Default</li>
                <li>Best deals</li>
                <li>Price: High to low</li>
                <li>Price: Low to high</li>
                <li>Float: High to low</li>
                <li>Float: Low to high</li>
              </ul>
            </div>
          </div> */}
          <div className="sort__dropDown d-flex ">
            <span className="me-2 sort-by-text">Sort by:</span>
            <div className="s__sub-dropDown menu">
              <p>
                ({selectSortBy}) <i className="fa-solid fa-angle-down"></i>
              </p>
              <ul className="sub__menu">
                <li
                  onClick={(e) => {
                    setSelectSortBy("Default");
                    if (pathname == "/dojo-inventory") {
                      // console.log('datap[l;kl;k;lk')
                      dispatch(ddsApiCall({ sort_by: "default" }));
                    } else if (pathname == "/items-on-sale") {
                      dispatch(itemOnSaleApiCall({ sort_by: "default" }));
                    } else if (pathname == "/steam-inventory") {
                      // console.log('datap[l;kl;k;lk')
                      dispatch(sdsApiCall({ sort_by: "default" }));
                    } else {
                      dispatch(mdsApiCall({ sort_by: "default" }));
                    }
                  }}
                >
                  Default
                </li>
                {/* <li
                  onClick={(e) => {
                    setSelectSortBy("Best deals");
                    if (pathname == "/dojo-inventory") {
                      // console.log('datap[l;kl;k;lk')
                      dispatch(ddsApiCall({ sort_by: "best_deals" }));
                    } else if (pathname == "/items-on-sale") {
                      dispatch(itemOnSaleApiCall({ sort_by: "best_deals" }));
                    } else if (pathname == "/steam-inventory") {
                      // console.log('datap[l;kl;k;lk')
                      dispatch(sdsApiCall({ sort_by: "best_deals" }));
                    } else {
                      dispatch(mdsApiCall({ sort_by: "best_deals" }));
                    }
                  }}
                >
                  Best deals
                </li> */}
                {pathname !== "/steam-inventory" && (
                  <>
                    <li
                  onClick={(e) => {
                    setSelectSortBy("Best deals");
                    if (pathname == "/dojo-inventory") {
                      // console.log('datap[l;kl;k;lk')
                      dispatch(ddsApiCall({ sort_by: "best_deals" }));
                    } else if (pathname == "/items-on-sale") {
                      dispatch(itemOnSaleApiCall({ sort_by: "best_deals" }));
                    } else if (pathname == "/steam-inventory") {
                      // console.log('datap[l;kl;k;lk')
                      dispatch(sdsApiCall({ sort_by: "best_deals" }));
                    } else {
                      dispatch(mdsApiCall({ sort_by: "best_deals" }));
                    }
                  }}
                >
                  Best deals
                </li>
                    <li
                      onClick={(e) => {
                        setSelectSortBy(" Price: High to low");
                        if (pathname == "/dojo-inventory") {
                          // console.log('datap[l;kl;k;lk')
                          dispatch(
                            ddsApiCall({ sort_by: "price_high_to_low" })
                          );
                        } else if (pathname == "/items-on-sale") {
                          dispatch(
                            itemOnSaleApiCall({ sort_by: "price_high_to_low" })
                          );
                        } else {
                          dispatch(
                            mdsApiCall({ sort_by: "price_high_to_low" })
                          );
                        }
                      }}
                    >
                      Price: High to low
                    </li>
                    <li
                      onClick={(e) => {
                        setSelectSortBy("Price: Low to high");
                        if (pathname == "/dojo-inventory") {
                          // console.log('datap[l;kl;k;lk')
                          dispatch(
                            ddsApiCall({ sort_by: "price_low_to_high" })
                          );
                        } else if (pathname == "/items-on-sale") {
                          dispatch(
                            itemOnSaleApiCall({ sort_by: "price_low_to_high" })
                          );
                        } else {
                          dispatch(
                            mdsApiCall({ sort_by: "price_low_to_high" })
                          );
                        }
                      }}
                    >
                      Price: Low to high
                    </li>
                  </>
                )}
                    <li
                      onClick={(e) => {
                        setSelectSortBy("Float: High to low");
                        if (pathname == "/dojo-inventory") {
                          // console.log('datap[l;kl;k;lk')
                          dispatch(
                            ddsApiCall({ sort_by: "float_high_to_low" })
                          );
                        } else if (pathname == "/items-on-sale") {
                          dispatch(
                            itemOnSaleApiCall({ sort_by: "float_high_to_low" })
                          );
                        } else {
                          dispatch(
                            mdsApiCall({ sort_by: "float_high_to_low" })
                          );
                        }
                      }}
                    >
                      Float: High to low
                    </li>
                    <li
                      onClick={(e) => {
                        setSelectSortBy("Float: Low to high");
                        if (pathname == "/dojo-inventory") {
                          // console.log('datap[l;kl;k;lk')
                          dispatch(
                            ddsApiCall({ sort_by: "float_low_to_high" })
                          );
                        } else if (pathname == "/items-on-sale") {
                          dispatch(
                            itemOnSaleApiCall({ sort_by: "float_low_to_high" })
                          );
                        } else {
                          dispatch(
                            mdsApiCall({ sort_by: "float_low_to_high" })
                          );
                        }
                      }}
                    >
                      Float: Low to high
                    </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomNav;
