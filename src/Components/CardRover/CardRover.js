import React from "react";
import "./CardRover.css"
import { Link } from "react-router-dom";

function CardRover({ rover, path , action }) {
    return (
        <div className="cardRover-container col-12 col-sm-5 px-5">
            <Link to={`/rover-${path}/${rover.roverName}`} onClick={action}>
            <img
                src={rover.roverPhoto}
                alt={rover.roverName}
                className="img-fluid"
              />
            </Link>
            <h3 className="mt-4 text-center text-white">{rover.roverName}</h3>
        </div>
    );
}

export default CardRover;
