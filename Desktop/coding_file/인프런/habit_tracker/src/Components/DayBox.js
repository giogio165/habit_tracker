const DayBox = () => {
  const weekArr = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const weekBox = () => {
    const result = [];
    for (let i = 0; i < weekArr.length; i++) {
      result.push(
        <div key={i} className="box">
          {/* {} */}
        </div>
      );
    }
    return result;
  };

  return <div className="DayBox">{weekBox()}</div>;
};

export default DayBox;
