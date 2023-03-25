import React, {useEffect, useState} from "react";

function CheckBox() {
  const [isCheck, setIsCheck] = useState(false);

  const handleChange = (e) => {
    setIsCheck(e.target.checked);
  };
  return (
    <label className="checkbox-container">
      <input onChange={handleChange} type="checkbox" checked={isCheck} />
      <span className="checkmark"></span>
    </label>
  );
}

export default CheckBox;
