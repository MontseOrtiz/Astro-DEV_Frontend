import React from "react";
import { useContext } from 'react';
import { RoverContext } from '../../Context/RoverContext'
import CardRover from "../../Components/CardRover"


function RoverPhotos() {

    const [{ roversPhotos }, { getAllPhotos }] = useContext(RoverContext);

    return (
        <div style={{ height:'100vh'}} >
            <h2 className="text-center py-4 text-white">Rovers en Marte</h2>
            <p className="text-center mb-5 text-white">Da clic en algun Rover para ver todas sus fotos</p>
            <div className="container mt-1">
                <div className="row g-5 cardInfo-container justify-content-center" style={{ height: '80vh' }}>
                    {roversPhotos.map(function (rover, index) {
                        return <CardRover rover={rover} key={index} path="photo" action={() => getAllPhotos(rover.roverName)} />
                    })
                    }
                </div> 
            </div>
        </div>
    );
}

export default RoverPhotos;
