import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import products from "../products/products";
import "../Styles/production3.css";
import { useTranslation } from "react-i18next";


function Production3() {
    let worksData = products.filter((item) => item.category_id === 3);
       const { t } = useTranslation();
  return (
    <section id="production3" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h1>{t("production3.description")}</h1>
          <h4>{t("production3.title1")}</h4>
        </div>
        <Row className="portfoliolist">
          {worksData.map((works) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3} key={works.id}>
                <div className="portfolio-wrapper">
                  <a href={`/product/${works.id}`} className="d-flex">
                    <Image src={works.image} />
                    <div className="label text-center">
                      <h3>{works.title}</h3>
                      <p>{works.subtitle}</p>
                    </div>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Production3;


