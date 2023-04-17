const WriteHabit = () => {
  return (
    <div className="WriteHabit">
      <div className="title_box">
        <input placeholder="Your new habit" className="title_input"></input>
      </div>
      <div className="content_box">
        <textarea placeholder="Write about your habit"></textarea>
      </div>
    </div>
  );
};

export default WriteHabit;
