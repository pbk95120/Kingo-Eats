import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Btn from "../components/common/Btn";
import Title from "../components/common/Title";
import { TitleContext } from ".";
export default function Mypage() {
  const user = {
    username: "익명의 율전이",
    userinfo: "성균관대학교 자과캠 소프트웨어학과 19학번",
  };
  const navigate = useNavigate();
  const { setTitle } = useContext(TitleContext);
  const [name, setName] = useState(user.username);
  const [edit, setEdit] = useState(false);
  setTitle("");
  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center gap-2 my-3">
          {edit ? (
            <input
              type="text"
              value={name}
              onChange={handleInputChange}
              autoFocus
              className="text-2xl text-center w-2/4 font-thin border-none bg-transparent focus:outline-none"
            />
          ) : (
            <span className="text-2xl">{name}</span>
          )}
          <img
            src={process.env.PUBLIC_URL + "/images/edit.svg"}
            alt="edit"
            style={{ cursor: "pointer" }}
            onClick={() => setEdit(!edit)}
          />
        </div>
        <img
          src={process.env.PUBLIC_URL + "/images/명륜이.svg"}
          alt="이미지"
          className="w-[128px] h-[128px] rounded-full"
        />
        <span className="font-bold my-3">{user.userinfo}</span>
        <Btn text="식권 QR" url="/mypage/qr" />
        <button
          className="w-[343px] h-[52px] bg-blue-500 hover:shadow-md text-white font-bold rounded border-2 border-black mb-[2vh]"
          onClick={() => navigate("menulist")}
        >
          학식 LIST
        </button>
        <button
          className="w-[343px] h-[52px] bg-white-500 hover:shadow-md text-black font-bold rounded border-2 border-black mb-[2vh]"
          onClick={() => navigate("card")}
        >
          결제 카드
        </button>
        <button
          className="w-[343px] h-[52px] bg-green hover:shadow-md text-white font-bold border-2 border-black rounded"
          onClick={() => navigate("history")}
        >
          주문 내역
        </button>
      </div>
    </div>
  );
}
