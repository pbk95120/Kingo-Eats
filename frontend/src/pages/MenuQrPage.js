import Title from "../components/common/Title";
import MenuQr from "../components/menu/MenuQr";
import Nav from "../components/Nav";

const MenuQrPage = () => {
  return (
    <main className="bg-backgroundgray h-812">
      <section>
        <Title title="Menu" />
      </section>
      <MenuQr></MenuQr>
      <section>
        <Nav page="restaurant" />
      </section>
    </main>
  );
};

export default MenuQrPage;
