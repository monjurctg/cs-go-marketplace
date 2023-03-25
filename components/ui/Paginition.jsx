import React from "react";

function Paginition({style, setPagaData, pageData, pageLength}) {
  let pages = [];
  for (let i = 1; i <= pageLength; i++) {
    pages.push(i);
  }

  return (
    <div
      className="pagination mt-5"
      style={{
        ...style,
        // minHeight: "100vh",
      }}>
      <i className="fa-solid fa-chevron-left"></i>
      <div className="paginationCount">
        {pages.map((page, index) => (
          <a
            href="#"
            style={{color: page === pageData?.page && "#f1c40f"}}
            key={index}
            onClick={() => setPagaData({...pageData, page: page})}>
            {page}
          </a>
        ))}
      </div>
      <i className="fa-solid fa-chevron-right"></i>
    </div>
  );
}

export default Paginition;
