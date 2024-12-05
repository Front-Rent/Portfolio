import { motion } from "framer-motion";
import { skils } from "../../../helper";
import "./AboutSection.scss";

const AboutSection = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="about-section"
      id="About"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.h2 variants={fadeInVariants}>
        About <span>Me</span>
      </motion.h2>
      <motion.p variants={fadeInVariants}>
        Here you will find more information about me, what I do, and my current
        skills mostly in terms <br /> of programming and technology
      </motion.p>
      <div className="about-section-about-me">
        <motion.div
          className="about-section-about-me-know"
          variants={staggerContainer}
        >
          <motion.h3 variants={fadeInVariants}>
            Get to know <span>me!</span>
          </motion.h3>
          <motion.p variants={fadeInVariants}>
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
          </motion.p>
          <motion.button variants={fadeInVariants}>Contact</motion.button>
        </motion.div>
        <motion.div
          className="about-section-my-skils"
          variants={staggerContainer}
        >
          <motion.h3 variants={fadeInVariants}>
            My <span>Skills</span>
          </motion.h3>
          <motion.div
            className="about-section-my-skils-one"
            variants={staggerContainer}
          >
            {skils.map((skil, index) => (
              <motion.div
                key={index}
                className="about-section-skil"
                variants={fadeInVariants}
              >
                {skil}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
