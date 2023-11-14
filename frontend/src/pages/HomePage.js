import TestComponent from '../components/Test/TestComponenet';
import Title from '../components/common/Title';

const HomePage = () => {
  return (
    <main className="h-screen">
      <section>
        <Title title="주문내역" />
        <TestComponent />
      </section>
    </main>
  );
};

export default HomePage;
