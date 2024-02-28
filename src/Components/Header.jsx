import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = () => {

    const [btnName, setbtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
         <div className="flex justify-between bg-pink-50 shadow-lg m-2">

    <div className="logo">
        <img className="w-40" src= "https://images-platform.99static.com/dp8ehTneJPeFUiGc7OQFBtqSKrU=/460x460:1522x1522/500x500/top/smart/99designs-contests-attachments/132/132147/attachment_132147277" alt="App-logo"/>
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

            
            <button className="login-btn" onClick={() => {
                btnName === "Logout" ? setbtnName("Login") : setbtnName("Logout");
            }} >{ btnName }</button>
        </ul>
    </div>
    </div>
    )};

export default Header;