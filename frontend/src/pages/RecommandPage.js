import Title from "../components/common/Title";
import Nav from "../components/Nav";
const HomePage = () => {
  return (
    <main className="bg-backgroundgray h-812">
      <section>
        <Title title="오늘의 추천메뉴 " />
      </section>
      <section>
        <img
          src={process.env.PUBLIC_URL + "/images/학식1.svg"}
          className="w-full h-72 object-cover"
          alt="학식 이미지"
        />
      </section>
      <Nav />
    </main>
  );
};

export default HomePage;
