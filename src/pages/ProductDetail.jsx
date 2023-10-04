


import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../products/products";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../Styles/ProductDetail.css";
import { useTranslation } from "react-i18next";

function ProductDetail() {

     const { t } = useTranslation();




  let params = useParams();
  let product = products.find((item) => item.id === parseInt(params.id));
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setShowModal(false);
  };

  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }


 

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Row>
            <Col xs={12}>
              <Image
                src={product.image}
                alt={product.title}
                fluid
                className="detailimage"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Carousel>
                {product.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <Image
                      src={image}
                      alt={`Resim ${index + 1}`}
                      fluid
                      onClick={() => handleImageClick(image)}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6} className="detail-text">
          <h1>{product.title}</h1>  
           <h1>{product.subtitle}</h1> 
            <h1>{product.paragraph}</h1>
           <p>{product.p10}</p>
          <h5>{product.Description}</h5>
          <p>{product.explain}</p>
          <p>{product.p1}</p>
          <h6>{product.h1}</h6>
          <p>{product.p2}</p>
          <h6>{product.h2}</h6>
          <p>{product.p3}</p>
          <h6>{product.h3}</h6>
          <p>{product.p4}</p>
          <h6>{product.h4}</h6>
          <p>{product.p5}</p>
          <h6>{product.h5}</h6>
          <p>{product.p6}</p>
          <h6>{product.h6}</h6>
          <p>{product.p7}</p>
          <p>{product.h7}</p>
          <p>{product.p8}</p>
          <p>{product.h8}</p>
          <p>{product.p9}</p>
          <p>{product.h9}</p>
          <p>{product.p10}</p>
          <p>{product.h10}</p>
          <p>{product.p11}</p>
          <p>{product.h11}</p>
          <p>{product.p12}</p>
          <p>{product.h12}</p>
          <p>{product.p13}</p>
          {product.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {/* Diğer başlıklar ve paragraflar buraya eklenir */}
        </Col>
      </Row>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Body>
          <Image src={selectedImage} alt="Seçilen Resim" fluid />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ProductDetail;