import React from "react";
import AddCart from "../component/AddCart";
import Data from "../data/store-items.json";

class Cart extends React.Component {
  state = {
    items: Data,
  };
  render() {
    return (
      <>
        <AddCart
          shirtData={this.props.location.state}
          path={this.props.match.params._id}
          cartData={this.props.cartData}
          onDelete={this.props.onDelete}
        />
      </>
    );
  }
}

export default Cart;
