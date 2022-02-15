import React from "react";

const Header =(props)=>{
    const {brand, name} =props
    return(
        <div>
            <h2 style={{color :"red",fontSize:"30px"}}>{brand} {name}</h2>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3" >
                <div className="container">
                    <a href="/" className="nav-brand">
                        {brand}
                    </a>
                </div>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <a href="/" className="nav-link"> Home</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Header