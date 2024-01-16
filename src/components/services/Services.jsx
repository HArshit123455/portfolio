import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on developing my skills
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>My</motion.b> Background
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>And</motion.b>{" "}
            Experience.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Education</h2>
          <p>
            Final year Grad at Delhi Technological University Currently pursuing
            Computer Engineering
            <p></p>
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Internships</h2>
          <p>
            Vocational Trainee, Engineers India Limited, New Delhi May 2022-July
            2022
            <p>
              Developed 2 web applications using Microsoft Visual C# and
              ASP.NET.
              <p>
                Proficiently managed and optimized databases with Toad,
                improving data retrieval efficiency by 15%.
              </p>{" "}
              <p>
                Gained practical experience in professional database
                connectivity and manipulation.
              </p>
              Tech Stack: HTML, CSS, JS, C#, ASP.NET
            </p>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
