import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const Restaurant = () => {
  const [rest,setRest] = useState("구시재식당");
  const [rimage, setRimage] = useState("./images/res1.svg");
  const [restLoc,setRestLoc] = useState("학생회관 1층");
  const navigate = useNavigate();

  const onSelect = (event) => {
    setRest(event.target.value);
};
  useEffect(()=>{
    if (rest === "구시재식당"){
      setRimage('./images/구시재식당.svg');
      setRestLoc('복지회관 3층');
    }
    else if (rest === "학생회관식당"){
      setRimage('./images/학생회관.svg');
      setRestLoc('학생회관 1층');

    }
    else if(rest === "공대식당")
    {
      setRimage('./images/공대식당.svg');
      setRestLoc('제2공학관 26동 지하1층');
    }
  },[rest])

  return (
    <main className="relative flex w-11/12 my-4 mx-auto justify-center items-center bg-white">
      <section>
        <div className="items-center" style={{textAlign:"center"}}>
            <h1 style={{fontSize:"35px", fontWeight:"bolder", color:"#4CAF50"}} >Kingo-Eats</h1>
            <h4 style={{marginTop:"10px",fontSize:"25px"}}>안녕하세요 OOO님<br/> 어떤 식당을 원하시나요?</h4>
            <select style={{ marginTop:"10px",fontSize:"20px",minWidth:"75%", minHeight:"30px", textAlign:"center", color:"#4CAF50" , border:"1px solid lightgreen", borderRadius:"5px"}} value={rest} onChange={onSelect} name="rest" >
                    <option value="구시재식당" >구시재식당</option>
                    <option value="학생회관식당">학생회관식당</option>
                    <option value="공대식당">공대식당</option>
            </select>
            <h5 style={{ marginTop:"10px",fontSize:"15px", color:"#4CAF50",opacity:"0.5"}}>{restLoc}</h5>

            <img style={{width:"100%", margin:"5px"}} src={process.env.PUBLIC_URL + rimage} alt="res1" />
            <button className="w-[343px] h-[52px] bg-green hover:shadow-md text-white font-bold rounded border-2 border-black mb-[2vh]"
                    onClick={() => navigate('/',{state:rest})}>식권 구매</button>         
            </div>
      </section>
    </main>
  );
};

export default Restaurant;
