import React from "react";
import "./Cart.css";
import img1 from "./../../images/img_1.jpg";
import img2 from "./../../images/img_2.jpg";
import img3 from "./../../images/img_3.jpg";

import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

function Cart() {
  const cartItem = useSelector((state) => state.cartItems);

  return (
    <>
      {console.log("item => ", cartItem)}

      <div className="Cart">
        <div className="Cart-Container">
          <div className="Header">
            <h3 className="Heading">Shopping Cart</h3>
            <h5 className="Action">Remove all</h5>
          </div>

          {cartItem?.map((item) => (
            <div className="Cart-Items">
              <div className="image-box">
                <img src={item?.image} style={{ height: "120px" }} />
              </div>
              <div className="about">
                <h1 className="title">{item.name}</h1>
                <h3 className="subtitle">Size</h3>
                <img src={item?.image} style={{ height: "30px" }} />
              </div>
              <div className="counter">
                <div className="btn">+</div>
                <div className="count">2</div>
                <div className="btn">-</div>
              </div>
              <div className="prices">
                <div className="amount">$2.99</div>
                <div className="save">
                  <u>Save for later</u>
                </div>
                <div className="remove">
                  <u>Remove</u>
                </div>
              </div>
            </div>
          ))}
          {/* second iten */}

          {/* check out */}
          <hr />
          <div className="checkout">
            <div className="total">
              <div>
                <div className="Subtotal">Sub-Total</div>
                <div className="items">2 items</div>
              </div>
              <div className="total-amount">$6.18</div>
            </div>

            <NavLink to="/CheckOut">
              <button className=" ch-button button">Checkout</button>{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
