import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectSlide.css";

const ProjectSlide = ({ projects }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <Slider {...settings}>
            {projects.map((project, index) => (
                <div key={index} className="project-slide">
                    <img src={project.image} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
                </div>
            ))}
        </Slider> 
    );
}

export default ProjectSlide;