// import "./Navbar.css";
// import { assets } from "../../assets/assets";
// import { useContext, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { storeContext } from "../../contex/storContext";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Navbar({ setShowLogin }) {
//   const { getTotalCartAmount } = useContext(storeContext);
//   const [menu, setMenu] = useState("home");
//   const [loggedOut, setLoggedOut] = useState(false);
//   const navigate = useNavigate();
//   const userAuth = localStorage.getItem("token");

//   if (userAuth && loggedOut) {
//     setLoggedOut(false);
//   }
  
//   const location = useLocation();
  
//   const handleLogout = () => {
//     console.log("toast on close ?>>>>>>>>>>>>>>>>");
//     toast.success("Logged out successfully!"),{
//       onClose: ()=>{
//         localStorage.clear();
//         setLoggedOut(true);
//         console.log("toast on close ?>>>>>>>>>>>>>>>>");
        
//         if (location.pathname !== "/") {
//           setTimeout(() => navigate("/"), 2000);
//         }
//       }
//     }
//   };

  
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
//           <img
//             src={assets.profile_icon}
//             alt="Profile Icon"
//             className="navbar-profile-icon"
//           />
//         )}
//         <button onClick={()=>{toast.success('hello shivang')}}>Click for toast</button>
//         {userAuth ? (
//           <button onClick={handleLogout}>Logout</button>
//         ) : (
//           <button onClick={() => setShowLogin(true)}>Sign In</button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;

// // =================================================================
// // =================================================================

// import "./Navbar.css";
// import { assets } from "../../assets/assets";
// import { useContext, useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { storeContext } from "../../contex/storContext";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Navbar({ setShowLogin }) {
//   const { getTotalCartAmount } = useContext(storeContext);
//   const [menu, setMenu] = useState("home");
//   const [loggedOut, setLoggedOut] = useState(false);
//   const navigate = useNavigate();
//   const userAuth = localStorage.getItem("token");
//   const location = useLocation();

//   // Trigger toast on logout state change
//   useEffect(() => {
//     console.log(loggedOut,"<<<<<<loggedOut");
//     if (loggedOut) {
//       if (location.pathname !== "/") {
//         setTimeout(() => navigate("/"), 2000);
//       }
//     }
//   }, [loggedOut, location, navigate]);

//   const handleLogout = () => {
//     localStorage.clear();
//     toast.success("Logged out successfully!");
//     setLoggedOut(true);
//   };

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
//           <img
//             src={assets.profile_icon}
//             alt="Profile Icon"
//             className="navbar-profile-icon"
//           />
//         )}
//         <button onClick={userAuth ? handleLogout : () => setShowLogin(true)}>
//           {userAuth ? "Logout" : "Sign In"}
//         </button>
//       </div>
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// }

// export default Navbar;

// import "./Navbar.css";
// import { assets } from "../../assets/assets";
// import { useContext, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { storeContext } from "../../contex/storContext";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Navbar({ setShowLogin }) {
//   const { getTotalCartAmount } = useContext(storeContext);
//   const [menu, setMenu] = useState("home");
//   // const [loggedOut, setLoggedOut] = useState(false);
//   const navigate = useNavigate();
//   const userAuth = localStorage.getItem("token");
//   const location = useLocation();

//   const handleLogout = () => {
//     localStorage.clear();
//     toast.success("Logged out successfully!");
//     // setLoggedOut(true);

//     setTimeout(() => {
//       if (location.pathname !== "/") {
//         navigate("/");
//       }
//     }, 2000);
//   };

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
//           <img
//             src={assets.profile_icon}
//             alt="Profile Icon"
//             className="navbar-profile-icon"
//           />
//         )}
//         <button onClick={userAuth ? handleLogout : () => setShowLogin(true)}>
//           {userAuth ? "Logout" : "Sign In"}
//         </button>
//       </div>
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// }

// export default Navbar;

// =========================================
// =========================================


// import "./Navbar.css";
// import { assets } from "../../assets/assets";
// import { useContext, useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { storeContext } from "../../contex/storContext";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Navbar({ setShowLogin }) {
//   const { getTotalCartAmount } = useContext(storeContext);
//   const [menu, setMenu] = useState("home");
//   const [userAuth, setUserAuth] = useState(localStorage.getItem("token"));
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     toast.success("Logged out successfully!", {
//       onClose: () => {
//         localStorage.clear();
//         setUserAuth(null); // Update state to reflect logged-out status
//         if (location.pathname !== "/") {
//           setTimeout(() => navigate("/"), 2000);
//         } else {
//           window.location.reload(); // Refresh if already on home page
//         }
//       }
//     });
//   };

//   // Update `userAuth` when `localStorage` changes after login
//   useEffect(() => {
//     const handleStorageChange = () => {
//       setUserAuth(localStorage.getItem("token"));
//     };
//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

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
//           <img
//             src={assets.profile_icon}
//             alt="Profile Icon"
//             className="navbar-profile-icon"
//           />
//         )}
//         {userAuth ? (
//           <button onClick={handleLogout}>Logout</button>
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
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { storeContext } from "../../contex/storContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar({ setShowLogin }) {
  const { getTotalCartAmount } = useContext(storeContext);
  const [menu, setMenu] = useState("home");
  const [userAuth, setUserAuth] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const location = useLocation();

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
      }
    });
  };
  
  useEffect(()=>{
    console.log(userAuth,"<<<<<userAuth>>>>>>>>>>>>></userAuth>");
  },[userAuth])

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
        {userAuth && (
          <img
            src={assets.profile_icon}
            alt="Profile Icon"
            className="navbar-profile-icon"
          />
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
