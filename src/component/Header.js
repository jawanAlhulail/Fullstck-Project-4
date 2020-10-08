import React from "react";
import logo from "../img/logo.svg";
import cart from "../img/cart.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img className="logo" src={logo} width="30" alt="logo"></img>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>

          <li>collection</li>

          <li>contact</li>
        </ul>{" "}
        <NavLink exact to="/cart">
          <div className="cart_div">
            {" "}
            <img className="cart" src={cart} width="20" alt="logo"></img>
            <h4>Cart </h4>
          </div>{" "}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
