import { useNavigate } from "react-router-dom";

const Myheader = ({ headtext, rightbtn }) => {
  const navigate = useNavigate();

  return (
    <div className="Myheader">
      <div
        className="headtext"
        onClick={() => {
          navigate("/");
        }}
      >
        {headtext}
      </div>

      <div
        className="rightbtn"
        onClick={() => {
          navigate("/New");
        }}
      >
        {rightbtn}
      </div>
    </div>
  );
};

export default Myheader;
