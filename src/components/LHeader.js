import React,{useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
const LHeader = () => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
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
          <Link to="/" className="nav__logo">
            <i className="ri-attachment-line"></i> Examfy
          </Link>

          <div className={active} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  end
                  // exact={true}
                  to="/login"
                  className="nav__link "
                  // activeClassName="nav__link active-link"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  end
                  // exact={true}
                  to="/register"
                  className="nav__link"
                  // activeClassName="nav__link active-link"
                >
                  Register
                </NavLink>
              </li>
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

export default LHeader;
