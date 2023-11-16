const Title = ({ title }) => {
  return (
    <div className="relative flex w-11/12 pt-12 mx-auto justify-center items-center ">
      <img src={process.env.PUBLIC_URL + "./images/chevron.svg"} alt="res1" className="absolute left-0.5" />
      <h1 className="text-lg text-textdark m-0 font-bold ">{title}</h1>
    </div>
  );
};

export default Title;
