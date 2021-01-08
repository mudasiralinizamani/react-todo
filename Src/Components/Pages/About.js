import React from "react";

import css from "../../Assets/CSS/About.module.css";

import HeroSection from "./Home/HeroSection";

function About() {
  return (
    <>
      <HeroSection title2="About TIDO" />
      <section className={css.section}>
        <p>
          Hey, This is Todo App, and I've created this website in Django and
          React.
          <br /> <br />
          <strong>Website Links:</strong>
          <br /> <br />
          My Personal Website:{" "}
          <a href="https://techmudboy.com/" target="_blank">
            https://techmudboy.com/
          </a>{" "}
          <br /> <br />
          Web1:{" "}
          <a href="https://challengeaccept.herokuapp.com" target="_blank">
            https://challengeaccept.herokuapp.com
          </a>{" "}
          <br />
          <br />
          Web2:{" "}
          <a href="https://django-react-myweb-1.herokuapp.com" target="_blank">
            https://django-react-myweb-1.herokuapp.com
          </a>{" "}
          <br />
          <br />
          Web3:{" "}
          <a href="https://djangoweb-1.herokuapp.com" target="_blank">
            https://djangoweb-1.herokuapp.com
          </a>{" "}
          <br /> <br />
          Web4:{" "}
          <a href="https://tech-mud-1.herokuapp.com" target="_blank">
            https://tech-mud-1.herokuapp.com
          </a>{" "}
          <br /> <br />
          Web5:{" "}
          <a href="https://webcomics-react.herokuapp.com" target="_blank">
            https://webcomics-react.herokuapp.com
          </a>{" "}
          <br /> <br />
          Web6:{" "}
          <a href="https://tech-mud-2.herokuapp.com" target="_blank">
            https://tech-mud-2.herokuapp.com
          </a>{" "}
          <br /> <br />
          <br />
          <br />
          <strong>Contact ME</strong>
          <br /> <br />
          <strong>Email: </strong> mudasiralinizamani@gmail.com <br /> <br />
          <a
            href="https://www.linkedin.com/in/mudasir-ali-4230511ab/"
            target="_blank"
          >
            Linkedin
          </a>{" "}
          <br /> <br />
          <a href="https://www.fiverr.com/users/technique969/" target="_blank">
            Hire ME
          </a>
        </p>
      </section>
    </>
  );
}

export default About;
