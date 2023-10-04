import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import products from "../products/products";
import "../Styles/production1.css";

function Production1() {
  let worksData = products.filter((item) => item.category_id === 1);

  return (
    <section id="production1" className="block works-block">
      <div className="title-holder">
        <h2>Ankases Ses ve Isı Yalıtımı</h2>
        <p>
          Ses Kabinleri , Ankara Chiller Grubu, Jeneratör, Odyometri Kabinleri,
          Ses Yalıtım Kabinleri
        </p>
      </div>
      <Container fluid>
        <Row>
          <Col sm={12}></Col>
          <Col sm={12}>
            <Row className="portfoliolist">
              {worksData.map((works) => (
                <Col xs={12} sm={6} md={4} lg={3} key={works.id}>
                  <div className="portfolio-wrapper">
                    <a href={`/product/${works.id}`} className="d-flex">
                      <Image src={works.image} className="mx-auto" />
                      <div>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Production1;
