import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Todo from "./components/Todo";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import { React, useState } from "react";
import MainPage from "./components/MainPage";
import SignUp from "./components/SignUp";
import "./components/App.css";
import ThemeContext from "./context/themeContext";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/todo" component={Todo} />
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
