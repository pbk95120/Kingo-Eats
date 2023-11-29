import { useLocation } from "react-router-dom";
import Btn from "../common/Btn";
import menuData from "../../pages/menudata";

const Recommand = () => {
  const { state } = useLocation();
  const menuList = menuData.filter(
    (menuItem) => menuItem.restaurantType === state
  );
  const randomIndex = Math.floor(Math.random() * menuList.length);
  const menuItem = menuData[randomIndex];

  return (
    <>
      <img
        src={process.env.PUBLIC_URL + menuItem.imagePath}
        className="mt-3 w-full h-72 object-cover rounded"
      />
      <div className="w-full h-80 mt-4 bg-white rounded">
        <p className="text-sm text-textdark m-0 pl-5 pt-4">
          {menuItem.restaurantType}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-textdark m-0 pl-5">
            {menuItem.name}
          </p>
          <p className="text-xl font-bold text-textdark m-0 pr-4">
            {menuItem.price}
          </p>
        </div>
        <div className="flex items-center justify-end pl-2 pr-4 pb-2">
          <img src={process.env.PUBLIC_URL + "/images/추천_별.svg"} />
          <p className="text-sm text-textgray m-0">4,9</p>
        </div>
        <p className="text-sm text-textgray m-0 px-3 py-1 pb-2">
          {menuItem.describe}
        </p>
        <div className="pl-3">
          <Btn text="구매하기" url={"/menu/1"}></Btn>
        </div>
      </div>
    </>
  );
};

export default Recommand;
