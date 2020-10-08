import React from "react";

import Data from "../data/store-items.json";

class Shirt extends React.Component {
  state = {
    items: Data,
    cartItems: [],
  };
  render() {
    const itemId = this.props.path;
    const pro = this.state.items.filter((item) => item._id === itemId);
    console.log(this.props, "helo");
    return (
      <section className="shirt">
        <div className="container">
          <ul>
            <li>
              <img src={require(`../img/${pro[0].image}`)}></img>
            </li>

            <li>
              <img src={require(`../img/${pro[0].image}`)}></img>
            </li>
            <li>
              <img src={require(`../img/${pro[0].image}`)}></img>
            </li>
          </ul>

          <div>
            <img
              className="bigShirt"
              src={require(`../img/${pro[0].image}`)}
              width="400px"
            ></img>
          </div>

          <div className="Shirt__desc">
            <h1>{pro[0].price}</h1>
            <h2>{pro[0].name}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure
            </p>
            <div className="options">
              <ul>
                <li>
                  <b>color:</b> pink
                </li>
                <li>
                  <div className="pink"></div>
                  <div className="blue"></div>
                  <div className="black"></div>
                </li>
              </ul>
            </div>
            <div className="buying">
              <input type="number"></input>

              <button onClick={() => this.props.onAdding(pro[0])}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Shirt;
