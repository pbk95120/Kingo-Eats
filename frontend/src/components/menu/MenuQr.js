const MenuQr = () => {
  return (
    <section>
      <div className="w-11/12 h-148 bg-white rounded mx-auto mt-12">
        <div className="flex flex-column justify-center items-center">
          <p className="text-2xl text-textdark font-bold m-0 pt-20">학생회관 식당</p>
          <p className="text-sm text-textdark m-0 pt-4">QR 코드를 스캔하면 결제가 완료됩니다.</p>
          <img src={process.env.PUBLIC_URL + "/images/QR.svg"} className="object-cover pt-20" />
        </div>
      </div>
    </section>
  );
};

export default MenuQr;
