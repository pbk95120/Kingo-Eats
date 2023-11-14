import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button variant="primary">Primary</Button>
      <img src={process.env.PUBLIC_URL + './images/res1.svg'} alt="res1" />
    </main>
  );
};

export default HomePage;