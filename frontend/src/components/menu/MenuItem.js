import { Link } from "react-router-dom";
import { useState } from "react";
import menuData from "../../pages/menudata";

const MenuItem = () => {
  const restaurant = localStorage.getItem("selectedRestaurant");
  const menuList = menuData.filter((menuItem) => menuItem.restaurantType === restaurant);
  const [menuItems, setMenuItems] = useState(menuList);
  const [sortOn, setSortOn] = useState(false);
  const [heartStates, setHeartStates] = useState(menuItems.map(() => false));

  const sortByHearts = () => {
    const sortedMenuItems = [...menuItems].sort((a, b) => b.hearts - a.hearts);
    setMenuItems(sortedMenuItems);
    setSortOn(!sortOn);
  };

  const sortDefault = () => {
    setMenuItems(menuList);
    setSortOn(!sortOn);
  };

  const toggleHeart = (index) => {
    const newHeartStates = [...heartStates];
    newHeartStates[index] = !newHeartStates[index];
    setHeartStates(newHeartStates);
  };

  console.log(restaurant);

  return (
    <>
      <button className="w-11/12 m-auto mt-3 flex justify-end relative">
        <img src={process.env.PUBLIC_URL + "/images/정렬.svg"} onClick={() => setSortOn(!sortOn)} />
        {sortOn ? (
          <div className="bg-white w-3/12 text-center absolute top-7  rounded">
            <ul className="p-0 m-0">
              <li className="text-sm my-1" onClick={sortDefault}>
                최신순
              </li>
              <li className="text-sm my-1" onClick={sortByHearts}>
                인기순
              </li>
            </ul>
          </div>
        ) : null}
      </button>

      <div className="grid grid-cols-2 place-items-center w-11/12 m-auto gap-3">
        {menuItems.map((menuItem) => (
          <div key={menuItem.id} className="w-40 bg-white rounded">
            <Link to={`/menu/${menuItem.id}`}>
              <img src={process.env.PUBLIC_URL + menuItem.imagePath} className="w-full h-40 object-cover rounded" />
            </Link>
            <Link c to={`/menu/${menuItem.id}`} style={{ textDecoration: "none", color: "#2f2e36" }}>
              <p className="text-lg text-textdark m-0 pl-2 pt-2">{menuItem.name}</p>
            </Link>
            <div className="pb-2 flex justify-between items-center">
              <p className="tex-sm text-textdark m-0 pl-3 font-bold">{menuItem.price}</p>
              <img
                src={process.env.PUBLIC_URL + (heartStates[menuItem.id] ? "/images/하트.svg" : "/images/하트_off.svg")}
                className="w-6 mr-2"
                onClick={() => toggleHeart(menuItem.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuItem;
