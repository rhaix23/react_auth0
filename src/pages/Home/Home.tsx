import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export const Home = () => {
  const navigate = useNavigate();
  const { user, loginWithRedirect, logout } = useAuth0();

  return (
    <div className={styles.container}>
      <h1>Auth0 Authentication Using React</h1>

      {user ? (
        <>
          <button className={styles.btn} onClick={() => navigate("/profile")}>
            Profile
          </button>
          <button className={styles.btn} onClick={() => logout()}>
            Logout
          </button>
        </>
      ) : (
        <>
          <button className={styles.btn} onClick={() => loginWithRedirect()}>
            Sign in
          </button>
        </>
      )}
    </div>
  );
};
