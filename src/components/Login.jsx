import React, { useState, useContext } from "react";

import Input from "./Input";
import { ReactComponent as User } from "../img/person.svg";
import { ReactComponent as Password } from "../img/password.svg";
import NavBar from "../components/NavBar";
import styles from "../css/Login.module.css";
import * as auth from "../services/authService";
import { toast } from "react-toastify";
import ThemeContext from "../context/themeContext";

function Login(props) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [currentUser, setCurrentUser] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = auth.login(currentUser);

    if (response) {
      console.log(response);
      setCurrentUser(response);
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      toast.success("Logging In");
      window.location = "/todo";
    } else {
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <div
      className={`${styles.container}  ${
        theme === "dark" ? styles.containerDark : styles.containerLight
      }`}
    >
      <NavBar />
      <div className={styles.formContainer}>
        <form
          onSubmit={handleSubmit}
          className={`${styles.form} ${
            theme === "dark" ? styles.formDark : styles.formLight
          }`}
        >
          <h1 className={styles.title}>Log In</h1>

          <Input
            Icon={User}
            className={styles.input}
            value={currentUser.email}
            setValue={setCurrentUser}
            placeholder="email"
            type="email"
            name="email"
          />

          <Input
            Icon={Password}
            className={styles.input}
            setValue={setCurrentUser}
            value={currentUser.password}
            placeholder="password"
            type="password"
            name="password"
          />

          <button
            className={`${styles.btn} ${
              theme === "dark" ? styles.btnDark : styles.btnLight
            } `}
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
