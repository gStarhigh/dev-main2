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
      <section className="py-5 py-md-5 py-lg-5 py-xl-5">
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
                    Welcome to Dressage Delight
                  </h1>
                  <p className="text-muted">
                    Your one-stop platform for all things dressage. Book
                    lessons, reserve ridetrack time, and connect with us.
                  </p>
                </div>
                <div className="w-100 max-w-sm space-y-2">
                  <Form className="d-flex gap-2">
                    <Form.Control
                      className="flex-1"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <Form.Control
                      className="flex-1"
                      placeholder="Enter your password"
                      type="password"
                    />
                    <Button type="submit">Login</Button>
                  </Form>
                  <p className="text-muted">
                    Don't have an account? <span>Sign Up</span> here.
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
                <h2 className="text-2xl font-bold">Book a Lesson</h2>
                <p className="text-muted">
                  Schedule a dressage lesson with our expert trainers.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className={`${styles.Cards} mb-3`}>
              <div className="d-flex flex-column align-items-center text-center">
                <FontAwesomeIcon icon={faClock} className={styles.FontA} />
                <h2 className="text-2xl font-bold">Reserve Ridetrack</h2>
                <p className="text-muted">
                  Reserve time on our state-of-the-art ridetrack.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className={`${styles.Cards} mb-3`}>
              <div className="d-flex flex-column align-items-center text-center">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  className={styles.FontA}
                />
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <p className="text-muted">
                  Have questions or need assistance? We're here to help.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
