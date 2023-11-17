import React, { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import Title from "../../components/common/Title";
import { TitleContext } from "..";
import { useNavigate } from "react-router-dom";

export default function Review() {
  const menu = { place: "학생회관", name: "야채비빔밥" };
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const totalStars = 5;
  const { setTitle } = useContext(TitleContext);
  const navigate = useNavigate();
  setTitle("리뷰 작성");
  return (
    <div className="flex flex-col items-center relative h-full">
      <div className="flex flex-col items-center w-full bg-white">
        <span className="font-thin text-sm mt-3">{menu.place}</span>
        <span className="font-bold text-2xl my-2">{menu.name}</span>
        <div className="flex justify-center items-center gap-x-3 mt-3 mb-5">
          {[...Array(totalStars)].map((_, i) => (
            <FaStar
              key={i}
              className={`cursor-pointer transition-colors duration-200 ${
                (hoverRating || rating) > i
                  ? "text-orange-500"
                  : "text-gray-200"
              }`}
              size={36}
              onClick={() => setRating(i + 1)}
              onMouseEnter={() => setHoverRating(i + 1)}
              onMouseLeave={() => setHoverRating(rating)}
            />
          ))}
        </div>
      </div>
      <input
        type="text"
        className="font-thin text-sm m-3 w-full h- px-2 py-1 rounded "
        placeholder="음식에 대한 솔직한 리뷰를 남겨주세요."
      />
      <div className="absolute bottom-[30px] left-0 right-0 flex justify-center w-full py-4 bg-white">
        <button
          className="w-[327px] h-[60px] bg-green hover:shadow-md text-white font-bold rounded"
          onClick={() => navigate(-1)}
        >
          작성
        </button>
      </div>
    </div>
  );
}
