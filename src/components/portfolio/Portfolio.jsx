import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Pro Shop",
    img: "https://i.ibb.co/1QN03kS/Screenshot-16.png",
    desc: "eCommerce platform built with the MERN stack & Redux. Top features include Full featured shopping cart, Product reviews and ratings, Top products carousel, Product pagination, Product search feature, User profile with orders, PayPal / credit card integration, admin functionalities, Checkout process (shipping, payment method, etc). Tech Stack: React, Redux, MongoDb, Express, Nodejs",
    demo: "https://shop-i7xb.onrender.com/",
  },
  {
    id: 2,
    title: "Simple Social",
    img: "https://i.ibb.co/X2C5gDx/Screenshot-11.png",
    desc: "Engineered scalable Python/Django web platform for 300+ users, fostering efficient cross-functional team collaboration. Implemented user-friendly sign-up and login functionalities for enhanced user experience. Utilized Django framework for seamless data management and improved website performance. Tech Stack: Django, Python, HTML, CSS, JS",
    demo: "https://harry1122.pythonanywhere.com/",
  },
  {
    id: 3,
    title: "Email Spam Classifier",
    img: "https://i.ibb.co/nsnsq1P/Screenshot-15.png",
    desc: "Implemented a robust Email Spam Classifier with Naive Bayes on a 5,574-message English SMS dataset.Refined model performance through rigorous testing, and feature engineering to achieve 97% accuracy.Established a user-friendly Python Streamlit GUI for transparent interaction with the spam classifier. Tech Stack: Python, Jupyter Notebook",
    demo: "https://sms-class.streamlit.app/",
  },
  {
    id: 4,
    title: "Weather App",
    img: "https://i.ibb.co/PFKSZX4/Screenshot-14.png",
    desc: "Designed a React-based weather app for real-time weather updates with an intuitive UI. Integrated weather APIs for accurate and up-to-date weather data, improving user experience. Tech Stack: React, JavaScript",
    demo: "https://weather-app-react-tailwind-lf9w.vercel.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.demo}>See Demo</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Project Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
