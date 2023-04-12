import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
import MyButton from "./MyButton";

//날짜 필터 옵션
const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];
//감정 필터 옵션
const filterOptionList = [
  { value: "all", name: "전부" },
  { value: "good", name: "좋은감정" },
  { value: "bad", name: "나쁜감정" },
];

//날짜 필터 함수
const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
});

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();
  //날짜 필터
  const [sortType, setSortType] = useState("latest");
  //감정 필터
  const [filter, setFilter] = useState("all");

  //날짜 필터 최신순,오래된순 정렬 함수
  const getProcessedDiaryList = () => {
    //감정 필터 함수
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };
    //비교함수
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const copyList = JSON.parse(JSON.stringify(diaryList)); //원본을 정렬하지않고, 복사를 통해 복사본만 정렬
    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));
    //filterCallBack에 it을 전달했을때 return true인 애들로만 filter하는 것
    const sortedList = filteredList.sort(compare); //비교해서 정렬
    return sortedList;
  };

  return (
    <div className="DiaryList">
      <div className="menu-wrapper">
        <div className="left-col">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
        <div className="right-col">
          <MyButton
            type={"positive"}
            text={"새 일기"}
            onClick={() => navigate("/new")}
          />
        </div>
      </div>
      {/* 리스트 */}
      {getProcessedDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
