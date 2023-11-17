import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../components/common/Title";
import { TitleContext } from "..";
export default function History() {
  const menu = [
    {
      menu: "야채비빔밥",
      price: "4300",
      date: "2023.09.11 (금)",
      image: "/images/작은학식.svg",
      place: "학생회관",
    },
    {
      menu: "야채비빔밥",
      price: "4300",
      date: "2023.09.11 (금)",
      image: "/images/작은학식.svg",
      place: "학생회관",
    },
    {
      menu: "야채비빔밥",
      price: "4300",
      date: "2023.09.11 (금)",
      image: "/images/작은학식.svg",
      place: "학생회관",
    },
  ];
  const navigate = useNavigate();
  const { setTitle } = useContext(TitleContext);
  setTitle("주문 내역");
  return (
    <div className="flex flex-col items-center">
      {menu.map((item, idx) => (
        <div
          className="flex flex-col w-[340px] bg-white rounded-lg p-3 mb-3"
          key={`history-${idx}`}
        >
          <div className="flex flex-row justify-between items-center pb-2">
            <span className="text-sm">{item.date} 주문완료</span>
            <div
              className="flex items-center"
              onClick={() => navigate("/mypage/review")}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/edit.svg"}
                alt="edit"
              />
              <span className="ml-2 font-light text-sm">리뷰 작성</span>
            </div>
          </div>
          <div className="flex flex-row">
            <img src={item.image} alt={item.menu} />
            <div className="flex flex-col pl-2 gap-y-1">
              <span className="text-sm">{item.place}</span>
              <span className="text-2xl font-bold">{item.menu}</span>
              <span className="text-xl font-bold">{item.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
