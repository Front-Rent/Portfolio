import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
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
        setCurrentText((prev) => prev.slice(0, prev.length - 1)); // delete one character
        if (currentText.length === 0) {
          setDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(
          (prev) => prev + texts[currentIndex].charAt(prev.length)
        ); // add one character
        if (currentText.length === texts[currentIndex].length) {
          setDeleting(true);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, deleting]);

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  });

  return (
    <motion.section
      className="home-section"
      id="Home"
      initial="hidden"
      animate="visible"
      variants={fadeIn()}
    >
      <motion.div className="home-section-text" variants={fadeIn(0.2)}>
        <h2>
          <span className="home-section-text-hi">Hallo, it's Me</span> <br />
          <span className="home-section-text-name">Roma</span> <br />
          And I'm a <span className="typing-text">{currentText}</span>
        </h2>

        <motion.div className="home-section-text-icons" variants={fadeIn(0.4)}>
          <div className="home-section-text-icons-linkedin">
            <FaLinkedin />
          </div>
          <div className="home-section-text-icons-github">
            <FaGithub />
          </div>
        </motion.div>

        <motion.a
          href={cv}
          download="Roma_Paronyan_CV.pdf"
          variants={fadeIn(0.6)}
        >
          <button>Download CV</button>
        </motion.a>
      </motion.div>

      <motion.div className="home-section-image" variants={fadeIn(0.8)}>
        <img src={man} alt="img" />
      </motion.div>
    </motion.section>
  );
};

export default HomeSection;
