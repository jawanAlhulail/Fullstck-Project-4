import React, { Component } from "react";
import Data from "../data/store-items.json";
import SignUp from "../component/SignUp";
class Cart extends React.Component {
  state = {
    items: Data,
  };

  render() {
    const itemId = this.props.path;
    const cart = Data.filter((item) => item._id === itemId);
    console.log(cart);
    console.log(this.props.cartData, "cart");
    return (
      <>
        {" "}
        <span>
          <h5>your cart</h5>
        </span>
        {this.props.cartData.map((item) => (
          <section className="cart">
            <div className="container">
              <hr></hr>
              <tr>
                <td>
                  <img src={require(`../img/${item.image}`)}></img>
                </td>

                <td className="td">{item.name}</td>
                <td>{1}</td>
                <td>{item.price}</td>
                <td>
                  <button>CHECK OUT</button>
                  <button onClick={() => this.props.onDelete(item)}>
                    CLEAR
                  </button>
                </td>
              </tr>
            </div>
          </section>
        ))}{" "}
        <div className="all-con">
          <tr className="AllItems">
            <td>All Items</td>
            <td></td>
            <td>1</td>
            <td>total price</td>
            <td>
              <button>Check Out All </button>
            </td>
          </tr>
        </div>
        <SignUp />
      </>
    );
  }
}

export default Cart;
