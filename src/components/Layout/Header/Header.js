import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { TaskContext } from "../../../contexts/TaskContext";
import { AuthenticationContext } from "../../../contexts/AuthenticationContext";

const Header = () => {
  const { tasks } = useContext(TaskContext);
  let { isAuthenticated, logoutUser } = useContext(AuthenticationContext);

  const handleLogout = () => {
    logoutUser();
  };

  // console.log("logged state from the Header", isAuthenticated);
  if (localStorage.getItem("token")) {
    isAuthenticated = "true";
  }
  // console.log("logged state from the the change", isAuthenticated);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand className="navBrand">
            <div className="logo"></div>

            <Link to="/" id="navBrand">
              Note
              <span id="cashBrand">path</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {!isAuthenticated ? (
                <div className="general-users">
                  <Nav.Link as={Link} href="/" to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} href="/features" to="/features">
                    Features
                  </Nav.Link>
                  <Nav.Link as={Link} href="/pricing" to="/pricing">
                    Pricing
                  </Nav.Link>
                </div>
              ) : (
                <div className="authenticated-users">
                  <Nav.Link as={Link} href="/" to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} href="/features" to="/features">
                    Features
                  </Nav.Link>
                  <Nav.Link as={Link} href="/pricing" to="/pricing">
                    Pricing
                  </Nav.Link>
                  <Nav.Link as={Link} href="/dashboard" to="/dashboard">
                    Dashboard
                  </Nav.Link>
                  <span
                    to="/"
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "#FF7500",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: " center",
                      color: "#whitesmoke",
                      marginTop: "10px",
                    }}
                  >
                    {tasks.length}
                  </span>
                </div>
              )}
            </Nav>
            <Nav className="rigt-nav-items">
              {!isAuthenticated ? (
                <div className="authButtons">
                  <Nav.Link as={Link} to="/login" href="/login">
                    <button className="btn btn-sm btn-primary">Login</button>
                  </Nav.Link>
                  <Nav.Link as={Link} href="/signup" to="/signup">
                    <button className="btn btn-sm btn-primary">Signup</button>
                  </Nav.Link>
                </div>
              ) : (
                <div className="authButtons">
                  <Nav.Link as={Link} href="/login" to="/login">
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    href="/dashboard/settings"
                    to="/dashboard/settings"
                  >
                    <button className="btn btn-sm btn-primary">
                      <i className="fas fa-cog"></i>
                    </button>
                  </Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
