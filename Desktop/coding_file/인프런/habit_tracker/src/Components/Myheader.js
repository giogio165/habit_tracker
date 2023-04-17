const Myheader = ({ headtext, rightbtn }) => {
  return (
    <div className="Myheader">
      <div className="headtext">{headtext}</div>
      <div className="rightbtn">{rightbtn}</div>
    </div>
  );
};

export default Myheader;
