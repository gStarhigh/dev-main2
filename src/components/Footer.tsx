import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

import styles from "../styles/Footer.module.css";

export function Footer() {
  return (
    <NavbarBS className={styles.Fixed}>
      <Container className="justify-content-center">
        <Nav>
          <div className={styles.Navlinks}>
            <Nav.Link to={"Lessons"} as={NavLink} className={styles.Navlinks}>
              Lektioner
            </Nav.Link>
            <Nav.Link to={"Ridetrack"} as={NavLink} className={styles.Navlinks}>
              Ridbana
            </Nav.Link>
          </div>
          <NavbarBS.Brand
            to={"/"}
            as={NavLink}
            className="d-flex align-items-center"
          >
            <img
              src={logo}
              alt="logo"
              height={80}
              className={styles.Logo}
            ></img>
            <span style={{ paddingLeft: "10px" }} className={styles.LogoText}>
              Starhög Gård
            </span>
          </NavbarBS.Brand>
          <div className={styles.Navlinks}>
            <Nav.Link to={"About"} as={NavLink} className={styles.Navlinks}>
              Om
            </Nav.Link>
            <Nav.Link to={"Contact"} as={NavLink} className={styles.Navlinks}>
              Kontakt
            </Nav.Link>
          </div>
        </Nav>
      </Container>
    </NavbarBS>
  );
}
