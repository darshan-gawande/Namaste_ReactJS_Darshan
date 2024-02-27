import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = () => {

    const [btnName, setbtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
         <div className="header">

    <div className="logo">
        <img src="https://www.shutterstock.com/image-vector/bird-nest-logo-vector-icon-260nw-1770214976.jpg" alt="App-logo"/>
    </div>
    
    <div className="nav-items">
        <ul>
            <li>
                Online Status: {onlineStatus ? "✅" : "🛑"}
            </li>
            <li>
               <Link to={"/"}> Home </Link>
            </li>
            <li>
                <Link to={"/about"}>About Us</Link>
            </li>
            <li>
                <Link to={"/contact"}>Contact Us</Link>
                </li>
            <li>Cart</li>

            <li>
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