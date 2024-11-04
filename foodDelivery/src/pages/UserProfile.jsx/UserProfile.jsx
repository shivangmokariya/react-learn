import { useState, useEffect } from "react";
import axios from "../../axios/axios";
import "./UserProfile.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch user profile data from the API
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          const userData = response.data.data;
          console.log(userData, "<<<<<<<<<<<userData");
          const nameParts = userData.name ? userData.name.split(" ") : ["", ""];
          setFirstName(nameParts[0] || "");
          setLastName(nameParts[1] || "");
          setEmail(userData.email || "");
        } else {
          toast.error("Failed to fetch profile data.");
        }
      } catch (error) {
        if (error.response.status === 401) {
          return toast.error("Unauthorised or token has expired");
        }
        toast.error("An error occurred while fetching profile data.");
        console.error(error);
      }
    };

    fetchUserProfile();
  }, []);

  // Handle form submission
  const handleUpdateProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        "/update-profile",
        {
          firstName,
          lastName,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Profile updated successfully!");
        navigate("/");
      } else {
        toast.error("Failed to update profile.");
      }
    } catch (error) {
      if (error.response.status === 401) {
        return toast.error("Unauthorised or token has expired");
      }
      toast.error("An error occurred during profile update.");
      console.error(error);
    }
  };

  return (
    <div className="user-profile">
      <h2>Update Profile</h2>
      <form>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input type="email" value={email} readOnly />
        </label>
        {/* <label>
          Password:
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            readOnly
          />
        </label> */}
        <div className="button-container">
          <button type="button" onClick={handleUpdateProfile}>
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserProfile;
