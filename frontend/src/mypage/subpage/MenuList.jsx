import Title from "../../components/common/Title";
import { useNavigate } from "react-router-dom";
import Recommand from "../../components/recommand/Recommand";
import styled from "styled-components";
import { useContext } from "react";
import { TitleContext } from "..";

export default function MenuList() {
  const likes = [
    {
      menu: "야채비빔밥",
      price: "4300",
      star: 4.9,
      image: "/images/학식1.svg",
    },
    {
      menu: "우삼겹순두부찌개",
      price: "5000",
      star: 4.9,
      image: "/images/학식2.svg",
    },
    {
      menu: "짜장면",
      price: "5000",
      star: 4.9,
      image: "/images/학식3.svg",
    },
    {
      menu: "등심돈까스",
      price: "5500",
      star: 4.9,
      image: "/images/학식4.svg",
    },
  ];
  const navigate = useNavigate();
  const { setTitle } = useContext(TitleContext);
  setTitle("학식 LIST");
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-[340px] bg-white">
        <div className="flex flex-row justify-between items-center w-full h-[40px] mb-4 bg-green">
          <img src="/images/하트.svg" alt="love" className="ml-3" />
          <span className="font-bold text-white text-xl">학식 LIST</span>
          <img src="/images/하트.svg" alt="love" className="mr-3" />
        </div>
        <div className="flex flex-wrap justify-between items-stretch gap-y-5 px-[10px]">
          {likes.map((item) => (
            <div
              className="rounded-lg"
              key={item.menu}
              onClick={() => navigate("/menu/1")}
              style={{ cursor: "pointer" }}
            >
              <div className="w-[152px] h-[152px] rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.menu}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-1">
                <span className="text-md">{item.menu}</span>
                <div className="flex flex-row justify-between">
                  <span className="font-bold">{item.price}원</span>
                  <div className="flex flex-row items-center">
                    <img src="/images/추천_별.svg" alt="star" />
                    <span className="font-thin text-sm ml-1">{item.star}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
