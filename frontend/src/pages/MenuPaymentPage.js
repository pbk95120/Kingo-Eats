import Title from "../components/common/Title";
import MenuPayment from "../components/menu/MenuPayment";
import Nav from "../components/Nav";

const MenuPaymentPage = () => {
  return (
    <main className="bg-backgroundgray h-812">
      <section>
        <Title title="Menu" />
      </section>
      <MenuPayment></MenuPayment>
      <section>
        <Nav page="restaurant" />
      </section>
    </main>
  );
};

export default MenuPaymentPage;
