import Myheader from "../Components/Myheader";
import WriteHabit from "../Components/WriteHabit";
const New = () => {
  return (
    <div className="New">
      <Myheader headtext={"Habit"} rightbtn={"d"} />
      <WriteHabit />
    </div>
  );
};
export default New;
