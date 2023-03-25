import Link from "next/link";
import React from "react";

function NoItem({title, routePath, from, discription}) {
  return (
    <div className="inven__box">
      <div className="inven__content" style={{width: "100%", padding: "20px"}}>
        <h3 className="">
          {" "}
          {from == "market" ? "Nothing Found" : "No Items Available"}{" "}
        </h3>
        <p className="mb-4">{discription}</p>

        <Link href={`/${routePath}`}>
          <a href="" className="btn">
            {" "}
            {title}
          </a>
        </Link>
      </div>
      <div className="inve__img mb-4 mb-md-0">
        {from == "market" ? (
          <img src="img/marketNotFound.png" alt="" />
        ) : (
          <img src="img/pngaaa 2.png" alt="" />
        )}
      </div>
    </div>
  );
}

export default NoItem;
