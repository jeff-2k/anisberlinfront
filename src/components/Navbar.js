import "./Navbar.css";
import { Route } from "react-router-dom";

import Logo from "./images/logo_2.png";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useContext } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { AuthContext } from "../contexts/authContext";

import Cart from "./Cart";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

function Navbar() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-center ">
    <div className="">
      <Route exact path="/">
        <Link
          href=""
          className="nav-link ml-5"
          activeClass="active"
          to="bestseller"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Best Sellers
        </Link>
      </Route>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-flex justify-content-center mx-5"
        id="navbarText"
      >
        <div
          className="logo d-flex mx-auto"
        >
          <div className="">
            <NavLink className="navbar-brand " to="/">
              <img src={Logo} alt="logo" />
            </NavLink>
          </div>
        </div>
        <div className="">
          {loggedInUser.user.name ? (
            <div className="d-flex align-items-center">
              <Cart />
              <Dropdown>
                <Dropdown.Toggle variant="second" id="dropdown-basic">
                  <img
                    src={`https://ui-avatars.com/api/?name=${loggedInUser.user.name}&size=32&background=f1d190&color=133f2f`}
                    className="rounded-circle"
                    alt="Profile"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item to="/create-product" as={NavLink}>
                <ul className="navbar-nav danger">
          {/* Esconder o link de quem não for Admin */}
          {loggedInUser.user.role === "ADMIN" ? (
            <li className="nav-item">
                Create Product
            </li>
          ) : null}
          {/* <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/all">
              All Products
            </NavLink>
          </li> */}
        </ul>
                </Dropdown.Item>
                  <Dropdown.Item to="/profile" as={NavLink}>
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(event) => {
                      event.preventDefault();
                      // Fazendo processo de Logout
                      setLoggedInUser({ user: {}, token: "" });
                      localStorage.removeItem("loggedInUser");
                    }}
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            <div className="login-ref">
            <NavLink className="login-ref nav-link" activeClassName="active" to="/login">
              Login
            </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
