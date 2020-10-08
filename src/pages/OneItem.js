import React from "react";
import Shirt from "../component/shirt";
import SignUp from "../component/SignUp";
import Products from "../component/Items";
import data from "../data/store-items.json";
class OneItem extends React.Component {
  state = {
    items: data,
  };
  render() {
    const itemId = this.props.path;
    const key = this.state.items.filter((item) => item._id === itemId);
    const selectedItem = this.props;
    console.log(this.props, "7373");
    return (
      <>
        <Shirt
          path={this.props.match.params._id}
          shirtData={this.props.location.state}
          carts={this.props.carts}
          data={selectedItem}
          onAdding={this.props.onAdding}
        />
        <Products />
        <SignUp />
      </>
    );
  }
}
export default OneItem;
