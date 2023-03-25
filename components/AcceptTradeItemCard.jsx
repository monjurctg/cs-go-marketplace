import React from "react";
import dots from "../public/images/dots.svg";
import lock from "../public/img/lock.svg";
function AcceptTradeItemCard({
  item,
  onSelectItem,
  selected,
  setSelected,
  index,
}) {
  return (
    <>
      <div style={{opacity: "50%"}} className="innr">
        <a href="#" className="mrkt_item">
          <h6>
            Water elemental <span>FN</span>
          </h6>
          <div className="bDeals__img">
            <img src="img/330x192 (1) 1.png" alt="" />
          </div>
          <div className="d-flex justify-content-between mb-3 align-items-center">
            <span
              style={{
                fontWeight: 400,
                fontSize: 16,
                alignSelf: "center",

                color: " #9DB4D3",
              }}>
              {item?.pincode ?? "726372"}
            </span>
            <div className="d-flex justify-content-between " style={{gap: 7}}>
              <img
                src={lock.src}
                alt=""
                style={{width: 16, height: "auto", marginBottom: 0}}
              />
              <p
                style={{
                  fontWweight: 400,
                  fontSize: 20,
                  textAlign: "right",
                  color: " #9DB4D3",
                }}>
                3D
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between position-relative">
            <p
              style={{
                fontWeight: 400,
                fontSize: 20,
                color: "#FFC700",
              }}>
              {/* <i className="fa-brands fa-steam-symbol"></i> */}${500}
            </p>
            <img
              src={dots.src}
              alt=""
              className="dots"
              style={{height: "auto", width: 16, marginBottom: 0}}
            />
            {/* <div className="dots-show">
        <img src={up.src} alt=""/>

        <div className="details">
          <div className="d-flex" style={{
                gap: 14,
                alignItems: "center",
                marginLeft:7,
                marginBottom: 15,
          }}>
            <img src={edit.src} alt=""/>
            <p>Change price</p>
          </div>
          <div className="d-flex"  style={{
                gap: 14,
                marginLeft:7,
                alignItems: "center",
          }}>
            <img src={disabled.src} alt=""/>
            <p>Delist item</p>
          </div>
        </div>

      </div> */}
          </div>
        </a>
        <p style={{color: "white"}} className="take">
          <i className="fa-regular fa-clock" style={{marginRight: 5}}></i>
          00:09:42
        </p>
        <span style={{color: "#05BB59"}} className="cancel">
          <i className="fa-solid fa-check"></i> Trade Accepted
        </span>
      </div>
      <div style={{opacity: "50%"}} className="innr">
        <a href="#" className="mrkt_item">
          <h6>
            Water elemental <span>FN</span>
          </h6>
          <div className="bDeals__img">
            <img src="img/330x192 (1) 1.png" alt="" />
          </div>
          <div className="d-flex justify-content-between mb-3 align-items-center">
            <span
              style={{
                fontWeight: 400,
                fontSize: 16,
                alignSelf: "center",

                color: " #9DB4D3",
              }}>
              {item?.pincode ?? "726372"}
            </span>
            <div className="d-flex justify-content-between " style={{gap: 7}}>
              <img
                src={lock.src}
                alt=""
                style={{width: 16, height: "auto", marginBottom: 0}}
              />
              <p
                style={{
                  fontWweight: 400,
                  fontSize: 20,
                  textAlign: "right",
                  color: " #9DB4D3",
                }}>
                3D
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between position-relative">
            <p
              style={{
                fontWeight: 400,
                fontSize: 20,
                color: "#FFC700",
              }}>
              {/* <i className="fa-brands fa-steam-symbol"></i> */}${500}
            </p>
            <img
              src={dots.src}
              alt=""
              className="dots"
              style={{height: "auto", width: 16, marginBottom: 0}}
            />
            {/* <div className="dots-show">
        <img src={up.src} alt=""/>

        <div className="details">
          <div className="d-flex" style={{
                gap: 14,
                alignItems: "center",
                marginLeft:7,
                marginBottom: 15,
          }}>
            <img src={edit.src} alt=""/>
            <p>Change price</p>
          </div>
          <div className="d-flex"  style={{
                gap: 14,
                marginLeft:7,
                alignItems: "center",
          }}>
            <img src={disabled.src} alt=""/>
            <p>Delist item</p>
          </div>
        </div>

      </div> */}
          </div>
        </a>
        <p style={{color: "white"}} className="take">
          <i className="fa-regular fa-clock" style={{marginRight: 5}}></i>
          00:09:42
        </p>
        <span style={{color: "#05BB59"}} className="cancel">
          <i className="fa-solid fa-check"></i> Trade Accepted
        </span>
      </div>
      <div style={{opacity: "50%"}} className="innr">
        <a href="#" className="mrkt_item">
          <h6>
            Water elemental <span>FN</span>
          </h6>
          <div className="bDeals__img">
            <img src="img/330x192 (1) 1.png" alt="" />
          </div>
          <div className="d-flex justify-content-between mb-3 align-items-center">
            <span
              style={{
                fontWeight: 400,
                fontSize: 16,
                alignSelf: "center",

                color: " #9DB4D3",
              }}>
              {item?.pincode ?? "726372"}
            </span>
            <div className="d-flex justify-content-between " style={{gap: 7}}>
              <img
                src={lock.src}
                alt=""
                style={{width: 16, height: "auto", marginBottom: 0}}
              />
              <p
                style={{
                  fontWweight: 400,
                  fontSize: 20,
                  textAlign: "right",
                  color: " #9DB4D3",
                }}>
                3D
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between position-relative">
            <p
              style={{
                fontWeight: 400,
                fontSize: 20,
                color: "#FFC700",
              }}>
              {/* <i className="fa-brands fa-steam-symbol"></i> */}${500}
            </p>
            <img
              src={dots.src}
              alt=""
              className="dots"
              style={{height: "auto", width: 16, marginBottom: 0}}
            />
            {/* <div className="dots-show">
        <img src={up.src} alt=""/>

        <div className="details">
          <div className="d-flex" style={{
                gap: 14,
                alignItems: "center",
                marginLeft:7,
                marginBottom: 15,
          }}>
            <img src={edit.src} alt=""/>
            <p>Change price</p>
          </div>
          <div className="d-flex"  style={{
                gap: 14,
                marginLeft:7,
                alignItems: "center",
          }}>
            <img src={disabled.src} alt=""/>
            <p>Delist item</p>
          </div>
        </div>

      </div> */}
          </div>
        </a>
        <p style={{color: "white"}} className="take">
          <i className="fa-regular fa-clock" style={{marginRight: 5}}></i>
          00:09:42
        </p>
        <span style={{color: "#05BB59"}} className="cancel">
          <i className="fa-solid fa-check"></i> Trade Accepted
        </span>
      </div>
    </>
  );
}

export default AcceptTradeItemCard;
