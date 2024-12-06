import React from "react";
import { motion } from "framer-motion";
import { skils } from "../../../helper";
import "./AboutSection.scss";

const AboutSection = () => {
  const fadeInUp = (delay) => ({
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  return (
    <motion.section
      className="about-section"
      id="About"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 variants={fadeInUp(0)}>
        About <span>Me</span>
      </motion.h2>
      <motion.p variants={fadeInUp(0.1)}>
        Here you will find more information about me, what I do, and my current
        skills mostly in terms <br /> of programming and technology
      </motion.p>
      <motion.div
        className="about-section-about-me"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="about-section-about-me-know"
          variants={fadeInUp(0.2)}
        >
          <h3>
            Get to know <span>me!</span>
          </h3>
          <p>
            I'm a <strong>Frontend Focused Web Developer</strong> building and
            managing the <br />
            Front-end of Websites and Web Applications that leads to the <br />
            success of the overall product. Check out some of my work in the{" "}
            <br />
            Projects section. <br /> <br /> I also like sharing content related
            to the <br />
            stuff that I have learned over the years in Web Development so it{" "}
            <br />
            can help other people of the Dev Community. <br /> <br /> If you
            have a <br />
            good opportunity that matches my skills and experience then don't{" "}
            <br />
            hesitate to contact me.
          </p>
          <motion.button variants={fadeInUp(0.3)}>Contact</motion.button>
        </motion.div>
        <motion.div className="about-section-my-skils" variants={fadeInUp(0.4)}>
          <h3>
            My <span>Skills</span>
          </h3>
          <motion.div className="about-section-my-skils-one">
            {skils.map((skil, index) => (
              <motion.div
                key={index}
                className="about-section-skil"
                variants={fadeInUp(index * 0.2)}
              >
                {skil}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
