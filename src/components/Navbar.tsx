import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import logo from "../assets/logo.png";

import styles from "../styles/Navbar.module.css";

export function Navbar() {
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  return (
    <NavbarBS
      className={`${styles.NavbarBG} shadow-md`}
      expanded={expanded}
      expand="md"
    >
      <Container>
        <NavbarBS.Brand
          to={"/"}
          as={NavLink}
          className="d-flex align-items-center"
        >
          <img src={logo} alt="logo" height={90}></img>
          <span style={{ paddingLeft: "10px" }}>Starhög Gård</span>
        </NavbarBS.Brand>
        <NavbarBS.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <NavbarBS.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
          style={{ paddingRight: "10px" }}
        >
          <Nav className="ml-auto align-items-end">
            <Nav.Link to={"/"} as={NavLink}>
              Hem
            </Nav.Link>
            <Nav.Link to={"Lessons"} as={NavLink}>
              Lektioner
            </Nav.Link>
            <Nav.Link to={"Ridetrack"} as={NavLink}>
              Ridbana
            </Nav.Link>
            <Nav.Link to={"About"} as={NavLink}>
              Om
            </Nav.Link>
            <Nav.Link to={"Contact"} as={NavLink}>
              Kontakt
            </Nav.Link>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
}
