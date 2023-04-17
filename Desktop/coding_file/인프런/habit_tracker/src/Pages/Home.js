import Myheader from "../Components/Myheader";
import Calendar from "../Components/Calendar";
import CheckBoxList from "../Components/CheckBoxList";

const Home = () => {
  const itemList = ["joging for 30min ", "eat 3 meals"];
  return (
    <div>
      <Myheader headtext={"Habit"} rightbtn={"add"} />
      <Calendar />
      <CheckBoxList props={itemList} />
    </div>
  );
};
export default Home;
