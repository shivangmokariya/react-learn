// import "./Navbar.css";
// import { assets } from "../../assets/assets";
// import { useContext, useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { storeContext } from "../../contex/storContext";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import { getTotalCartAmount } from '../../store/cartSlice';
// import { getTotalCartAmount } from '../../store/cartSlice';



// function Navbar({ setShowLogin }) {
//   // const { getTotalCartAmount } = useContext(storeContext);

//   const [menu, setMenu] = useState("home");
//   const [userAuth, setUserAuth] = useState(localStorage.getItem("token"));
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     toast.success("Logged out successfully!", {
//       onClose: () => {
//         localStorage.clear();
//         setUserAuth(null);
//         if (location.pathname !== "/") {
//           setTimeout(() => navigate("/"), 500);
//         } else {
//           window.location.reload();
//         }
//       },
//     });
//   };

//   useEffect(() => {
//     console.log(userAuth, "<<<<<userAuth>>>>>>>>>>>>></userAuth>");
//   }, [userAuth]);

//   return (
//     <div className="navbar">
//       <Link to="/">
//         <img src={assets.logo} alt="Logo" />
//       </Link>
//       <ul className="navbar-menu">
//         <Link to="/">
//           <li
//             onClick={() => setMenu("home")}
//             className={menu === "home" ? "active" : ""}
//           >
//             Home
//           </li>
//         </Link>
//         <li
//           onClick={() => setMenu("menu")}
//           className={menu === "menu" ? "active" : ""}
//         >
//           Menu
//         </li>
//         <li
//           onClick={() => setMenu("mobile-app")}
//           className={menu === "mobile-app" ? "active" : ""}
//         >
//           Mobile App
//         </li>
//         <li
//           onClick={() => setMenu("contact-us")}
//           className={menu === "contact-us" ? "active" : ""}
//         >
//           Contact Us
//         </li>
//       </ul>
//       <div className="navbar-right">
//         <img src={assets.search_icon} alt="Search Icon" />
//         <div className="navbar-search-icon">
//           <Link to="/cart">
//             <img src={assets.basket_icon} alt="Basket Icon" />
//           </Link>          
//           {getTotalCartAmount() > 0 && <div className="dot"></div>}
//         </div>
//         {userAuth && (
//           <Link to="/profile">
//             <img
//               src={assets.profile_icon}
//               alt="Profile Icon"
//               className="navbar-profile-icon"
//             />
//           </Link>
//         )}
//         {userAuth ? (
//           <button onClick={handleLogout}>Logout 😣</button>
//         ) : (
//           <button onClick={() => setShowLogin(true)}>Sign In</button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
// import { getTotalCartAmount } from '../../store/cartSlice';
function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const [userAuth, setUserAuth] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const location = useLocation();
  const totalAmount = useSelector((state) => state.cart.totalAmount); // Access totalAmount directly


  // const totalCartAmount = useSelector((state) => getTotalCartAmount(state.cart));

  const handleLogout = () => {
    toast.success("Logged out successfully!", {
      onClose: () => {
        localStorage.clear();
        setUserAuth(null);
        if (location.pathname !== "/") {
          setTimeout(() => navigate("/"), 500);
        } else {
          window.location.reload();
        }
      },
    });
  };

  useEffect(() => {
    console.log(userAuth, "<<<<<userAuth>>>>>>>>>>>>>");
  }, [userAuth]);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to="/">
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </li>
        </Link>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket Icon" />
          </Link>          
          {/* Show a dot if there are items in the cart */}
          {totalAmount > 0 && <div className="dot"></div>}
        </div>
        {userAuth && (
          <Link to="/profile">
            <img
              src={assets.profile_icon}
              alt="Profile Icon"
              className="navbar-profile-icon"
            />
          </Link>
        )}
        {userAuth ? (
          <button onClick={handleLogout}>Logout 😣</button>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
