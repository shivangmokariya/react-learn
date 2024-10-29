// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { storeContext } from '../../contex/storContext';
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {
  const { getTotalCartAmount } = useContext(storeContext);
  const navigate = useNavigate();
  
  // Get user data from localStorage
  const userData = JSON.parse(localStorage.getItem('user')) || [];
  console.log(userData,"<<<userData");
  const initialFirstName = userData?.name.split(' ')[0] || '';
  const initialLastName = userData?.name.split(' ')[1] || '';
  const initialEmail = userData?.email || '';

  // Initialize form fields with state
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [email, setEmail] = useState(initialEmail);
  const userAuth = localStorage.getItem('token');

  return (
    <div className="place-order">
      {/* Show message if user is not logged in */}
      {!userAuth && <h1>Please login first to order</h1>}

      {/* Show form and cart totals only if user is logged in */}
      {userAuth && (
        <>
          {/* Delivery Information Section */}
          <div className="delivery-info">
            <h2>Delivery Information</h2>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
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
              <button onClick={() => navigate('/')}>PROCEED TO PAYMENT</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PlaceOrder;
