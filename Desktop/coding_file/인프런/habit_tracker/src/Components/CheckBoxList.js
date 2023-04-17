import DayBox from "./DayBox";

const CheckBoxList = ({ props }) => {
  return (
    <div className="CheckBoxList">
      {props.map((item) => (
        <div className="Habit" key={item}>
          <span className="itemList">{item}</span>
          <DayBox />
        </div>
      ))}
    </div>
  );
};
export default CheckBoxList;
