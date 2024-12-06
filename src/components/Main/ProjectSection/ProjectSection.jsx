import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { projects } from "../../../helper";

import "./ProjectSection.scss";

const fadeInUp = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const ProjectSection = () => {
  return (
    <motion.section
      className="project-section"
      id="Projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h3 variants={fadeInUp(0)}>Projects</motion.h3>
      <motion.p variants={fadeInUp(0.1)}>
        Here you will find some of the personal and clients projects that I
        created with each project <br /> containing its own case study
      </motion.p>

      <div className="project-section-my-all-projects">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project"
            variants={fadeInUp(index * 0.2)}
          >
            <img src={project.img} alt="Project" />
            <div className="project-text">
              <h3>{project.text}</h3>
              <a href={project.link}>
                <button>
                  Visit WebSite <IoIosArrowForward />
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectSection;
