import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
   const { t, } = useTranslation();
  return (
    <footer id="footer" className="bg-danger text-light ">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-left mb-3">
            <p>{t("footer.explain")}</p>
          </Col>
          <Col md={6} className="text-center text-md-right mb-3">
            <p>by ReconceptX (2023)</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

