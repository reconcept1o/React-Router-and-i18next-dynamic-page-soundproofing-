
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Logo from "../picture/3.png";
import Akustik from "../picture/555.jpg";
import Sound from "../picture/444.jpg";
import "../Styles/News.css";
import { useTranslation } from "react-i18next";

function News() {
  const { t } = useTranslation();
  return (
    <section id="news" className="block works-block">
      <div className="title-holder text-center">
        <h2>{t("Ses Yalıtımı ve Akustik")}</h2>
        <img src={Logo} className="picnews" alt="" />
      </div>
      <Container fluid>
        <Row>
          <Col md={6}>
            <div className="d-flex flex-column align-items-center">
              <Image
                src={Akustik}
                alt="Resim 1"
                className="mx-auto equal-image"
                style={{ maxWidth: "100%" }}
              />
              <div className="text-center mt-3">
                <h1>{t("akustik.title")}</h1>
                <p>{t("akustik.par")}</p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex flex-column align-items-center">
              <Image
                src={Sound}
                alt="Resim 2"
                className="mx-auto equal-image"
                style={{ maxWidth: "100%" }}
              />
              <div className="text-center mt-3">
                <h1>{t("sesyalıtımı.title")}</h1>
                <p>{t("sesyalıtımı.par")}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default News;
