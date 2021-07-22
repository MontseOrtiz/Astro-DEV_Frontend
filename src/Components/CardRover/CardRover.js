import React from "react";
import "./CardRover.css"
import { Link } from "react-router-dom";

function CardRover({ rover, path }) {
    return (
        <div className="cardRover-container col-12 col-sm-6 col-md-3">
            <Link to={`/rover-${path}/${rover.roverName}`}>
            <img
                src={rover.roverPhoto}
                alt={rover.roverName}
                className="img-fluid"
              />
            </Link>
            <h2 className="mt-2 text-center">{rover.roverName}</h2>
        </div>
    );
}

export default CardRover;
