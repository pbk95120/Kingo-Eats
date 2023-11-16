import Title from "../components/common/Title";
import MenuDetail from "../components/menu/MenuDetail";
import Nav from "../components/Nav";

const MenuDetailPage = () => {
  return (
    <main className="bg-backgroundgray h-812">
      <section>
        <Title title="Menu" />
      </section>
      <MenuDetail></MenuDetail>
      <section>
        <Nav page="restaurant" />
      </section>
    </main>
  );
};

export default MenuDetailPage;
