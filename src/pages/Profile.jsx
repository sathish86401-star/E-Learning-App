import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user, isLoggedIn } = useContext(UserContext);

  if (!isLoggedIn) {
    return <div style={{ padding: "20px" }}><h2>Please log in to view your profile.</h2></div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Status:</strong> Active Student</p>
    </div>
  );
};

export default Profile;