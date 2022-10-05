import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import me from "../../Assets/me.png";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>

            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome to my Personal Portfolio
              </h1>

              <h1 className="heading-name">
                &nbsp;I'M
                <strong className="main-name"> Brady Xu</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <strong style={{fontSize:"3rem"}}>⌨</strong>              
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt> 
              <img
                src={me}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", opacity:0.8 }}
              />
              </Tilt>              
            </Col>
            <Col md={12} className="home-social">
            <h1>Social Links</h1>
            <br />
            <ul className="home-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/xiaomeng831"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/xiaomeng-xu-915ba9200/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>              
            </ul>
          </Col>

          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
