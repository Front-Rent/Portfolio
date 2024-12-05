import React from "react";
import { motion } from "framer-motion";
import "./Footer.scss";

const Footer = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
      className="footer-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInVariants}
    >
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Roma All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#About">About</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
