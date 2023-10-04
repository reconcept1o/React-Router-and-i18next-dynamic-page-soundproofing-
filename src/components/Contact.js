import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import Logo from "../picture/logo3.jpg";
import { useTranslation } from "react-i18next";


function ContactPage() {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  const pageStyle = {
    backgroundColor: "grey", 
    minHeight: "100vh", 
  };

  const { t } = useTranslation();

  return (
    <div style={pageStyle}>
      <Container className="py-5">
        {/* İletişim Bilgileri ve Mesaj Kutusu */}
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <h1>{t("contact1.title")}</h1>
            <img src={Logo} alt="Resim Açıklaması" className="img-fluid mt-3" />
          </Col>
        </Row>

        {/* İletişim Bilgileri Sütunu */}
        <Row>
          <Col md={6} className={`mb-4 ${showContact ? "show-contact" : ""}`}>
            <Card className="bg-warning text-white">
              <Card.Body>
                <h2 className="mb-4">{t("contact1.p1")}</h2>
                <h6>ANKASES</h6>
                <p>
                  {t("contact1.p2")}
                  <br />
                  Ostim / Yenimahalle / ANKARA
                </p>
                <p> {t("contact1.p3")}</p>
                <p> {t("contact1.p4")}</p>
                <p>Ahmet YILMAZ: +90 551 206 76 48</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Mesaj Kutusu Sütunu */}
          <Col md={6} className={`mb-4 ${showContact ? "show-contact" : ""}`}>
            <Card className="bg-warning">
              <Card.Body>
                <h2 className="mb-4"> {t("contact1.subtitle")}</h2>
                <Form>
                  <Form.Group controlId="formName">
                    <Form.Label> {t("contact1.p5")}</Form.Label>
                    <Form.Control type="text" placeholder="Adınızı girin" />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label> {t("contact1.p6")}</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="E-posta adresinizi girin"
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage">
                    <Form.Label> {t("contact1.p7")}</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Mesajınızı buraya yazın"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    {t("contact1.p8")}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactPage;
