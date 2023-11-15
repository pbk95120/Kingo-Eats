import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function button() {
  const navigate = useNavigate();
  return (
    <button
      className="w-[343px] h-[52px] bg-green hover:shadow-md text-white font-bold rounded border-2 border-black mb-[2vh]"
      onClick={() =>
        navigate(
          '원하는 경로 여기에 넣기, 모르겠으면 Mypage 폴더에 Mypage.jsx 확인하기',
        )
      }
    />
  );
}
