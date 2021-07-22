import React from "react";
import { useContext } from 'react';
import {RoverContext} from '../../Context/RoverContext'
import CardRover from "../../Components/CardRover"


function RoverPhotos() {

    const [{roversPhotos}] = useContext(RoverContext);

    return (
        <div >
            <h2>Rovers en Marte</h2>
            <p>Da clic en algun Rover para ver todas sus fotos</p>
            <div  className="row m-5" style={{height:'80vh' }}>
                {roversPhotos.map((rover, index) => {
                    return <CardRover rover={rover} key={index} path="photo"/>
                })}
            </div>
        </div>
    );
}

export default RoverPhotos;
