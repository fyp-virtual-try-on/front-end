import React from "react";
import "./Cart.css";
import img1 from "./../../images/img_1.jpg";
import img2 from "./../../images/img_2.jpg";
import img3 from "./../../images/img_3.jpg";

import { useSelector, useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";
import {
  removeItem,
  addItemQuantity,
  removeItemQuantity,
  removeAllItems,
} from "../../store/cartItem/cartItemSlice";

function Cart() {
  const cartItem = useSelector((state) => state.cartItems);

  const dispatch = useDispatch();

  return (
    <>
      {console.log(cartItem)}
      <div className="Cart">
        <div className="Cart-Container">
          <div className="Header">
            <h3 className="Heading">Shopping Cart</h3>
            <h5 className="Action" onClick={() => dispatch(removeAllItems())}>
              Remove all
            </h5>
          </div>

          {cartItem?.map((item) => (
            <div key={item?.id} className="Cart-Items">
              <div className="image-box">
                <img src={item?.image} style={{ height: "120px" }} />
              </div>
              <div className="about">
                <h1 className="title">{item?.name}</h1>
                <h3 className="subtitle">Size</h3>
                <img src={item?.image} style={{ height: "30px" }} />
              </div>
              <div className="counter">
                <div
                  className="btn"
                  onClick={() => dispatch(addItemQuantity(item))}
                >
                  +
                </div>
                <div className="count">{item?.quantity}</div>
                <div
                  className="btn"
                  onClick={() => dispatch(removeItemQuantity(item))}
                >
                  -
                </div>
              </div>
              <div className="prices">
                <div className="amount">${item?.totalPrice}</div>
                <div className="save">
                  <u>Save for later</u>
                </div>
                <div
                  onClick={() => dispatch(removeItem(item))}
                  className="remove"
                >
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
                <div className="items">{cartItem?.length} items</div>
              </div>
              <div className="total-amount">
                $
                {cartItem?.length > 0
                  ? cartItem?.reduce(
                      (accumulator, item) => accumulator + item?.totalPrice,
                      0
                    )
                  : 0}
              </div>
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