import {useRouter} from "next/router";
import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import Breadcrumb from "../../components/layouts/Breadcrumb";
import Footer from "../../components/ui/Footer";
import Loader from "../../components/ui/Loader";
import Navbar from "../../components/ui/Navbar";
import blogServices from "../../services/blogService";

function SingleBlog() {
  const router = useRouter();
  const {slug} = router.query;
  console.log(slug);
  const [singleBlog, setSingleBlog] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchBlog = async () => {
    try {
      const res = await blogServices.singleBlog(slug);

      if (res.status === 200) {
        setLoading(false);
        setSingleBlog(res.data.data);
      } else {
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="header_area">
        <Navbar isAuth={true} />
        <hr className="mt-3 mb-5" />
      </div>
      <main className="pb-5">
        <section className="market">
          <div className="container-lg">
            <div className="row">
              <div className="col-xl-12 section__title">
                <Breadcrumb name={slug} />
              </div>
              <div className="col-md-12">
                <div className="blog mt-4 mb-4">
                  <div className="ar_img">
                    <img
                      src={singleBlog.photo.img_url}
                      className="w-100"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <div className="blog ar_content border-0 rounded-0">
                      <div className="blog_content  p-0">
                        <div className="row ">
                          <span
                            className="mb-3 col-lg-3 d-flex align-items-center justify-content-center col-sm-4 text-center"
                            style={{maxHeight: "30px"}}>
                            06/24/2022, 02:10 PM
                          </span>
                          <p className="mb-4 col-lg-9 col-sm-8">
                            {/* Skins Dojo will be present across every match of CCT
                            on the English-speaking channel. The cooperation
                            will bring exclusive BitSkins offerings to the
                            viewers and fans of the Champion of Champions Tour
                            and shall also see both parties actively involving
                            the community and creating engaging content
                            together. */}
                            {singleBlog.title}
                          </p>
                        </div>
                        <p className="ar_para">{singleBlog.description}</p>
                        {/* <p className="ar_para">
                          Champion of Champions Tour is the first competition on
                          the CS:GO scene to be jointly organised by leading
                          esports firms - FACEIT, Eden Esports, Relog Media,
                          Black Molly Entertainment, Fantasy Expo, and regional
                          organisers, commissioned by GRID Esports, the leading
                          game data platform. The tour is distributed across
                          seven unique regions throughout North America, South
                          America, and Europe where the Tour is executed by the
                          regional partners - BTSBrasilTV, FiReSPORTS, Fragster,
                          REPUBLEAGUE, Relog Media, Gjirafa, and Black Molly
                          Entertainment. Champion of Champions Tour offers one
                          of the highest prize pools in esports history -
                          $3,400,000 USD.
                          <br />
                          <br />
                          ‘BitSkins truly understands the interests of esports
                          fans and caters to their needs with a unique offering.
                          We are thrilled to partner with them and enable
                          emerging, regional esports talent to build a name for
                          themselves while providing exclusive offers to their
                          fans and supporters. We are committed to building a
                          sustainable ecosystem across multiple tiers and are
                          thrilled to partner with BitSkins to deliver the best
                          fan experience to Champion of Champions Tour viewers’
                          - says Tom Warburton, COO of GRID Esports.
                          <br />
                          <br />
                          BitSkins is one of the most matured and
                          widely-acknowledged third-party CS:GO marketplaces
                          trusted by millions of users worldwide. Originally
                          founded in July 2015, BitSkins has been prevalent as
                          one of the biggest third-party marketplaces dedicated
                          to CS:GO.
                          <br />
                          <br />
                          ‘We have been actively involved in the esports scene
                          since the company’s inception. Champion of Champions
                          Tour’s vision to enable the growth of the new talents
                          is very much aligned with our values and we are happy
                          to support the tournament over the upcoming 18 months.
                          Partnering with GRID we set ourselves the long-term
                          objectives to deliver the best quality esports
                          experience for the fans and use the opportunity to
                          mature with the audience.” - says Anna
                          Zamorniak-Urbaniak, CEO of BitSkins.
                          <br />
                          <br />
                          Champion of Champions Tour is set to start in July
                          2022 and the first stage will comprise regional
                          tournaments in the designated regions with their own
                          cycles of Open Qualification, ultimately leading to
                          the CCT Global Finals LAN event, to be held at the
                          start of 2024.
                          <br />
                          <br />
                          About Champion of Champions Tour
                          <br />
                          <br />
                          Champion of Champions Tour is the first competition on
                          the CS:GO scene to be jointly organised by leading
                          esports firms FACEIT, Eden Esports, Relog Media, Black
                          Molly Entertainment, Fantasy Expo, and regional
                          organisers, commissioned by GRID Esports. The tour is
                          distributed across seven unique regions throughout
                          North America, South America, and Europe where the
                          Tour is executed by the regional partners. Champion of
                          Champions Tour offers one of the highest prize pools
                          in esports history - $3,400,000 USD. The Champion of
                          Champions Tour’s mission is to build into the
                          ecosystem of professional Counter-Strike across
                          multiple tiers, providing an opportunity for emerging,
                          regional esports talent to prove themselves and shine
                          - is the embodiment of the esports community’s
                          character and values.
                          <br />
                          <br />
                          For media inquiries please contact: dominika@grid.gg
                          <br />
                          <br />
                          About BitSkins
                          <br />
                          <br />
                          Originally founded in 2015 with the purpose of serving
                          as a middleman for virtual gaming goods and
                          cryptocurrencies, the company`&#39;` services have
                          continued to grow and they now support a wide variety
                          of accommodations for everyone`&#39;` needs. BitSkins
                          is one of the most reputable virtual items platforms
                          for CSGO skins and has been amongst leaders in the
                          industry. Customizable features have always been a
                          part of games but no other game has reached the level
                          of complexity the micro-economy CSGO has built around
                          skins. We`&#39;`re thrilled to be a part of the
                          fast-growing virtual world we`&#39;`re currently a
                          part of and cannot wait to see what the future
                          technology holds for us.
                          <br />
                          <br />
                          For media inquiries please contact: lukas@bitskins.com
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p className="latest">latest posts</p>
                    <div className="d-flex    d-md-block justify-content-between flex-wrap">
                      <div className="blog blog-sm   rounded-3 mb-4 mt-4">
                        <div className="blog_img arSide_img">
                          <img
                            className="w-100"
                            src="/img/blog/Rectangle 37 (2).png"
                            alt=""
                          />
                        </div>
                        <div className="blog_content p-3">
                          <span className="bg-transparent p-0">
                            06/24/2022, 02:10 PM
                          </span>
                          <h5 className="fs-4">
                            Skins Dojo update [23.06.2022]
                          </h5>
                          <p>
                            We improve the BitSkins platform every day by
                            releasing new features, fixing bugs, and much more.
                            Here`&#39;` what`&#39;` new in the update
                            (23.06.2022)
                          </p>
                          <a href="#">
                            Read more{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                      <div className="blog blog-sm  rounded-3 mb-4 mt-4">
                        <div className="blog_img arSide_img">
                          <img
                            className="w-100"
                            src="/img/blog/Rectangle 37 (1).png"
                            alt=""
                          />
                        </div>
                        <div className="blog_content p-3">
                          <span className="bg-transparent p-0">
                            06/24/2022, 02:10 PM
                          </span>
                          <h5 className="fs-4">
                            Skins Dojo update [23.06.2022]
                          </h5>
                          <p>
                            We improve the BitSkins platform every day by
                            releasing new features, fixing bugs, and much more.
                            Here`&#39;` what`&#39;` new in the update
                            (23.06.2022)
                          </p>
                          <a href="#">
                            Read more{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                      <div className="blog blog-sm rounded-3 mt-4">
                        <div className="blog_img arSide_img">
                          <img
                            className="w-100"
                            src="/img/blog/Rectangle 37 (4).png"
                            alt=""
                          />
                        </div>
                        <div className="blog_content p-3">
                          <span className="bg-transparent p-0">
                            06/24/2022, 02:10 PM
                          </span>
                          <h5 className="fs-4">
                            Skins Dojo update [23.06.2022]
                          </h5>
                          <p>
                            We improve the BitSkins platform every day by
                            releasing new features, fixing bugs, and much more.
                            Here`&#39;` what`&#39;` new in the update
                            (23.06.2022)
                          </p>
                          <a href="#">
                            Read more{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>

                      <div className="blog blog-sm  rounded-3 mb-4 mt-4">
                        <div className="blog_img arSide_img">
                          <img
                            className="w-100"
                            src="/img/blog/Rectangle 37 (1).png"
                            alt=""
                          />
                        </div>
                        <div className="blog_content p-3">
                          <span className="bg-transparent p-0">
                            06/24/2022, 02:10 PM
                          </span>
                          <h5 className="fs-4">
                            Skins Dojo update [23.06.2022]
                          </h5>
                          <p>
                            We improve the BitSkins platform every day by
                            releasing new features, fixing bugs, and much more.
                            Here`&#39;` what`&#39;` new in the update
                            (23.06.2022)
                          </p>
                          <a href="#">
                            Read more{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SingleBlog;
