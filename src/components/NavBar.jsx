import { React, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeContext from "../context/themeContext";
import logo from "../img/logo_PNG_Transparent.png";
import { useHistory } from "react-router-dom";
function NavBar(props) {
  let history = useHistory();
  const { theme, setTheme } = useContext(ThemeContext);
  const handleClick = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <>
      <nav className={theme === "dark" ? "navDark" : "navLight"}>
        <Link to="/" className="logo">
          <img src={logo} alt="logo"></img>
        </Link>
        <NavLink to="/" className="links">
          Home
        </NavLink>
        {/* <NavLink to="/profile" className="links">
          Profile
        </NavLink> */}
        {console.log(history)}
        {history.location.pathname !== "/signup" &&
          history.location.pathname !== "/todo" && (
            <NavLink to="/signup" className="links">
              Sign Up
            </NavLink>
          )}
        {history.location.pathname !== "/login" &&
          history.location.pathname !== "/todo" && (
            <NavLink to="/login" className="links">
              Log In
            </NavLink>
          )}
        <label class="switch">
          <input type="checkbox" onClick={handleClick} />
          <span class="slider round"></span>
        </label>
      </nav>
    </>
  );
}

export default NavBar;
