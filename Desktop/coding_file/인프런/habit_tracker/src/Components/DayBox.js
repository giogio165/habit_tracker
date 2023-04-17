import { useState } from "react";

const DayBox = () => {
  const weekArr = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const [clickedBoxes, setClickBoxes] = useState([]);

  const toggleBox = (index) => {
    if (clickedBoxes.includes(index)) {
      setClickBoxes(clickedBoxes.filter((it) => it !== index));
    } else {
      setClickBoxes([...clickedBoxes, index]);
    }
  };

  const weekBox = () => {
    const result = [];
    for (let i = 0; i < weekArr.length; i++) {
      result.push(
        <div
          key={i}
          className={`box ${clickedBoxes.includes(i) ? "clicked" : ""}`}
          onClick={() => toggleBox(i)}
        >
          {weekArr[i]}
        </div>
      );
    }
    return result;
  };

  return <div className="DayBox">{weekBox()}</div>;
};

export default DayBox;
