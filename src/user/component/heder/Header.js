import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "../heder/Heade.module.css"

function Header(props) {

    return (
        <div className={style.Header}>
            <div className="logo-container">
                <NavLink to="/" className={style.logo}>Your Logo</NavLink>
            </div>
            <div className={style.nav}>
                <NavLink exact to="/" className={style.nav} activeClassName="active">Home</NavLink>
                <NavLink to="/product" className={style.nav} activeClassName="active">Products</NavLink>
                <NavLink to="/contact" className={style.nav} activeClassName="active">Contact</NavLink>
            </div>
        </div>
      );
}

export default Header;



{/* <NavLink to="/" >Home</NavLink>
              

<NavLink to="/Product">Product</NavLink>


<NavLink to="/Contect" >Contect</NavLink> */}
