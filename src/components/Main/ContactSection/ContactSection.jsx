import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForm, sendEmail } from "../../../store/slices/formSlice";
import { motion } from "framer-motion";

import "./ContactSection.scss";

const ContactSection = () => {
  const dispatch = useDispatch();
  const { formData, status, error } = useSelector((state) => state.form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendEmail(formData));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="contact-section"
      id="Contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h3 variants={fadeInUp}>Contact</motion.h3>
      <motion.p variants={fadeInUp}>
        Feel free to Contact me by submitting the form below and I will get back{" "}
        <br />
        to you as soon as possible
      </motion.p>

      <motion.form onSubmit={handleSubmit} variants={fadeInUp}>
        <motion.div className="contact-form-name" variants={fadeInUp}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
          />
        </motion.div>
        <motion.div className="contact-form-email" variants={fadeInUp}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
          />
        </motion.div>
        <motion.div className="contact-form-message" variants={fadeInUp}>
          <label htmlFor="message">Message</label>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Your Message"
          />
        </motion.div>

        <motion.button type="submit" variants={fadeInUp}>
          SUBMIT
        </motion.button>
      </motion.form>

      {status === "loading" && <p>Sending...</p>}
      {status === "success" && (
        <motion.p className="success-message" variants={fadeInUp}>
          Email sent successfully!
        </motion.p>
      )}
      {status === "failed" && (
        <motion.p className="error-message" variants={fadeInUp}>
          Error: {error}
        </motion.p>
      )}
    </motion.section>
  );
};

export default ContactSection;
