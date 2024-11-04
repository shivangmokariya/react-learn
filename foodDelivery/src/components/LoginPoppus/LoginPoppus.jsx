// import React from "react";
// import "./LoginPoppus.css";
// import { assets } from "../../assets/assets";
// import axios from "../../axios/axios";
// import { ToastContainer, toast } from "react-toastify"; 
// import "react-toastify/dist/ReactToastify.css";

// function LoginPoppus({ setShowLogin }) {
//   const [currState, setCurrState] = React.useState("Login");
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [name, setName] = React.useState("");

//   const handleSignUp = () => {
//     axios
//       .post("/registration", { email, name, password })
//       .then((res) => {
//         setShowLogin(false);
//         localStorage.setItem("user", JSON.stringify(res.data.data));
//         toast.success("Account created successfully!");
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message  || error?.message || "Registration failed!"); 
//       });
//   };

//   const handleLogin = () => {
//     axios
//       .post("/login", { email, password })
//       .then((res) => {
//         console.log(res.data,"<<<<<<<res.data");
//         if (res.data.status === 200) {
//           localStorage.setItem("token", res.data.token);
//           toast.success("Login successful!"); 
//           setTimeout(()=>{
//             setShowLogin(false);
//           },1500)
//           localStorage.setItem("user", JSON.stringify(res.data.data));
//         } else {
//           toast.error(res.data.message || "Login failed!");
//         }
//       })
//       .catch((error) => {
//         console.log(error,"<<<<<<<error");
//         toast.error(error?.response?.data?.message || error?.message ||"An error occurred!"); 
//       });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (currState === "Sign Up") {
//       handleSignUp();
//     } else {
//       handleLogin();
//     }
//   };

//   return (
//     <div className="login-popup">
//       <form className="login-popup-container" onSubmit={handleSubmit}>
//         <div className="login-popup-title">
//           <h2>{currState}</h2>
//           <img
//             onClick={() => {
//               setShowLogin(false);
//             }}
//             src={assets.cross_icon}
//             alt=""
//           />
//         </div>
//         <div className="login-popup-input">
//           {currState === "Login" ? (
//             <></>
//           ) : (
//             <input
//               type="text"
//               placeholder="Your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           )}
//           <input
//             type="email"
//             placeholder="Your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">
//           {currState === "Sign Up" ? "Create account" : "Login"}
//         </button>

//         <div className="login-popup-condition">
//           <label>
//             <input type="checkbox" required />
//             <span>
//               By continuing, I agree to the terms of use & privacy policy.
//             </span>
//           </label>
//         </div>

//         <div>
//           {currState === "Login" ? (
//             <p>
//               Create a new account?{" "}
//               <span
//                 onClick={() => {
//                   setCurrState("Sign Up");
//                 }}
//               >
//                 Click here
//               </span>
//             </p>
//           ) : (
//             <p>
//               Already have an account?{" "}
//               <span
//                 onClick={() => {
//                   setCurrState("Login");
//                 }}
//               >
//                 Login here
//               </span>
//             </p>
//           )}
//         </div>
//       </form>

//       {/* Toast container to display notifications */}
//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// }

// export default LoginPoppus;

import React from "react";
import "./LoginPoppus.css";
import { assets } from "../../assets/assets";
import axios from "../../axios/axios";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function LoginPoppus({ setShowLogin, setUserAuth }) { 
  const [currState, setCurrState] = React.useState("Login");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSignUp = () => {
    axios
      .post("/registration", { email, name, password })
      .then((res) => {
        // setShowLogin(false);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        setUserAuth(true);
        setCurrState("Login")
        toast.success("Account created successfully!");
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message || error?.message || "Registration failed!"); 
      });
  };

  const handleLogin = () => {
    axios
      .post("/login", { email, password })
      .then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("token", res.data.token);
          setUserAuth(true);
          toast.success("Login successful!"); 
          
        setTimeout(() => {
          setShowLogin(false); 
          window.location.reload(); 
        }, 500);
          localStorage.setItem("user", JSON.stringify(res.data.data));
        } else {
          toast.error(res.data.message || "Login failed!");
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message || error?.message ||"An error occurred!"); 
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setName("");
    if (currState === "Sign Up") {
      handleSignUp();
    } else {
      handleLogin();
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => {
              setShowLogin(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? null : (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className="login-popup-condition">
          <label>
            <input type="checkbox" required />
            <span>
              By continuing, I agree to the terms of use & privacy policy.
            </span>
          </label>
        </div>

        <div className="click-hear">
          {currState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginPoppus;
