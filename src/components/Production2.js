
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import products from "../products/products";
// import "../Styles/ProductDetail.css";
import "../Styles/production2.css";

import { useTranslation } from "react-i18next";




function Production2() {
  let worksData = products.filter((item) => item.category_id === 2);
   const { t, } = useTranslation();

  return (
    <section id="production2" className="block works-block">
      <div className="title-holder text-center">
        <h2>{t("production1.title")}</h2>
        <p>{t("production2.subtitle")}</p>
      </div>
      <Container fluid>
        <Row className="portfoliolist">
          {worksData.map((works) => (
            <Col xs={12} sm={6} md={4} lg={3} key={works.id}>
              <div className="portfolio-wrapper">
                <a href={`/product/${works.id}`} className="d-flex">
                  <Image src={works.image} className="mx-auto" />
                  <div className="text-center mt-3">
                    <h3>{works.title}</h3>
                    <p>{works.subtitle}</p>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
        {/* <Pagination>{items}</Pagination> */}
      </Container>
    </section>
  );
}

export default Production2;
