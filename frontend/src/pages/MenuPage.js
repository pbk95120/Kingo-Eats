import Title from "../components/common/Title";
import MenuItem from "../components/menu/MenuItem";
import Nav from "../components/Nav";

const MenuPage = () => {
  return (
    <main className="bg-backgroundgray h-812">
      <section>
        <Title title="Menu" />
      </section>
      <MenuItem></MenuItem>
      <section>
        <Nav page="restaurant" />
      </section>
    </main>
  );
};

export default MenuPage;
