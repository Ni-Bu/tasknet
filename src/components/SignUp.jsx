import React, { useState, useContext } from "react";
import Input from "./Input";
import { ReactComponent as Mail } from "../img/mail.svg";
import { ReactComponent as User } from "../img/person.svg";
import { ReactComponent as Password } from "../img/password.svg";
import NavBar from "./NavBar";
import styles from "../css/Login.module.css";
import * as auth from "../services/authService";
import { toast } from "react-toastify";
import ThemeContext from "../context/themeContext";
function SignUp(props) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user", user);
    const response = auth.register(user);
    if (response !== "failed") {
      toast.success("registered Successfully");
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
      <div className={styles.SignUpformContainer}>
        <form
          onSubmit={handleSubmit}
          className={`${styles.SignUpform} ${
            theme === "dark" ? styles.formDark : styles.formLight
          }`}
        >
          <h1 className={styles.title}>Sign Up</h1>
          <Input
            Icon={Mail}
            className={styles.input}
            value={user.email}
            setValue={setUser}
            placeholder="email"
            name="email"
          />

          <Input
            Icon={User}
            className={styles.input}
            value={user.username}
            setValue={setUser}
            placeholder="username"
            name="username"
          />

          <Input
            Icon={Password}
            className={styles.input}
            value={user.password}
            setValue={setUser}
            placeholder="password"
            type="password"
            name="password"
          />

          <Input
            Icon={Password}
            className={styles.input}
            value={user.confirmPassword}
            setValue={setUser}
            placeholder="confirm password"
            type="password"
            name="confirmPassword"
          />

          <button
            className={`${styles.btn} ${
              theme === "dark" ? styles.btnDark : styles.btnLight
            } `}
            type="submit"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
