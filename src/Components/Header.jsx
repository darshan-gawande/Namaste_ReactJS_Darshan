import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {

    const [btnName, setbtnName] = useState("Login");

    return (
         <div className="header">

    <div className="logo">
        <img src="https://www.shutterstock.com/image-vector/bird-nest-logo-vector-icon-260nw-1770214976.jpg" alt="App-logo"/>
    </div>
    
    <div className="nav-items">
        <ul>
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
            
            <button className="login-btn" onClick={() => {
                btnName === "Logout" ? setbtnName("Login") : setbtnName("Logout");
            }} >{ btnName }</button>
        </ul>
    </div>
    </div>
    )};

export default Header;