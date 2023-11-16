import Title from "../components/common/Title";
import Nav from "../components/Nav";
const HomePage = () => {
  return (
    <main className="bg-backgroundgray h-812">
      <section>
        <Title title="오늘의 추천식당" />
      </section>
      <section>
        <img src={process.env.PUBLIC_URL + "/images/공대식당.svg"} className="mt-4 w-full h-72 object-cover rounded" />
      </section>
      <section>
        <div className="w-full h-72 mt-4 bg-white rounded"></div>
      </section>
      <section>
        <Nav />
      </section>
    </main>
  );
};

export default HomePage;
