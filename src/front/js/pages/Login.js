import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [user, setUser] = useState("");

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg"
            id="userIcon"
            alt="User Icon"
          />
        </div>
        <form>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="login"
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input
            type="button"
            onClick={() => {
              if (actions.login(user)) props.history.push("/dashboard");
            }}
            className="fadeIn fourth"
            value="Log In"
          />
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  match: PropTypes.object,
};