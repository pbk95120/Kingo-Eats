import Btn from "../common/Btn";

const Recommand = () => {
  const menuItem = { id: 1, name: "야채비빔밥", price: "4,300원", imagePath: "/images/학식1.svg", hearts: 5 };

  return (
    <section>
      <img src={process.env.PUBLIC_URL + "/images/학식1.svg"} className="mt-3 w-full h-72 object-cover rounded" />
      <div className="w-full h-80 mt-4 bg-white rounded">
        <p className="text-sm text-textdark m-0 pl-5 pt-4">학생회관</p>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-textdark m-0 pl-5">{menuItem.name}</p>
          <p className="text-xl font-bold text-textdark m-0 pr-4">{menuItem.price}</p>
        </div>
        <div className="flex items-center justify-end pl-2 pr-4 pb-2">
          <img src={process.env.PUBLIC_URL + "/images/추천_별.svg"} />
          <p className="text-sm text-textgray m-0">4,9</p>
        </div>
        <p className="text-sm text-textgray m-0 px-3 py-1 pb-2">
          야채 비빔밥은 한국의 전통 요리 중 하나로, 다양한 신선한 야채와 밥, 그리고 고추장 기반의 양념을 함께 섞어 먹는
          음식입니다.
        </p>
        <div className="pl-3">
          <Btn text="구매하기" url={"/menu/1"}></Btn>
        </div>
      </div>
    </section>
  );
};

export default Recommand;
