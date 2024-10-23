import React, { useContext } from "react";
import UserContext from "../context/Usercontext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login</div>;
  return <div> Welcome {user.username} Your password is {user.password}</div>;
}

export default Profile;
