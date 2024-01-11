import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Home.module.css";
import { Form } from "react-bootstrap";

export function Home() {
  return (
    <main className="flex-1">
      <section className="py-lg-5 py-xl-5">
        <Container fluid>
          <Row className="gap-5">
            <Col lg={3} xl={5} className="d-flex align-items-center">
              <Image
                alt="Hero"
                className="mx-auto rounded"
                src="https://res.cloudinary.com/draygqe7t/image/upload/v1699965816/media/images/resizedImage_itrdue.png"
                width="550"
                height="310"
                fluid
              />
            </Col>
            <Col
              lg={3}
              xl={6}
              className="d-flex flex-column justify-content-center gap-4"
            >
              <div className={styles.Welcome}>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">
                    Välkommen till Starhög Gård
                  </h1>
                  <p className="text-muted">
                    Boka lektioner, anmäl dig till evenemang och innackordera
                    din häst hos oss. Här kommer hästarna i första hand.
                  </p>
                </div>
                <div className="w-100 max-w-sm space-y-2">
                  <Form className="d-flex gap-2">
                    <Form.Control
                      className="flex-1"
                      placeholder="Email"
                      type="email"
                    />
                    <Form.Control
                      className="flex-1"
                      placeholder="Lösenord"
                      type="password"
                    />
                    <Button type="submit">Logga in</Button>
                  </Form>
                  <p className="text-muted">
                    Har du inget konto? <span>Registrera dig</span> här.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5 py-md-5 py-lg-5">
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={12} sm={6} md={4} className={`${styles.Cards} mb-3`}>
              <div className="d-flex flex-column align-items-center text-center">
                <FontAwesomeIcon icon={faCalendar} className={styles.FontA} />
                <h2 className="text-2xl font-bold">Boka en lektion</h2>
                <p className="text-muted">
                  Boka en lektion på vår ridbana eller hemma hos er med våra
                  högklassiga instruktörer.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className={`${styles.Cards} mb-3`}>
              <div className="d-flex flex-column align-items-center text-center">
                <FontAwesomeIcon icon={faClock} className={styles.FontA} />
                <h2 className="text-2xl font-bold">Reservera ridbanan</h2>
                <p className="text-muted">Reservera tid på vår ridbana.</p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className={`${styles.Cards} mb-3`}>
              <div className="d-flex flex-column align-items-center text-center">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  className={styles.FontA}
                />
                <h2 className="text-2xl font-bold">Kontakta oss</h2>
                <p className="text-muted">
                  Har ni frågor eller behöver hjälp med något? Vi är här för er
                  skull!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
