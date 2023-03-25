import Link from "next/link";
import React from "react";

function MarketPlace() {
  return (
    <>
      {/* img/bg6\ 2.png */}
      <section
        className="marketPlace"
        style={{backgroundImage: `url("img/bg6\ 2.png")`}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 d-none d-lg-block ">
              <h2>Marketplace</h2>
              <div className="marketPlace__items d-flex justify-content-around">
                <div className="mpItems__list">
                  <span>
                    <p>1</p>
                  </span>
                  <h5>We care about our reputation</h5>
                  <p>
                    Verified sellers add skins to our bot. After the purchase
                    from us, a skin is yours. If the skin is trade locked, just
                    wait until it expires and withdraw to Steam.
                  </p>
                </div>
                <div className="mpItems__list" style={{
                  height: 170,
                }}>
                  <span>
                    <p>4</p>
                  </span>
                  <h5>Control your inventory</h5>
                  <p>
                    As a seller, you can always change the skin price or simply
                    remove the item from sale at any time.
                  </p>
                </div>
              </div>
              <div className="marketPlace__items d-flex justify-content-between">
                <div className="mpItems__list">
                  <span>
                    <p>2</p>
                  </span>
                  <h5>Bargain prices</h5>
                  <p>
                    Buyers always see comparable Steam prices on skin cards.
                    Sellers can choose either a custom or recommended price for
                    their items.
                  </p>
                </div>
                <div className="mpItems__list " style={{
                     height: 160,
                }}>
                  <span>
                    <p>5</p>
                  </span>
                  <h5>Share your shop</h5>
                  <p>
                    After putting skins on sale, you can share your dedicated
                    shop space for faster sales.
                  </p>
                </div>
              </div>
              <div className="marketPlace__items d-flex justify-content-around">
                <div className="mpItems__list">
                  <span>
                    <p>3</p>
                  </span>
                  <h5>Transparency</h5>
                  <p>
                    6% sales fee. No buyer fee. For all users, when you top up
                    or withdraw your balance, we charge payment processing fees,
                    which are always clearly displayed.
                  </p>
                </div>
                <div className="mpItems__list " style={{
                  height: 180,
                }}>
                  <span>
                    <p>6</p>
                  </span>
                  <h5>Community trust</h5>
                  <p>
                    We are partnered with renowned esports teams and content
                    creators whose shops you can buy from.
                  </p>
                </div>
              </div>
              <div className="mpBtn text-center">
                <Link href={"/market"}>
                <button className="btn" style={{width: "245px"}}>
                  Check out the Market
                </button>
                
                </Link>
              </div>
            </div>
            <div className="col-xl-12 d-none d-lg-none d-md-block ">
              <h2>Marketplace</h2>
              <div className="marketPlace__items d-flex justify-content-around">
                <div className="mpItems__list">
                  <span>
                    <p>1</p>
                  </span>
                  <h5>We care about our reputation</h5>
                  <p>
                    Verified sellers add skins to our bot. After the purchase
                    from us, a skin is yours. If the skin is trade locked, just
                    wait until it expires and withdraw to Steam.
                  </p>
                </div>
                <div className="mpItems__list">
                  <span>
                    <p>2</p>
                  </span>
                  <h5>Bargain prices</h5>
                  <p>
                    Buyers always see comparable Steam prices on skin cards.
                    Sellers can choose either a custom or recommended price for
                    their items.
                  </p>
                </div>
                <div className="mpItems__list">
                  <span>
                    <p>3</p>
                  </span>
                  <h5>Transparency</h5>
                  <p>
                    6% sales fee. No buyer fee. For all users, when you top up
                    or withdraw your balance, we charge payment processing fees,
                    which are always clearly displayed.
                  </p>
                </div>
                </div>
                <div className="marketPlace__items d-flex justify-content-around">
                <div className="mpItems__list"  
                // style={{
                //   height: 170,
                // }}
                >
                  <span>
                    <p>4</p>
                  </span>
                  <h5>Control your inventory</h5>
                  <p>
                    As a seller, you can always change the skin price or simply
                    remove the item from sale at any time.
                  </p>
                </div>
                <div className="mpItems__list "
            //     style={{
            //       height: 160,
            //  }}
                >
                  <span>
                    <p>5</p>
                  </span>
                  <h5>Share your shop</h5>
                  <p>
                    After putting skins on sale, you can share your dedicated
                    shop space for faster sales.
                  </p>
                </div>
                <div className="mpItems__list "
                // style={{
                //   height: 180,
                // }}
                >
                  <span>
                    <p>6</p>
                  </span>
                  <h5>Community trust</h5>
                  <p>
                    We are partnered with renowned esports teams and content
                    creators whose shops you can buy from.
                  </p>
                </div>
              </div>
              <div className="mpBtn text-center">
                <Link href={"/market"}>
                <button className="btn" style={{width: "245px"}}>
                  Check out the Market
                </button>
                
                </Link>
              </div>
            </div>
            <div className="col-xl-12  d-md-none d-sm-block ">
              <h2>Marketplace</h2>
              <div className="marketPlace__items flex-wrap d-flex justify-content-around">
                <div
                  className="mpItems__list"
                  style={{
                    width: "80%",
                    padding: "40px",
                  }}>
                  <span>
                    <p>1</p>
                  </span>
                  <h5>We care about our reputation</h5>
                  <p>
                    Verified sellers add skins to our bot. After the purchase
                    from us, a skin is yours. If the skin is trade locked, just
                    wait until it expires and withdraw to Steam.
                  </p>
                </div>
                <div
                  className="mpItems__list"
                  style={{
                    width: "80%",
                    padding: "30px",
                  }}>
                  <span>
                    <p>2</p>
                  </span>
                  <h5>Bargain prices</h5>
                  <p>
                    Buyers always see comparable Steam prices on skin cards.
                    Sellers can choose either a custom or recommended price for
                    their items.
                  </p>
                </div>
                <div
                  className="mpItems__list"
                  style={{
                    width: "80%",
                    padding: "30px",
                  }}>
                  <span>
                    <p>3</p>
                  </span>
                  <h5>Transparency</h5>
                  <p>
                    6% sales fee. No buyer fee. For all users, when you top up
                    or withdraw your balance, we charge payment processing fees,
                    which are always clearly displayed.
                  </p>
                </div>

                <div
                  className="mpItems__list"
                  style={{
                    width: "80%",
                    padding: "30px",
                    height: 150,
                  }}>
               
                  <span>
                    <p>4</p>
                  </span>
                  <h5>Control your inventory</h5>
                  <p>
                    As a seller, you can always change the skin price or simply
                    remove the item from sale at any time.
                  </p>
                </div>
                <div
                  className="mpItems__list "
                  style={{
                    width: "80%",
                    padding: "30px",
                    height: 150,
                  }}>
                  <span>
                    <p>5</p>
                  </span>
                  <h5>Share your shop</h5>
                  <p>
                    After putting skins on sale, you can share your dedicated
                    shop space for faster sales.
                  </p>
                </div>
                <div
                  className="mpItems__list "
                  style={{
                    width: "80%",
                    padding: "30px",
                  }}>
                  <span>
                    <p>6</p>
                  </span>
                  <h5>Community trust</h5>
                  <p>
                    We are partnered with renowned esports teams and content
                    creators whose shops you can buy from.
                  </p>
                </div>
              </div>
              {/* <div className="marketPlace__items d-flex justify-content-between">
                <div className="mpItems__list">
                  <span>
                    <p>2</p>
                  </span>
                  <h5>Bargain prices</h5>
                  <p>
                    Buyers always see comparable Steam prices on skin cards.
                    Sellers can choose either a custom or recommended price for
                    their items.
                  </p>
                </div>
              </div>
              <div className="marketPlace__items d-flex justify-content-around">
                <div className="mpItems__list">
                  <span>
                    <p>3</p>
                  </span>
                  <h5>Transparency</h5>
                  <p>
                    6% sales fee. No buyer fee. For all users, when you top up
                    or withdraw your balance, we charge payment processing fees,
                    which are always clearly displayed.
                  </p>
                </div>
              </div> */}
              <div className="mpBtn text-end">
                <Link href={"/market"}>
                <button className="btn btn-low">
                  Check out the Market
                </button>
                
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketPlace;
