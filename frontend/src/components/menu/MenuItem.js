import { Link, NavLink } from "react-router-dom";

const MenuItem = () => {
  const menuItems = [
    { id: 1, name: "야채비빔밥", price: "4,300원", imagePath: "/images/학식1.svg" },
    { id: 2, name: "야채비빔밥", price: "4,300원", imagePath: "/images/학식1.svg" },
    { id: 3, name: "야채비빔밥", price: "4,300원", imagePath: "/images/학식1.svg" },
    { id: 4, name: "야채비빔밥", price: "4,300원", imagePath: "/images/학식1.svg" },
  ];

  return (
    <main>
      <button className="w-11/12 m-auto mt-3 flex flex-row-reverse">
        <img src={process.env.PUBLIC_URL + "/images/정렬.svg"} />
      </button>
      <div className="grid grid-cols-2 place-items-center w-11/12 m-auto gap-3">
        {menuItems.map((menuItem) => (
          <div key={menuItem.id} className="w-40 bg-white rounded">
            <Link to={`/menu/${menuItem.id}`}>
              <img src={process.env.PUBLIC_URL + menuItem.imagePath} className="w-full object-cover rounded" />
            </Link>
            <Link c to={`/menu/${menuItem.id}`} style={{ textDecoration: "none", color: "#2f2e36" }}>
              <p className="text-lg textdark m-0 pl-2 pt-2">{menuItem.name}</p>
            </Link>
            <div className="pb-2 flex justify-between items-center">
              <p className="tex-sm text-dark m-0 pl-3 font-bold">{menuItem.price}</p>
              <img src={process.env.PUBLIC_URL + "/images/하트.svg"} className="w-6 mr-2" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MenuItem;
