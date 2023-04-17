import Myheader from "../Components/Myheader.js";
import WriteHabit from "../Components/WriteHabit.js";

const Habit = () => {
  return (
    <div className="Habit">
      <Myheader headtext={"Habit"} rightbtn={"edit"} />
      <WriteHabit />
    </div>
  );
};

export default Habit;
