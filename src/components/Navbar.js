import "./Navbar.css";
import { Route } from "react-router-dom";

import Logo from "./images/logo_2.png";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useContext } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { AuthContext } from "../contexts/authContext";

import Cart from "./Cart";

function Navbar() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-center mx-auto ">
      <Route exact path="/">
        <Link
          href=""
          className="nav-link"
          activeClass="active"
          to="bestseller"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Best
          <br />
          Sellers
        </Link>
      </Route>

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
        className="collapse navbar-collapse d-flex justify-content-center"
        id="navbarText"
      >
        <ul className="navbar-nav mx-auto" style={{ maxWidth: "2.95%" }}>
          {/* Esconder o link de quem não for Admin */}
          {loggedInUser.user.role === "ADMIN" ? (
            <li className="nav-item mx-auto">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/create-product"
              >
                Create Product
              </NavLink>
            </li>
          ) : null}

          {/* <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/all">
              All Products
            </NavLink>
          </li> */}
        </ul>

        <div
          className="logo d-flex mx-auto"
          style={{ left: "50%", right: "50%" }}
        >
          <div className="ml-5 mr-3 d-flex justify-content-center mx-auto">
            <NavLink className="navbar-brand mx-auto" to="/">
              <img src={Logo} alt="logo" />
            </NavLink>
          </div>
        </div>

        <div className="mr-3 mx-auto">
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
            <NavLink className="nav-link" activeClassName="active" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
