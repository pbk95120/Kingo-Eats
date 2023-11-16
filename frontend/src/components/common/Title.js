import { useNavigate } from "react-router-dom";

const Title = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="relative flex w-11/12 pt-12 mx-auto justify-center items-center ">
      <div onClick={() => navigate(-1)} className="absolute left-0.5 cursor-pointer">
        <img src={process.env.PUBLIC_URL + "/images/chevron.svg"} />
      </div>
      <h1 className="text-lg text-textdark m-0 font-bold ">{title}</h1>
    </div>
  );
};

export default Title;
