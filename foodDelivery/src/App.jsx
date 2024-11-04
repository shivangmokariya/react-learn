// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import Navbar from './components/Navbar/Navbar'
// import Home from './pages/Home/Home'
// import Cart from './pages/cart/Cart'
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
// import Footer from './components/Footer/Footer'
// import { useState } from 'react'
// import LoginPoppus from './components/LoginPoppus/LoginPoppus'

// function App() {
//   const [showLogin,setShowLogin] = useState(false)
//   return (
//     <>
//        {showLogin ? <LoginPoppus setShowLogin={setShowLogin} /> : null} {}
//       <div className='app'>
//         <Navbar setShowLogin={setShowLogin}/>
//         <Routes>
//           <Route path='/' element={<Home/>} />
//           <Route path='/cart' element={<Cart/>} />
//           <Route path='/order' element={<PlaceOrder/>} />
//         </Routes>
//       </div>
//       <Footer/>
//     </>
//   )
// }

// export default App

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPoppus from "./components/LoginPoppus/LoginPoppus";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProfile from "./pages/UserProfile.jsx/UserProfile";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [userAuth, setUserAuth] = useState(
    localStorage.getItem("token") !== null
  );
   
  return (
    <>
      {showLogin ? (
        <LoginPoppus
          setShowLogin={setShowLogin}
          setUserAuth={setUserAuth}
          userAuth={userAuth}
        />
      ) : null}
      <div className="app">
        {/* <Navbar setShowLogin={setShowLogin} /> */}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
      <Footer />
    </>
  );
}

export default App;
