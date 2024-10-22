/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk-pixabay.webp";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Ticket Pranali",
    description:
      "Ticket Pranali secured the 2nd runner-up position at the internal SIH competition, showcasing our commitment to leveraging technology for social good and improving the cultural experience for all visitors.",
    url: "https://hack4bharat.pythonanywhere.com",
  },
  {
    title: "MCQ Quiz Game",
    description:
      "MCQ Quiz Game is a quiz competition platform created as my first React project. Designed with the aim of enhancing learning in my class, this basic application allows users to engage in multiple-choice quizzes, fostering a fun and interactive educational environment.",
    url: "https://mcqquizassignment.netlify.app/",
  },
  {
    title: "Museum Website",
    description:
      "Museum Website is basic website which I made while learining HTML,CSS and Javascript ",
    url: "https://glowing-elf-27e629.netlify.app/#",
  },
  {
    title: "RESTful API with Node.js and MongoDB",
    description:
      "Implementing a Clean and Scalable RESTful API with Node.js and MongoDB",
    url: "medium.com/@sujangyawali177/building-a-restful-api-with-node-js-express-and-mongodb-a-step-by-step-guide-6511449c2ab5",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover",marginLeft:"0.1rem" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
