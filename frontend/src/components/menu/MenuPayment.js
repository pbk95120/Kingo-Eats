import Btn from "../common/Btn";
import { useState } from "react";
import { useParams } from "react-router-dom";

const MenuPayment = () => {
  const menuItemsData = [
    { id: 1, name: "야채비빔밥", price: "4,300원", imagePath: "/images/학식1.svg", hearts: 5 },
    { id: 2, name: "우삼겹순두부찌개", price: "5,000원", imagePath: "/images/우삼겹순두부찌개.svg", hearts: 3 },
    { id: 3, name: "자장면", price: "5,000원", imagePath: "/images/자장면.svg", hearts: 8 },
    { id: 4, name: "등심돈까스", price: "5,500원", imagePath: "/images/등심돈까스.svg", hearts: 2 },
  ];

  const { id } = useParams();
  const menuItem = menuItemsData.find((item) => item.id === parseInt(id, 10));

  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <section>
      <div className="bg-white rounded mt-12 pb-4">
        <p className="text-2xl text-textdark font-bold m-0 px-3 py-3">상품정보</p>
        <div className="flex justify-between items-end mx-3">
          <img src={process.env.PUBLIC_URL + "/images/학식" + id + ".svg"} className="w-40 h-40 object-cover rounded" />
          <div className="flex-column pr-">
            <p className="text-m text-textdark m-0 text-right">학생회관</p>
            <p className="text-2xl text-textdark font-bold m-0 text-right">{menuItem.name}</p>
            <p className="text-xl text-textdark font-bold m-0 text-right">{menuItem.price}</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded mt-10 pb-4">
        <p className="text-2xl text-textdark font-bold m-0 px-3 py-3">결제 방법</p>
        <div className="px-3">
          <button
            className={`w-full border-2 py-2 rounded ${activeButton === "card" ? "bg-green text-white" : ""}`}
            onClick={() => {
              handleButtonClick("card");
            }}
          >
            빠른카드결제
          </button>
        </div>
        <div className="width-100% px-3 py-3 flex gap-3">
          <button
            className={`w-full border-2 py-2 rounded ${activeButton === "naver" ? "bg-green text-white" : ""}`}
            onClick={() => {
              handleButtonClick("naver");
            }}
          >
            네이버페이
          </button>
          <button
            className={`w-full border-2 py-2 rounded ${activeButton === "kakao" ? "bg-green text-white" : ""}`}
            onClick={() => {
              handleButtonClick("kakao");
            }}
          >
            카카오페이
          </button>
          <button
            className={`w-full border-2 py-2 rounded ${activeButton === "payco" ? "bg-green text-white" : ""}`}
            onClick={() => {
              handleButtonClick("payco");
            }}
          >
            페이코
          </button>
        </div>
        <div className="px-3">
          <Btn text="결제하기" url={"/menu/" + id + "/password"}></Btn>
        </div>
      </div>
    </section>
  );
};

export default MenuPayment;
