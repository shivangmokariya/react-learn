// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Cart.css";
// // import { storeContext } from "../../contex/storContext";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeFromCart, getTotalCartAmount } from '../../store/cartSlice';
// console.log(getTotalCartAmount(),"<<<<<<<<<<<<>>>>>>>getTotalCartAmount()");
// function Cart() {
//     const dispatch = useDispatch();
//     const cartItems = useSelector((state) => state.cart.cartItems);
//     const food_list = useSelector((state) => state.cart.food_list);

//     const handleRemoveFromCart = (itemId) => {
//       dispatch(removeFromCart(itemId));
//     };
//   const navigate = useNavigate();

//   return (
//     <div className="cart">
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {food_list.map((item) => {
//           // Check if the item is in the cart
//           if (cartItems[item._id] > 0) {
//             return (
//               <div key={item._id}>
//                 <div className="cart-items-title cart-items-item">
//                   <img src={item.image} alt={item.name} />
//                   <p>{item.name}</p>
//                   <p>${item.price}</p>
//                   <p>{cartItems[item._id]}</p>
//                   <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
//                   <p onClick={() => handleRemoveFromCart(item._id)} className="cross">
//                     X
//                   </p>
//                 </div>
//                 <hr />
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>

//       {/* Only show cart-totals if total amount is greater than 0 */}
//       {getTotalCartAmount > 0 ? (
//         <div className="cart-bottom">
//           <div className="cart-total">
//             <h2>Cart Totals</h2>
//             <div>
//               <div className="cart-total-details">
//                 <p>Subtotal</p>
//                 <b>${getTotalCartAmount().toFixed(2)}</b>
//               </div>
//               <hr />
//               <div className="cart-total-details">
//                 <p>Delivery Fee</p>
//                 <b>${2}</b>
//               </div>
//               <hr />
//               <div className="cart-total-details">
//                 <b>Total</b>
//                 <b>${(getTotalCartAmount() + 2).toFixed(2)}</b>
//               </div>
//             </div>
//             <button
//               onClick={() => navigate("/order")}
//               disabled={getTotalCartAmount() <= 0}
//             >
//               PROCEED TO CHECKOUT
//             </button>
//           </div>
//           <div className="cart-promocode">
//             <div>
//               <p>If you have a promo code, Enter it here</p>
//               <div className="cart-promocode-input">
//                 <input type="text" placeholder="promo code" />
//                 <button>Submit</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <h1 style={{ textAlign: "center", marginTop: "20px" }}>
//           Cart is empty
//         </h1>
//       )}
//     </div>
//   );
// }

// export default Cart;


import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from '../../store/slices/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const foodList = useSelector((state) => state.cart.food_list);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

    const handleRemoveFromCart = (itemId) => {
      dispatch(removeFromCart(itemId));
    };

    const navigate = useNavigate();

    return (
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {foodList.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id}>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                    <p onClick={() => handleRemoveFromCart(item._id)} className="cross">
                      X
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <b>${totalAmount.toFixed(2)}</b>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <b>${2}</b>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>${(totalAmount + 2).toFixed(2)}</b>
                </div>
              </div>
              <button
                onClick={() => navigate("/order")}
                disabled={totalAmount <= 0}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
            <div className="cart-promocode">
              <div>
                <p>If you have a promo code, Enter it here</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder="promo code" />
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1 style={{ textAlign: "center", marginTop: "20px" }}>
            Cart is empty
          </h1>
        )}
      </div>
    );
}

export default Cart;
