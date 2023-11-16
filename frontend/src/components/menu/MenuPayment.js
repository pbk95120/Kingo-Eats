import Btn from "../common/Btn";

const MenuPayment = () => {
  return (
    <section>
      <div className="bg-white rounded mt-12 pb-4">
        <p className="text-2xl text-textdark font-bold m-0 px-3 py-3">상품정보</p>
        <div className="flex justify-between items-end mx-3">
          <img src={process.env.PUBLIC_URL + "/images/학식1.svg"} className=" w-42 h-42 object-cover rounded" />
          <div className="flex-column pr-">
            <p className="text-m text-textdark m-0 text-right">학생회관</p>
            <p className="text-2xl text-textdark font-bold m-0 text-right">야채비빔밥</p>
            <p className="text-xl text-textdark font-bold m-0 text-right">3,000원</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded mt-10 pb-4">
        <p className="text-2xl text-textdark font-bold m-0 px-3 py-3">결제 방법</p>
        <div className="px-3">
          <button className="w-full border-2 py-2 rounded">빠른카드결제</button>
        </div>
        <div className="width-100% px-3 py-3 flex gap-3">
          <button className="w-full border-2 py-2 rounded">네이버페이</button>
          <button className="w-full border-2 py-2 rounded">카카오페이</button>
          <button className="w-full border-2 py-2 rounded">페이코</button>
        </div>
        <div className="px-3">
          <Btn text="결제하기" url="/menu/qr"></Btn>
        </div>
      </div>
    </section>
  );
};

export default MenuPayment;
