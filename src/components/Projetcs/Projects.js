import React from "react";
import "./Projects.scss";

function Projects() {
  return (
    <div className="carousel__container">
      <h2 className="project__title">Projects</h2>
      <div className="bd-example">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleCaptions" data-slide-to="1" />
            <li data-target="#carouselExampleCaptions" data-slide-to="2" />
          </ol>

          <div className="carousel-inner">

            <div className="carousel-item  active" data-interval="false">
            <div className="d-block w-100 a"></div>
              <div className="carousel-caption d-none d-md-block">
                <h5>Adalabers Code Warrios</h5>
                <p>
                  Responsive web layout that presents the team of developers. 
                </p>
                <p>
                   HTML, CSS, SASS, Flexbox and Grid.
                </p>
              </div>
            </div>

            <div className="carousel-item" data-interval="false">
              <div className="d-block w-100 b"></div>
              <div className="carousel-caption d-none d-md-block">
                <h5>Awesome Profile Cards</h5>
                <p>Web that generates presentation cards. </p>
                <p>
                   JavaScript
                </p>
              </div>
            </div>

            <div className="carousel-item" data-interval="false">
            <div className="d-block w-100 c"> </div>
              <div className="carousel-caption d-none d-md-block">
                <h5>It's LeviOsa no LeviosA</h5>
                <p>
                  Harry Potter character searcher. 
                </p>
                <p>
                   React
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
