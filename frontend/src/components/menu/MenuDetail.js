import { Link, NavLink } from "react-router-dom";
import Btn from "../common/Btn";

const MenuDetail = () => {
  const menuItems = [{ id: 1, name: "야채비빔밥", price: "4,300원", imagePath: "/images/학식1.svg" }];

  return (
    <section>
      <div className="bg-white rounded mb-2">
        <img src={process.env.PUBLIC_URL + "/images/학식1.svg"} className="mt-2 w-full h-52 object-cover rounded" />
        <p className="text-sm text-textdark m-0 pl-4 pt-2.5">학생회관</p>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-textdark m-0 pl-4">야채비빔밥</p>
          <p className="text-xl font-bold text-textdark m-0 pr-4">3,000원</p>
        </div>
        <div className="flex items-center w-full justify-end pr-4">
          <img src={process.env.PUBLIC_URL + "/images/추천_별.svg"} />
          <p className="text-sm text-textgray m-0">4,9</p>
        </div>

        <p className="text-sm text-textgray m-0 px-3 py-1">
          메뉴에 대한 설명이 들어갑니다.메뉴에 대한 설명이 들어갑니다.메뉴에 대한 설명이 들어갑니다.메뉴에 대한 설명이
          들어갑니다.메뉴에 대한 설명이 들어갑니다.메뉴에 대한 설명이 들어갑니다.메뉴에 대한 설명이 들어갑니다.메뉴에
          대한 설명이 들어갑니다.메뉴에 대한 설명이 들어갑니다.메뉴에 대한 설명이 들어갑니다.
        </p>
      </div>
      <div className="bg-white rounded">
        <div className="flex">
          <p className="text-2xl font-bold text-textdark m-0 pl-4 py-2">후기</p>
          <div className="flex items-center justify-end  pl-2 pr-4">
            <img src={process.env.PUBLIC_URL + "/images/추천_별.svg"} />
            <p className="text-sm text-textgray m-0">4,9</p>
          </div>
        </div>
        <div className="flex items-center pl-3 pb-1 gap-2">
          <div className="rounded-full w-18 h-18">
            <img src={process.env.PUBLIC_URL + "/images/명륜이.svg"} className="object-cover" />
          </div>
          <div className="flex-column">
            <p className="text-sm text-textdark m-0">User</p>
            <div className="flex items-center justify-end">
              <img src={process.env.PUBLIC_URL + "/images/추천_별.svg"} />
              <p className="text-sm text-textgray m-0">4,9</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-textdark m-0 pl-4 pb-3">음식이 맛있는데 양이 적어요.</p>
        <div className="pl-3">
          <Btn text="구매하기" url="/menu/:id/payment"></Btn>
        </div>
      </div>
    </section>
  );
};

export default MenuDetail;
