import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import SocialMedia from "./SocilaMedia"
import Tilt from "react-parallax-tilt";
import astronaut from "../../Assets/astronaut.png";
import Particle from "../Particle";
import Type from "./Type";




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
                    style={{ maxHeight: "450px", opacity:0.8 }}
                  />
                  </Tilt>              
                </Col>

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
                
                <SocialMedia />
              </Row>
            </Container>
          </Container>
        </section>
      </motion.div> 
    </AnimatePresence>
  );
}

export default Home;
