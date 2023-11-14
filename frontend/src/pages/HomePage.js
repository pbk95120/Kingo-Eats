import TestComponent from '../components/Test/TestComponenet';
import Title from '../components/common/Title';
import Nav from '../components/Nav';

const HomePage = () => {
  return (
    <main className="h-screen">
      <section>
        <Title title="주문내역" />
        <TestComponent />
      </section>
      <Nav />
    </main>
  );
};

export default HomePage;
