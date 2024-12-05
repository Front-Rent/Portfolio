import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

import "./ProjectSection.scss";

import project1 from "../../../assets/images/project1.png";
import project2 from "../../../assets/images/project2.png";
import project3 from "../../../assets/images/project3.png";
import project4 from "../../../assets/images/project4.png";
import project5 from "../../../assets/images/project5.png";
import project6 from "../../../assets/images/project6.png";

const ProjectSection = () => {
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
      className="project-section"
      id="Projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.h3 variants={fadeInVariants}>Projects</motion.h3>
      <motion.p variants={fadeInVariants}>
        Here you will find some of the personal and clients projects that I
        created with each project <br /> containing its own case study
      </motion.p>

      <motion.div
        className="project-section-my-all-projects"
        variants={staggerContainer}
      >
        <motion.div className="project" variants={fadeInVariants}>
          <img src={project1} alt="img" />
          <div className="project-text">
            <h3>
              High-end, custom residential renovaters serving Fraser Valley
              homeowners.
            </h3>
            <a href="https://wfdesignbuild.com/">
              <button>
                Visit WebSite <IoIosArrowForward />
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div className="project" variants={fadeInVariants}>
          <img src={project2} alt="img" />
          <div className="project-text">
            <h3>
              Accounting and tax services characterized by quality, reliability
              and trust.
            </h3>
            <a href="https://burkettandco.ca/">
              <button>
                Visit WebSite <IoIosArrowForward />
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div className="project" variants={fadeInVariants}>
          <img src={project3} alt="img" />
          <div className="project-text">
            <h3>
              Blockchain pioneers bringing transparency, trust, and security to
              supply.
            </h3>
            <a href="https://www.chronicled.com/">
              <button>
                Visit WebSite <IoIosArrowForward />
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div className="project" variants={fadeInVariants}>
          <img src={project4} alt="img" />
          <div className="project-text">
            <h3>
              Business savvy tech experts helping forward thinking companies get
              things done.
            </h3>
            <a href="https://www.glcsolutions.ca/">
              <button>
                Visit WebSite <IoIosArrowForward />
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div className="project" variants={fadeInVariants}>
          <img src={project5} alt="img" />
          <div className="project-text">
            <h3>
              Vancouver's tower crane rental service and support leader since
              1974.
            </h3>
            <a href="https://coupalcranes.com/">
              <button>
                Visit WebSite <IoIosArrowForward />
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div className="project" variants={fadeInVariants}>
          <img src={project6} alt="img" />
          <div className="project-text">
            <h3>
              Results-oriented, responsive and flexible full service civil
              engineering firm.
            </h3>
            <a href="https://www.wedler.com/">
              <button>
                Visit WebSite <IoIosArrowForward />
              </button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectSection;
