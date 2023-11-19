import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const onClick = (event) => {
    var id = document.getElementById('kingoId');
    var pwd = document.getElementById('password');
    if(id.value === "won2000sw" && pwd.value==="12345"){
      var username = "율전이";
        navigate('/restaurant',{state:username});
    }
    else
    {
        id.value="";
        pwd.value="";
        alert("Wrong Id or Password");

    } 
};
  return (
    <main className="relative flex w-11/12 my-4 mx-auto justify-center items-center bg-white">
      <div style={{display:"flex",flexDirection:"column"}}>
        <div className="items-center" style={{textAlign:"start"}}>
            <h6 style={{fontSize:"15px"}}>Welcome to</h6>
        </div>
        <div  className="items-center" style={{display:"flex", textAlign:"start"}}>
            <h1 style={{fontWeight:"bolder",fontSize:"40px",marginTop:"15px"}}>Kingo-Eats </h1>
            <img style={{ marginLeft:"0px" , width:"80px",height:"80px", margin:"5px"}} src={process.env.PUBLIC_URL + './images/kingo.svg'} alt="res1" />
        </div>
        <div className="items-center" style={{marginTop:"50px"}} >
            <h4 style={{fontWeight:"bold",fontSize:"14px"}}>KINGO ID</h4>
            <input id="kingoId" style={{fontSize:"14px", padding:"10px",marginTop:"10px",minWidth:"100%", minHeight:"30px", textAlign:"start", color:"black" , border:"1.5px solid #4CAF50", borderRadius:"5px"}} type="text" name="kingoId" placeholder="User name or email address"/>        
        </div>
        
        <div className="items-center" style={{marginTop:"50px"}} >
            <h4 style={{fontWeight:"bold",fontSize:"14px"}}>Password</h4>
            <input id="password" style={{fontSize:"14px", padding:"10px",marginTop:"10px",minWidth:"100%", minHeight:"30px", textAlign:"start", color:"black" , border:"1.5px solid #4CAF50", borderRadius:"5px"}} type="password" name="password" placeholder="Password"/>        
        </div>
        <div className="items-center" style={{marginTop:"50px", textAlign:"end"}} >
            <h4 style={{fontWeight:"bold",fontSize:"14px"}}><a style={{color:"lightgray",textDecoration:"none"}} href="https://www.skku.edu/skku/index.do#" rel="noreferrer" target="_blank">Forgot ID/Password?</a> </h4>
        </div>
        <div className="items-center" style={{marginTop:"50px"}} >
        <button className="w-[343px] h-[52px] bg-green hover:shadow-md text-white font-bold rounded border-2 border-black mb-[2vh]"
                    onClick={onClick}>Sign in</button>         
        </div>

      </div>
    </main>
  );
};

export default Login;
