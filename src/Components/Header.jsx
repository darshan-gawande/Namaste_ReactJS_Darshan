import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { APP_LOGO } from "../utils/constants";


const Header = () => {

    const [btnName, setbtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {defaultloggedIn} = useContext(UserContext);
    console.log({defaultloggedIn});


    return (
         <div className="flex justify-between bg-pink-50 shadow-lg m-2">

    <div className="logo">
        <img className="w-40" src= { APP_LOGO }  alt="App-logo"/>
    </div>
    
    <div className="nav-items flex items-center">
        <ul className="flex p-8 ">
            <li className="px-4">
                Online Status: {onlineStatus ? "✅" : "🛑"}
            </li>
            <li className="px-4">
               <Link to={"/"}> Home </Link>
            </li>
            <li>
                <Link to={"/about"}>About Us</Link>
            </li>
            <li className="px-4">
                <Link to={"/contact"}>Contact Us</Link>
                </li>
            <li className="px-4">Cart</li>

            <li className="px-4">
                <Link to={"/grocery"}>Grocery</Link>
            </li>

            
            <button className="login-btn" onClick={() => 
            {
                btnName === "Logout" ? setbtnName("Login") : setbtnName("Logout");
            }} >{ btnName }
            </button>

            <li className="px-4 font-bold">
                {defaultloggedIn} 
            </li>
        </ul>
    </div>
    </div>
    )};

export default Header;