


import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Styles/AppHero.css"; // Stil dosyasını içe aktar
import { useTranslation } from "react-i18next";

var heroData = [
  {
    id: 1,
    image: require("../picture/carosel1 (1).jpg"),
    title:
      "ANKASES, Ses yalıtımını daha kolay ve erişilebilir hale getirmek için buradadır. Sizden gelen gürültüyü dışarıda tutuyoruz",
    description: "ANKASES VE ISI YALITIM SİSTEMLERİ.",
  },
  {
    id: 2,
    image: require("../picture/main7.png"),
    title:
      "ANKASES, Ses yalıtımı, iç mekanlarınızı dış sıcaklıklardan izole etmenize yardımcı olabilir. Daha sıcak kışlar ve serin yazlar için ideal bir çözüm",
    description: "ANKASES VE ISI YALITIM SİSTEMLERİ",
  },
  {
    id: 3,
    image: require("../picture/carosel1 (2).jpg"),
    title:
      "ANKASES, Sessiz bir ortam, derin konsantrasyon ve üretkenlik için mükemmel bir zemin oluşturur. İşte başarınızın anahtarı burada",
    description: "ANKA SES VE ISI YALITIM SİSTEMLERİ",
  },
];

function AppHero() {
 const { t, } = useTranslation();



  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => (
          <Carousel.Item key={hero.id}>
            <img
              className="d-block w-100"
              src={hero.image}
              alt={"slide " + hero.id}
            />
            <Carousel.Caption>
              {/* <h2>{hero.title}</h2>
              <p>{hero.description}</p> */}
              <h2>{t(`hero${hero.id}.title`)}</h2>
              <p>{t(`hero${hero.id}.description`)}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default AppHero;



