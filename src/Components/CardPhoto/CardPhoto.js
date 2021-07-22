import React, {useState} from "react";
// import "./CardRover.css"
import {
    Card, CardImg, CardText, CardBody,
    CardSubtitle
  } from 'reactstrap';


function CardPhoto({ photo }) {

console.log(photo.camera)
    return (
        // <div className="cardPhoto-container col-12 col-sm-6 col-md-3">
        //     <h1>hola soy la photo</h1>
        //     <img
        //         src={photo.img_src}
        //         alt={photo.roverName}
        //         className="img-fluid"
        //       />
        //     <h2 className="mt-2 text-center">{photo.roverName}</h2>
        //     <p>Cammara utilizada</p>
        //     {/* <p>{photo.camera.full_name}</p>
        //     <p>Cammara nombre abreviacion</p>
        //     <p>{photo.camera.name}</p> */}
        //     <p>Fecha de toma</p>
        //     <p>{photo.earth_date}</p>
        // </div>
        <div className="cardPhoto-container col-12 col-sm-6 col-md-2 mb-3">
        <Card>
          <CardImg top width="100%" src={photo.img_src} alt={photo.roverName} />
          <CardBody>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Camara utilizada</CardSubtitle>
            <CardText>{photo.camera.full_name}</CardText>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Fecha</CardSubtitle>
            <CardText>{photo.earth_date}</CardText>
          </CardBody>
        </Card>
      </div>

    );
}
export default CardPhoto;
