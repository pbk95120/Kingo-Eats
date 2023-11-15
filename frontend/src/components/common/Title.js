const Title = ({ title }) => {
  return (
    <div className="relative flex w-11/12 my-4 mx-auto justify-center items-center bg-white">
      <img
        src={process.env.PUBLIC_URL + './images/chevron.svg'}
        alt="res1"
        className="absolute left-0"
      />
      <div className="text-lg text-textdark m-0 ">{title}</div>
    </div>
  );
};

export default Title;
