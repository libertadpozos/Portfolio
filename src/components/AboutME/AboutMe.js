import React from "react";
import "./AboutMe.scss";

function AboutMe() {
  return (
    <div className="about-me__container">
        <h2 className="about-me__title">About me</h2>
        <div className="about-me__paragraphs">
            <p>About a year ago I decided to change my life seeking a better
            future. I left my country, family and friends and I am creating my
            present as a front-end developer. I became interested in programming
            because its languages are universal. </p>
            <p>Knowing HTML, CSS, JavaScript makes me part of a new community, an
            international community that shares an interest in creating
            solutions to specific problems with code.</p>
        </div>
    </div>
  );
}

export default AboutMe;
