import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from '../actions/userActions';
import {useNavigate} from 'react-router-dom'
const Header = () => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;
  let history = useNavigate()
  const logoutHandler = () => {
    dispatch(logout());
    history ('/')
   
  };
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <div>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="/" className="nav__logo">
            <i className="ri-attachment-line"></i> Examfy
          </a>

          <div className={active} id="nav-menu">
            <ul className="nav__list">
              {userInfo? (
                <li className="nav__item">
                  <a href="#dashboard" className="nav__link ">
                    Dashboard
                  </a>
                </li>
              ) : null}
             
              
              <li className="nav__item">
                <a href="#faqs" className="nav__link">
                 FAQs
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact Us
                </a>
              </li>
              {userInfo && userInfo.isAdmin &&(
                <li className="nav__item">
                  <a href="#team" className="nav__link">
                    Team
                  </a>
                </li>
              ) }
              {!userInfo && <li className="nav__item">
                <Link to="/login" className="nav__link">
                  Login
                </Link>
              </li>}
              {userInfo ? (
                <li className="nav__item">
                  <p onClick={logoutHandler} className="nav__link">
                    Logout
                  </p>
                </li>
              ) : null}
            </ul>
          </div>
          <div onClick={navToggle} className={icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
