import React from "react";
import signupIMG from "../img/mailing-list-img.png";
const SignUp = () => {
  return (
    <section className="SignUp">
      <div className="container">
        <img src={signupIMG}></img>
        <div className="mailing">
          <h4>sign up for our newsletter and get 10% off your next order</h4>
          <input type="text"></input>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
