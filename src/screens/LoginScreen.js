import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/userActions";
import LHeader from "../components/LHeader";
import gif from "../assests/L2.gif";

const LoginScreen = () => {
  let history = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  
  useEffect(() => {
    if (userInfo) {
      history("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <LHeader />

      <section id="login">
        <div className="container">
          <div className="title">Login</div>

          <div className="content">
            <form onSubmit={submitHandler}>
              <img src={gif} alt="" className="login__img" />
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <button type="submit" className="contact__button button">
                Login
              </button>
            </form>
            {error && <h1>{error}</h1>}
            {loading && <h1>Loading...</h1>}
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginScreen;
