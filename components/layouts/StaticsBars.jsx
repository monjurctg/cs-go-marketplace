import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setActiveStaticBar} from "../../redux/actions/staticBarActions";

function StaticsBars({arrays}) {
  const activeNow = useSelector((state) => state.staticBar.activeBar);
  // console.log("activeNow", activeNow);
  let dispatch = useDispatch();
  // console.log('arrays', arrays)
  useEffect(() => {
    dispatch(setActiveStaticBar(arrays[0]));
  }, []);

  let showBars = arrays?.map((item, index) => (
    <div className="filter" key={index}>
      <a
        href="#"
        className={`d-flex justify-content-between align-items-center ${
          activeNow === item ? "fq_ac" : ""
        }`}>
        {item}
        <span>
          <i className="fa-solid fa-chevron-right"></i>
        </span>
      </a>
    </div>
  ));
  return <div className="mr__filter">{showBars}</div>;
}

export default StaticsBars;
