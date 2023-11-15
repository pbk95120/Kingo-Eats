import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Btn(props) {
  const { text, url } = props;
  const navigate = useNavigate();
  return (
    <button
      className="w-[343px] h-[52px] bg-green hover:shadow-md text-white font-bold rounded border-2 border-black mb-[2vh]"
      onClick={() => navigate(url)}
    >
      {text}
    </button>
  );
}
