import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LHeader from "../components/LHeader";
import { register } from "../actions/userActions";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  let history = useNavigate();
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error } = userRegister;
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history("/");
    }
  }, [history, userInfo]);

  const registerHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password, roll, gender));
  };

  return (
    <div>
      <LHeader />
      <section className="steps section container" id="register">
        <div className="steps__bg">
          <h2 className="section__title-center steps__title">
            “The Online Examination System” <br />
            Register To Start Your Exam.
          </h2>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="title">Register</div>
          <div className="content">
            <form onSubmit={registerHandler}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Roll Number</span>
                  <input
                    type="text"
                    placeholder="Enter your roll number"
                    required
                    onChange={(e) => setRoll(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="text"
                    placeholder="Enter your password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="gender-details">
                <select
                  name="gender"
                  className="gender-title"
                  onChange={(e) => setGender(e.target.value)}
                  defaultValue="Gender"
                  required
                >
                  <option value="none">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">other</option>
                </select>
              </div>
              <button type="submit" className="contact__button button">
                Register
              </button>
            </form>
            {loading && <h1>Loading</h1>}
            {error && <h1>{error}</h1>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterScreen;
