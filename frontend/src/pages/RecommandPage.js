import Title from "../components/common/Title";
import Nav from "../components/Nav";
import Recommand from "../components/recommand/Recommand";

const HomePage = () => {
  return (
    <main className="bg-backgroundgray h-812" style={{ borderRadius: "20px" }}>
      <section>
        <Title title="오늘의 추천메뉴" />
      </section>

      <section>
        <Recommand></Recommand>
      </section>
      <section>
        <Nav page="recommand" />
      </section>
    </main>
  );
};

export default HomePage;
