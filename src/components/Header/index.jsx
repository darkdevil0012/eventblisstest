import Logo from "/images/logo.jpeg";
import "./header.css";
import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleLinkClick = (section) => {
    setActiveLink(section);
    setMenuOpen(false);

    // Optional smooth scroll
    const target = document.querySelector(section);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="maindiv">
      <Container>
        <nav>
          <a href="#home" style={{ textDecoration: "none" }}>
            <img
              src={Logo}
              alt=""
              className="title"
              style={{
                height: "100px",
              }}
            />
          </a>

          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={menuOpen ? "open" : ""}>
            <li>
              <a
                href="#home"
                onClick={() => handleLinkClick("#home")}
                className={activeLink === "#home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handleLinkClick("#gallery")}
                className={activeLink === "#gallery" ? "active" : ""}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#aboutus"
                onClick={() => handleLinkClick("#aboutus")}
                className={activeLink === "#aboutus" ? "active" : ""}
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
