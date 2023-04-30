import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import SocialMedia from "./SocilaMedia"
import Tilt from "react-parallax-tilt";
import astronaut from "../../Assets/astronaut.png";
import Particle from "../Shared/Particle";
import Type from "./Type";
import Projects from './Projects/Projects'
import Skills from './Skill/Skills'



function Home() {
  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        initial={{ opacity: 0, }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <section>
          <Container fluid className="home-section" id="home">
            <Particle />
            <Container className="home-content">
              <Row>
                <Col md={5} style={{ paddingBottom: 20 }}>
                  <Tilt>
                    <img
                      src={astronaut}
                      alt="home pic"
                      className="img-fluid"
                      style={{ maxHeight: "450px", opacity: 0.8 }}
                    />
                  </Tilt>
                  <SocialMedia />
                </Col>

                <Col md={7} className="home-header">
                  <span className="welcome">
                    Welcome to my Personal Portfolio
                  </span>
                  <hr />
                  <span>
                    <strong style={{ fontSize: "3rem" }}>🚀</strong>
                    <strong className="heading-name">Hi, There. I'M Brady</strong>
                    <br />
                    <Type />
                  </span>
                  <br />
                  <ul>
                    <li>
                      6 years work experience as a full stack developer with <strong className="main-color">C#</strong>, <strong className="main-color">ASP.Net</strong> and <strong className="main-color">JavaScript</strong>, <strong className="main-color">Angular</strong>.
                    </li>
                    <li>
                      Also good at <strong className="main-color">Java with Spring</strong>, <strong className="main-color">Node.js with Express.js</strong>, <strong className="main-color">TypeScript</strong> and <strong className="main-color">React</strong>.
                    </li>
                    <li>
                      Solid understanding about <strong className="main-color">OOP</strong>, <strong className="main-color">Design Patterns</strong> and familiar with <strong className="main-color">microservices</strong>
                    </li>
                    <li>
                      <strong className="main-color">A Canada PR</strong> with legal work authorization
                    </li>
                  </ul>
                </Col>

              </Row>
            </Container>
          </Container>
        </section>
        <section>
          <Skills />
        </section>

        <section>
          <Projects />
        </section>

      </motion.div>
    </AnimatePresence>
  );
}

export default Home;
