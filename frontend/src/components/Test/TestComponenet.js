import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const TestComponent = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button variant="primary">Primary</Button>
      <img src={process.env.PUBLIC_URL + './images/res1.svg'} alt="res1" />
    </>
  );
};

export default TestComponent;
