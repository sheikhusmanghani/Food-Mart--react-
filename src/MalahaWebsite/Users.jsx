// UserProfile.js
import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams(); // Get the dynamic part from the URL
console.log(id)
  return (
    <div>
      <h1>User Profile</h1>
      <p>This is the profile for user with ID: {id}</p>
    </div>
  );
};

export default UserProfile;
