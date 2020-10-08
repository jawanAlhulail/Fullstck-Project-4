import React from "react";
import HomePage from "./pages/HomePage";
import OneItem from "./pages/OneItem";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Cart from "./pages/cart";

class App extends React.Component {
  state = {
    cartItems: [],
  };

  //  adding item to a cart

  cartAdding = async (selectedItem) => {
    console.log(selectedItem, "selec");
    try {
      const MyItem = {
        name: selectedItem.name,
        price: selectedItem.price,
        description: selectedItem.description,
      };

      await this.setState((state) => {
        const list = state.cartItems.concat(selectedItem);

        return {
          cartItems: list,
        };
      });
      alert("item is added to cart ");
    } catch (error) {
      alert("error");
    }
  };

  // clearing items from cart

  deleting = async (selectedItem) => {
    let remove = this.state.cartItems.indexOf(selectedItem);
    this.setState({
      cartItems: this.state.cartItems.filter(
        (index) => index._id !== index._id
      ),
    });
    alert("cart will be cleared ");
  };
  render() {
    return (
      <BrowserRouter>
        <Header />
        <>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/item/:_id"
            render={(props) => (
              <OneItem {...props} onAdding={this.cartAdding} />
            )}
          />

          <Route
            exact
            path="/cart"
            render={(props) => (
              <Cart
                {...props}
                cartData={this.state.cartItems}
                onDelete={this.deleting}
              />
            )}
          />
        </>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
