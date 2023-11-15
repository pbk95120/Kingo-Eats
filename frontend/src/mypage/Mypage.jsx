import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack, BiSolidEditAlt } from 'react-icons/bi';

export default function Mypage() {
  const user = {
    username: '익명의 율전이',
    userinfo: '성균관대학교 자과캠 소프트웨어학과 19학번',
  };
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <BiArrowBack />
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center gap-1">
          <span>{user.username}</span>
          <BiSolidEditAlt />
        </div>
        <img
          src="/favicon.ico"
          alt="이미지"
          className="w-[128px] h-[128px] rounded-full"
        />
        <span>{user.userinfo}</span>
        <button
          className="w-[343px] h-[52px] bg-green hover:shadow-md text-white font-bold rounded border-2 border-black mb-[2vh]"
          onClick={() => navigate('qr')}
        >
          식권 QR
        </button>
        <button
          className="w-[343px] h-[52px] bg-blue-500 hover:shadow-md text-white font-bold rounded border-2 border-black mb-[2vh]"
          onClick={() => navigate('menulist')}
        >
          학식 LIST
        </button>
        <button
          className="w-[343px] h-[52px] bg-white-500 hover:shadow-md text-black font-bold rounded border-2 border-black mb-[2vh]"
          onClick={() => navigate('card')}
        >
          결제 카드
        </button>
        <button
          className="w-[343px] h-[52px] bg-green hover:shadow-md text-white font-bold border-2 border-black rounded"
          onClick={() => navigate('history')}
        >
          주문 내역
        </button>
      </div>
    </div>
  );
}