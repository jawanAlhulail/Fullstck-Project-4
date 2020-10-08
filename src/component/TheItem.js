import React, { useState } from "react";
import { Link } from "react-router-dom";

const TheItem = (props) => {
  return (
    <div className="item">
      <div className="item__image">
        <Link
          to={(location) => ({
            ...location,
            pathname: `item/${props._id}`,
            state: props,
          })}
        >
          <img src={require(`../img/${props.pic}`)} />
        </Link>
      </div>
      <div className="item__desc">
        {props.title}

        <h5>{props.price}</h5>
      </div>
    </div>
  );
};
export default TheItem;
