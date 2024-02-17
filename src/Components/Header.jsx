import { useState } from "react";


const Header = () => {

    const [btnName, setbtnName] = useState("Login");

    return (
         <div className="header">

    <div className="logo">
        <img src="" alt="App-logo"/>
    </div>
    
    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login-btn" onClick={() => {
                btnName === "Logout" ? setbtnName("Login") : setbtnName("Logout");
            }} >{ btnName }</button>
        </ul>
    </div>
    </div>
    )};

export default Header;