const MenuDetail = () => {
  const menuItem = {
    id: 1,
    name: "야채비빔밥",
    price: "4,300원",
    imagePath: "/images/학식1.svg",
    hearts: 5,
  };

  return (
    <section>
      <div className="bg-white rounded mb-2">
        <img
          src={process.env.PUBLIC_URL + "/images/학식1" + ".svg"}
          className="mt-3 w-11/12 mx-auto h-52 object-cover rounded"
        />
        <p className="text-sm text-textdark m-0 pl-4 pt-2.5">학생회관</p>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-textdark m-0 pl-4">
            {menuItem.name}
          </p>
          <p className="text-xl font-bold text-textdark m-0 pr-4">
            {menuItem.price}
          </p>
        </div>
        <div className="flex items-center w-full justify-end pr-4">
          <img src={process.env.PUBLIC_URL + "/images/추천_별.svg"} />
          <p className="text-sm text-textgray m-0">4,9</p>
        </div>
        <p className="text-sm text-textgray m-0 px-3 py-1">
          야채 비빔밥은 한국의 전통 요리 중 하나로, 다양한 신선한 야채와 밥,
          그리고 고추장 기반의 양념을 함께 섞어 먹는 음식입니다.
        </p>
      </div>
      <div className="bg-white rounded">
        <div className="flex">
          <p className="text-2xl font-bold text-textdark m-0 pl-4 py-2">후기</p>
          <div className="flex items-center justify-end  pl-2 pr-4">
            <img src={process.env.PUBLIC_URL + "/images/추천_별.svg"} />
            <p className="text-sm text-textgray m-0">4.9</p>
          </div>
        </div>
        <div className="flex items-center pl-3 pb-1 gap-2">
          <div className="rounded-full w-18 h-18">
            <img
              src={process.env.PUBLIC_URL + "/images/명륜이.svg"}
              className="object-cover"
            />
          </div>
          <div className="flex-column">
            <p className="text-sm text-textdark m-0">User</p>
            <div className="flex items-center justify-end">
              <img src={process.env.PUBLIC_URL + "/images/추천_별.svg"} />
              <p className="text-sm text-textgray m-0">4.9</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-textdark m-0 pl-4 pb-3">
          음식이 맛있는데 양이 적어요.
        </p>
      </div>
    </section>
  );
};

export default MenuDetail;
