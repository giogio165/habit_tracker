import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  const [originData, setOriginData] = useState(); //원본, 수정된 데이터
  const navigate = useNavigate();
  const diaryList = useContext(DiaryStateContext);
  const { id } = useParams();

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정일기장 - ${id}번 일기 수정`;
  }, []);
  useEffect(() => {
    if (diaryList.length >= 1) {
      //일기데이터가 하나라도 있을 때

      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        alert("없는 일기입니다");
        navigate("/", { replace: true }); //repalce:true 는 뒤로가기 못하게
      }
    }
  }, [id, diaryList]);
  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}{" "}
    </div>
  );
};

export default Edit;
