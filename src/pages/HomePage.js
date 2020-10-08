import React from "react";
import Hero from "../component/Hero";
import Products from "../component/Items";
import SignUp from "../component/SignUp";

import data from "../data/store-items.json";
class HomePage extends React.Component {
  state = {
    items: data,
  };

  render() {
    return (
      <>
        <Hero />
        <Products itemsssss={this.state.items} />
        <SignUp />
      </>
    );
  }
}

export default HomePage;
