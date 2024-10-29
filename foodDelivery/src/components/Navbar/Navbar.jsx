// import "./Navbar.css";
// import { assets } from "../../assets/assets";
// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { storeContext } from "../../contex/storContext";

// function Navbar({ setShowLogin }) {
//   const { getTotalCartAmount } = useContext(storeContext);
//   const [menu, setMenu] = useState("home");
//   const userAuth = localStorage.getItem("token");
  
//   const handleLogout = () => {
//     localStorage.clear();
//   };

//   return (
//     <div className="navbar">
//       <Link to="/">
//         {" "}
//         <img src={assets.logo} />
//       </Link>
//       <ul className="navbar-menu">
//         <Link to="/">
//           <li
//             onClick={() => setMenu("home")}
//             className={menu === "home" ? "active" : ""}
//           >
//             home
//           </li>{" "}
//         </Link>
//         <li
//           onClick={() => setMenu("menu")}
//           className={menu === "menu" ? "active" : ""}
//         >
//           menu
//         </li>
//         <li
//           onClick={() => setMenu("mobile-app")}
//           className={menu === "mobile-app" ? "active" : ""}
//         >
//           mobile app
//         </li>
//         <li
//           onClick={() => setMenu("contact-us")}
//           className={menu === "contact-us" ? "active" : ""}
//         >
//           contact-us
//         </li>
//       </ul>
//       <div className="navbar-right">
//         <img src={assets.search_icon} alt="" />
//         <div className="navbar-search-icon">
//           <Link to="/cart">
//             {" "}
//             <img src={assets.basket_icon} />
//           </Link>
//           {getTotalCartAmount() > 0 && <div className="dot"></div>}
//         </div>
//         {/* {userAuth &&  <button onClick={handleLogout}>Logout</button>}
//         {!userAuth &&  <button onClick={()=>{setShowLogin(true)}}>sign in</button>} */}
//         <button onClick={userAuth ? handleLogout : () => setShowLogin(true)}>
//           {userAuth ? "Logout" : "Sign In"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;



import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { storeContext } from "../../contex/storContext";

function Navbar({ setShowLogin }) {
  const { getTotalCartAmount } = useContext(storeContext);
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate(); // Initialize useNavigate hook
  const userAuth = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/"); // Navigate to home after logout
  };

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
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>
        <button onClick={userAuth ? handleLogout : () => setShowLogin(true)}>
          {userAuth ? "Logout" : "Sign In"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
