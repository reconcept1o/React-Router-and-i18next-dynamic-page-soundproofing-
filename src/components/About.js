

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import imgabout4 from "../picture/about/imgabout4.png";
import '../Styles/Footer.css'
import { useTranslation } from "react-i18next";

const AppAbout = () => {

 const { t } = useTranslation();





  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder text-center">
          <h2>{t("about.title")}</h2>
          <div className="subtitle">{t("about.description")}</div>
        </div>
        <Row className="align-items-center">
          <Col sm={12} md={6}>
            <Image src={imgabout4} fluid rounded />
          </Col>

          <Col sm={12} md={6}>
            <h1 className="mb-4">{t("about.subtitle")}</h1>
            <p className="mb-4">{t("about.description")}</p>
            <h2 className="mb-4">{t("about.mission")}</h2>
            <p className="mb-4">{t("about.mission.description")}</p>
            <h2 className="mb-4">{t("about.vision")}</h2>
            <p className="mb-4">{t("about.vision.description")}</p>
            <h2 className="mb-4">{t("about.values")}</h2>
            <p className="mb-4">{t("about.values.description")}</p>
          </Col>
        </Row>

        {/* YouTube video kutuları */}
        <Row className="mt-5">
          <Col sm={12} md={6} className="mb-4">
            <div className="youtube-video">
           
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/3tST88Ghiy8?si=jV63pdDdOV92xIDq&amp;start=25"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <div className="youtube-video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/83T9yzSWrdA?si=rXfyy2tfYDnOnKyb"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppAbout;



