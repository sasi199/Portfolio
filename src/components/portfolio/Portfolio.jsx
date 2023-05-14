import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio6.jpg";
import IMG2 from "../../assets/crud1.jpg";
import IMG3 from "../../assets/portfolio5.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Keeper App for keeping the notes",
    github: "https://github.com/sasi199/keeper",
    demo: "https://master--beamish-cassata-798ce3.netlify.app/"
  },
  {
    id: 2,
    image: IMG2,
    title: "CRUD Operation usin react js",
    github: "https://github.com/sasi199/Crud_react",
    demo: "https://master--effulgent-strudel-b36cc5.netlify.app/"
  },
  {
    id: 3,
    image: IMG3,
    title: "Calculator using simple calculation problems",
    github: "https://github.com/sasi199/Calculator_app",
    demo: "https://master--moonlit-haupia-f8b412.netlify.app/"
  },
];

function Portfolio() {

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" rel="noreferrer" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" rel="noreferrer" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
