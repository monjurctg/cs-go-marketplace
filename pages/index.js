import Image from "next/image";
import BestDetails from "../components/home/BestDetails";
// import HeaderSlider from "../components/home/HeaderSlider";
import MaskGroup from "../public/img/Mask group.png";
import HowItwork from "../components/home/HowItwork";
import MarketPlace from "../components/home/MarketPlace";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import Link from "next/link";

// import styles from "../styles/Home.module.css";

export default function Home() {
  const color = typeof window !== "undefined" ? "red" : "blue";

  return (
    <>
      <header
        className="header_area "
        style={{backgroundImage: `url("img/bg.png")`}}>
        <Navbar isBottomNav={false} />
        <div className="container" style={{maarginTop: "30px"}}>
          <div className="row">
            <div className="col-xl-12 mt-4">
              <h1 style={{fontSize: "60px", paddingRight: 20}}>Buy or Sell</h1>
              <div className="hero_bnnr">
                <Image
                  src={MaskGroup}
                  alt="bnnr"
                  style={{
                    maxWidth: "60%",
                    height: "680px",
                  }}
                />
              </div>
              <h3>Gear up for your next stylish clutch</h3>
              <div className="hero_btn">
                <div className="mpBtn text-center">
                  <Link href={"/market"}>
                    <button className="btn" style={{width: 256}}>
                      Check out the Market
                    </button>
                  </Link>
                </div>
              </div>
              {/* <HeaderSlider /> */}
              <BestDetails />
            </div>
          </div>
        </div>
      </header>
      <main>
        <HowItwork />
        <MarketPlace />
      </main>
      <Footer />
    </>
  );
}
