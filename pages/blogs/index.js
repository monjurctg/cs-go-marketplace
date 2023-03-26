import Image from "next/image";
import React, {useEffect, useState} from "react";
import Breadcrumb from "../../components/layouts/Breadcrumb";
import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";
import Paginition from "../../components/ui/Paginition";
import blogServices from "../../services/blogService";
import img1 from "../../public/img/blog/Rectangle 37 (1).png";
import Link from "next/link";
import Loader from "../../components/ui/Loader";
const blogs2 = [
  {
    date: "06/24/2022, 02:10 PM",
    title: "Skins Dojo update [23.06.2022]",
    description: `We improve the BitSkins platform every day by
  releasing new features, fixing bugs, and much more.
  Here's what's new in the update
  (23.06.2022)`,
    img: "img/blog/Rectangle 37 (3).png",
  },
  {
    date: "06/24/2022, 02:10 PM",
    title: "Skins Dojo update [23.06.2022]",
    description: `We improve the BitSkins platform every day by
  releasing new features, fixing bugs, and much more.
  Here's what's new in the update
  (23.06.2022)`,
    img: "img/blog/Rectangle 37 (3).png",
  },
  {
    date: "06/24/2022, 02:10 PM",
    title: "Skins Dojo update [23.06.2022]",
    description: `We improve the BitSkins platform every day by
  releasing new features, fixing bugs, and much more.
  Here's what's new in the update
  (23.06.2022)`,
    img: "img/blog/Rectangle 37 (4).png",
  },
  {
    date: "06/24/2022, 02:10 PM",
    title: "Skins Dojo update [23.06.2022]",
    description: `We improve the BitSkins platform every day by
  releasing new features, fixing bugs, and much more.
  Here's what's new in the update
  (23.06.2022)`,
    img: "img/blog/Rectangle 37 (2).png",
  },
];

function Index() {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const fetchBolgs = async () => {
    setLoading(true);
    const res = await blogServices.allBlog();
    console.log(res, "blogs");
    if (res.status === 200) {
      setLoading(false);
      setBlogs(res.data.data);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchBolgs();
  }, []);

  // console.log(blogData[0], "blogs page");

  const blog = blogs2.map((blog, index) => (
    <>
      <div className="col-md-6" key={index}>
        <div className="blog mt-4">
          <div className="blog_img">
            <img
              className="image"
              src={blog?.img}
              // height={300}
              sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
              // width="500"
              alt=""
            />
          </div>
          <div className="blog_content">
            <span>{blog.date}</span>
            <h5>{blog.title}</h5>
            <p>{blog.description}</p>
            <Link href={`/blogs/${blog?.slug}`}>
              <a>
                Read more <i className="fa-solid fa-arrow-right"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  ));

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
        <section className="market section_center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 section__title">
                <Breadcrumb name={"Blog"} title={"Latest Articles"} />
              </div>
              <div className="col-xl-12">
                <div className="blog d-flex align-items-center mt-5">
                  <div className="blog_img bl">
                    <img
                      className=""
                      // src={blogData[0]?.photo?.img_url}
                      alt=""
                    />
                  </div>
                  <div className="blog_content">
                    <span>06/24/2022, 02:10 PM</span>
                    <h5>
                      Skins Dojo is now the Official Skin Marketplace partner
                      for the Champion of Champions Tour 2022-2024
                    </h5>
                    <p>
                      Skins Dojo will be present across every match of CCT on
                      the English-speaking channel. The cooperation will bring
                      exclusive BitSkins offerings to the viewers and fans of
                      the Champion of Champions Tour and shall also see both
                      parties actively involving the community and creating
                      engaging content together.
                    </p>
                    <a href="article.html">
                      Read more <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="row">{blog}</div>
              </div>
              <Paginition />
            </div>
          </div>
        </section>
      </main>
      <Footer page={"blog"} />
    </>
  );
}

export default Index;

// export async function getStaticProps() {
//   const res = await blogServices.allBlog();
//   console.log("resasdasblog", res);

//   return {
//     props: {
//       blogs2: res.data,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     revalidate: 10, // In seconds
//   };
// }
