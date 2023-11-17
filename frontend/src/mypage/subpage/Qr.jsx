import { useContext } from "react";
import Title from "../../components/common/Title";
import { TitleContext } from "..";

export default function Qr() {
  const qrcode = {
    menu: "야채비빔밥",
    price: "4300",
    place: "학생회관",
    image: "/images/qr.svg",
  };
  const { setTitle } = useContext(TitleContext);
  setTitle("식권 QR");
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-[340px] bg-white p-[10px]">
        <span className="font-bold text-2xl my-2">상품 정보</span>
        <div className="flex flex-row justify-between">
          <img src="/images/학식1.svg" alt="메뉴" />
          <div className="flex flex-col justify-end items-end gap-1">
            <span>{qrcode.place}</span>
            <span className="font-bold text-3xl">{qrcode.menu}</span>
            <span className="font-bold text-2xl">{qrcode.price}원</span>
          </div>
        </div>
        <span className="my-5 w-[100%] flex justify-center">
          QR 코드를 스캔하면 결제가 완료됩니다.
        </span>
        <div className="flex justify-center">
          <img src={qrcode.image} alt="QRCODE" />
        </div>
      </div>
    </div>
  );
}
