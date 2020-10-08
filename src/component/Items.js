import React from "react";
import Data from "../data/store-items.json";
import TheItem from "./TheItem";

const storeitems = Data;

const cards = storeitems.map((item) => (
  <TheItem
    title={item.name}
    pic={item.image}
    price={item.price}
    _id={item._id}
  />
));

class Products extends React.Component {
  render() {
    return (
      <section className="items">
        <div className="container">
          {cards}

          {/* <TheItem
            title={this.props.itemsssss[1].name}
            pic={this.props.itemsssss[1].image}
            price={this.props.itemsssss[1].price}
          />
          <TheItem
            title={this.props.itemsssss[2].name}
            pic={this.props.itemsssss[2].image}
            price={this.props.itemsssss[2].price}
          />
          <TheItem
            title={this.props.itemsssss[3].name}
            pic={this.props.itemsssss[3].image}
            price={this.props.itemsssss[3].price}
          />
          <TheItem
            title={this.props.itemsssss[4].name}
            pic={this.props.itemsssss[4].image}
            price={this.props.itemsssss[4].price}
          />
          <TheItem
            title={this.props.itemsssss[5].name}
            pic={this.props.itemsssss[5].image}
            price={this.props.itemsssss[5].price}
          />
          <TheItem
            title={this.props.itemsssss[6].name}
            pic={this.props.itemsssss[6].image}
            price={this.props.itemsssss[6].price}
          />
          <TheItem
            title={this.props.itemsssss[7].name}
            pic={this.props.itemsssss[7].image}
            price={this.props.itemsssss[7].price}
          />
          <TheItem
            title={this.props.itemsssss[8].name}
            pic={this.props.itemsssss[8].image}
            price={this.props.itemsssss[8].price}
          /> */}
        </div>
        <button>MORE PRODUCTS</button>
      </section>
    );
  }
}

export default Products;
