import React from "react";
import {CDN_LOGO} from "../utills/constants"
const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={CDN_LOGO}/>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Conatct Us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
}
export default Header;