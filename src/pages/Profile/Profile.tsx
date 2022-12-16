import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export const Profile = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div className={styles.container}>
      <h2>Profile</h2>
      <img src={user.picture} />
      <h3>Name: {user.name}</h3>
      <p>Email: {user.email}</p>
      <button className={styles.btn} onClick={() => navigate("/")}>
        Go to home
      </button>
    </div>
  );
};
