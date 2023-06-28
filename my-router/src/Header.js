import React from "react";
import { Link,NavLink } from "react-router-dom";
function Header(){
    return(
        <div className="Header">
            <ul className="nav">
               <li>
                <NavLink  className="nav-link" to="/">Home</NavLink></li>
                <li>                
                   <NavLink  className="nav-link" to="/users">Users</NavLink>
                </li>
            </ul>
          
        </div>
    )
}

export default Header;
