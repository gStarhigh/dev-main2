import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faHorseHead } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Home.module.css";

import { News } from "../components/news";
import { Instagram } from "../components/Instagram";
import { Stable } from "../components/Stable";
import { Pasture } from "../components/Pasture";
import { Event } from "../components/Event";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <main className="flex-1">
      <section>
        <div className={styles.Hero}>
          <img
            className={styles.HeroImage}
            src="https://res.cloudinary.com/draygqe7t/image/upload/v1691490074/20201017_083108_czijtu.jpg"
          ></img>
          <div className={styles.HeroText}>
            <FontAwesomeIcon icon={faHorseHead} className={styles.FontHorse} />
            <h2 className={styles.HeroH2}>Starhög {"\n"}Gård</h2>
            <button className={styles.HeroButton}>Kontakta oss</button>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.Welcome}>
          <h4>Välkommen till </h4>
          <h3>STARHÖG GÅRD</h3>
          <p>
            Precis utanför Ängelholm, i en kuperad och välskött miljö på 9
            hektar, finner du Starhög Gård. Gården, som är belägen med närhet
            till både Helsingborg och Ängelholm, är familjen Starhögs
            hjärteprojekt sedan 2019. Här bedrivs en mångfald av aktiviteter,
            där hästar, evenemang och dressyrlektioner utgör kärnan i
            verksamheten.
          </p>
          <p>
            Gården är inte bara en plats för affärsverksamhet utan även ett hem.
            Maria Starhög är hjärnan bakom gården och bor här tillsammans med
            sin familj. Familjen inkluderar maken Gustaf samt deras två barn,
            Ellie och Isak.
          </p>
          <p>
            På Starhög Gård finns också möjlighet att medverka i olika evenemang
            som kan vara allt från dressyrläger, till hagelskytte. Det finns
            också möjligheter att hyra plats på lösdrift, stall och ridbanan.
            För mer info om vad vi kan erbjuda är ni välkomna att kontakta oss
            eller se våra kommande evenemang.
          </p>
          <p>
            Välkommen till Starhög Gård – där passion för hästar och familjens
            gemenskap förenas i en vacker lantlig omgivning.
          </p>
          <div>
            <button className={styles.HeroButton}>Kontakta oss</button>
            <button className={styles.HeroButton}>Evenemang</button>
          </div>
        </div>
      </section>
      <News />
      <Instagram />
      <Event />
      <Stable />
      <Pasture />

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
      <Footer />
    </main>
  );
}
