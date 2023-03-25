import React from "react";

function HoverMenu({data, title, onSelect, selectedData}) {
  // console.log(title);
  return (
    <>
      <li className="menu">
        <a href="#">{title}</a>
        <ul className="sub__menu">
          {data.map((name, index) => (
            <>
              <li
                onClick={() => onSelect(name)}
                key={index}
                style={{
                  marginLeft: "10px",
                  display: "flex",
                  gap: "13px",
                }}>
                {selectedData.includes(name) && (
                  <span>
                    <img src="/img/check2.png" alt="" />
                  </span>
                )}

                <span
                  style={{
                    color: selectedData.includes(name) ? "gold" : "",
                  }}>
                  {" "}
                  {name}
                </span>
              </li>
            </>
          ))}
        </ul>
      </li>
    </>
  );
}

export default HoverMenu;
