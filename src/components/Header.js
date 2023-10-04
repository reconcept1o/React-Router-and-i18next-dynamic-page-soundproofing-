import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import Logo from "../picture/logo.jpg";
import "../Styles/Appheader.css"; // Stil dosyasını içe aktar
import "font-awesome/css/font-awesome.min.css";
import { useTranslation } from "react-i18next";

export default function AppHeader() {
  const { t, i18n } = useTranslation();

  function changeLanguage(languageCode) {
    i18n.changeLanguage(languageCode);
    localStorage.setItem("selectedLanguage", languageCode);
  }

  return (
    <div>
      <Navbar expand="lg" className="custom-navbar fixed-top">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            <img src={Logo} alt="Logo" className="logo" />
            <div className="contact-info">
              <div className="contact-item">
                <i className="fa fa-envelope"></i> info@ankases.com
              </div>
              <div className="contact-item">
                <i className="fa fa-phone"></i> +90 312 385 35 20
              </div>
            </div>

            <div className="social-icons">
              <a href="https://www.facebook.com/ankases/">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://twitter.com/anka_ses">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/ankasesyalitim/">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
          {/* Mobil menü düğmesi ekleniyor */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">{t("home")}</Nav.Link>
              <Nav.Link href="/#about">{t("about")}</Nav.Link>

              <NavDropdown title={t("products")} className="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/products/category/1">
                    {t("products.seskabinleri")}
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/products/category/2">
                    {t("products.akustiksesyalitimurunleri")}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/products/category/3">
                    {t("products.panelsungerkatalog")}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <Nav.Link href="/news">{t("news")}</Nav.Link>

              <Nav.Link href="/contact">{t("contact")}</Nav.Link>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="custom-dropdown-toggle"
                >
                  Language
                </Dropdown.Toggle>

                <Dropdown.Menu className="language">
                  <Dropdown.Item
                    onClick={() => changeLanguage("tr")}
                    href="#/lan-1"
                    className="lang"
                  >
                    Türkçe
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => changeLanguage("de")}
                    href="#/lan-2"
                    className="lang"
                  >
                    Deutsch
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => changeLanguage("en")}
                    href="#/lan-3"
                    className="lang"
                  >
                    English
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

