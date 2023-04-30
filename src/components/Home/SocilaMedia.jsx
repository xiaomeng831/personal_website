import React from "react";
import { Container, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GiPlainArrow } from "react-icons/gi"




function SocialMedia() {
    return (
        <Container fluid className="home-section" id="home">
            <Container>
                <Col md={12} className="home-social">
                    <h4>Let's Connect <GiPlainArrow style={{ color: "#16B0E3" }} /></h4>
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
            </Container>
        </Container>
    )
}

export default SocialMedia;

