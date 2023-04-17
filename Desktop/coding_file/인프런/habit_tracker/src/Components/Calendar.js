import { useState } from "react";

const Calendar = () => {
  const [curDate, setCurDate] = useState(new Date());

  const thisweek = `${curDate.getMonth() + 1}월`;

  const inWeek = () => {
    const newDate = new Date(curDate.getTime());
    newDate.setMonth(newDate.getMonth() + 1);
    setCurDate(newDate);
  };

  const deWeek = () => {
    const newDate = new Date(curDate.getTime());
    newDate.setMonth(newDate.getMonth() - 1);
    setCurDate(newDate);
  };

  return (
    <div className="Calendar">
      <div className="deWeek" onClick={deWeek}>
        -
      </div>
      <h2 className="thisweek">{thisweek}</h2>
      <div className="inWeek" onClick={inWeek}>
        +
      </div>
    </div>
  );
};

export default Calendar;
