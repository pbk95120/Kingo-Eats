import { useNavigate } from "react-router-dom";

const Title = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full justify-center items-center bg-white" style={{ borderRadius: "20px" }}>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/header.svg"} />
      </div>
      <div>
        <div onClick={() => navigate(-1)} className="absolute left-0.5 cursor-pointer ml-6">
          <img src={process.env.PUBLIC_URL + "/images/chevron.svg"} />
        </div>
        <h1 className="text-lg text-textdark m-0 font-bold pb-3">{title}</h1>
      </div>
    </div>
  );
};

export default Title;
