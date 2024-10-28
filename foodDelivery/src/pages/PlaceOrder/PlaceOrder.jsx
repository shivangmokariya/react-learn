import React, { useContext } from 'react';
import './PlaceOrder.css';
import { storeContext } from '../../contex/storContext';

function PlaceOrder() {
  const { getTotalCartAmount } = useContext(storeContext);

  return (
    <div className="place-order">
      {/* Delivery Information Section */}
      <div className="delivery-info">
        <h2>Delivery Information</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Street" />
          <div className="form-group">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone" />
        </form>
      </div>

      {/* Cart Totals Section */}
      <div className="cart-bottom-order">
        <div className="cart-total-order">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details-order">
              <p>Subtotal</p>
              <b>${getTotalCartAmount().toFixed(2)}</b>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <b>${2}</b>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${(getTotalCartAmount() + 2).toFixed(2)}</b>
            </div>
          </div>
          {/* Update button to navigate to /order page on click */}
          <button onClick={() => navigate('/order')}>PROCEED TO PAYMENT</button> 
        </div>
          </div>
        </div>
  );
}

export default PlaceOrder;