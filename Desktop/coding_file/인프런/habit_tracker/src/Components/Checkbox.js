import { useState } from "react";

const Checkbox = ({ props }) => {
  const [click, setClick] = useState(false);
  const clickItem = (e) => {
    setClick((prev) => {
      return !prev;
    });
  };
  return (
    <div className="CheckBoxList">
      <div>
        {props.map((item) => (
          <span>{item}</span>
        ))}
      </div>
      <div className="Checkbox">
        <div
          className={"click" + (click ? "active" : "notactive")}
          onClick={clickItem}
        ></div>
      </div>
    </div>
  );
};

export default Checkbox;
