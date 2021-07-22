import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardSubtitle
  } from 'reactstrap';


function CardPhoto({ photo }) {
    return (
        <div className="cardPhoto-container col-12 col-sm-6 col-md-3 mb-3">
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
