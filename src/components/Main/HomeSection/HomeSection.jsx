import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import man from "../../../assets/images/man-with-laptop_165488-3853.jpg";

import cv from "../../../assets/page/Roma Paronyan.pdf";
import "./HomeSection.scss";

const HomeSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const texts = [
      "Front-end developer",
      "React developer",
      "JS developer",
      "Redux developer",
    ];

    let timeout;

    if (deleting) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, prev.length - 1));
        if (currentText.length === 0) {
          setDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(
          (prev) => prev + texts[currentIndex].charAt(prev.length)
        );
        if (currentText.length === texts[currentIndex].length) {
          setDeleting(true);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, deleting]);

  return (
    <section className="home-section" id="Home">
      <div className="home-section-text">
        <h2>
          <span className="home-section-text-hi">Hallo, it's Me</span> <br />
          <span className="home-section-text-name">Roma</span> <br />
          And I'm a<span className="typing-text">{currentText}</span>
        </h2>

        <div className="home-section-text-icons">
          <div className="home-section-text-icons-linkedin">
            <FaLinkedin />
          </div>
          <div className="home-section-text-icons-github">
            <FaGithub />
          </div>
        </div>

        <a href={cv} download="Roma_Paronyan_CV.pdf">
          <button>Download CV</button>
        </a>
      </div>
      <div className="home-section-image">
        <img src={man} alt="img" />
      </div>
    </section>
  );
};

export default HomeSection;
