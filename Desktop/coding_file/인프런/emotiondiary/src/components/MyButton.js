const MyButton = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      // className은 문자열로 넣어줘야한다 그래서 join으로 띄워쓰기를 중간에 넣어준다.
      onClick={onClick}
    >
      {text}
    </button>
  );
};
MyButton.defaultProps = {
  type: "default",
};
export default MyButton;
