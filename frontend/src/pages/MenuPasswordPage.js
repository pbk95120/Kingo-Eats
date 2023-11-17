import Title from "../components/common/Title";
import MenuPassword from "../components/menu/MenuPassword";
import Nav from "../components/Nav";

const MenuPasswordPage = () => {
  return (
    <main className="bg-backgroundgray h-812">
      <section>
        <Title title="Menu" />
      </section>
      <MenuPassword></MenuPassword>
      <section>
        <Nav page="restaurant" />
      </section>
    </main>
  );
};

export default MenuPasswordPage;
