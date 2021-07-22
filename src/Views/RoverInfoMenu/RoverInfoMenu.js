import React from "react";
import { useContext } from 'react';
import { RoverContext } from '../../Context/RoverContext'
import CardRover from "../../Components/CardRover"
import './RoverInfoMenu.css'


function RoverInfoMenu() {

    const [{ roversInfo }, { getRoverInfo }] = useContext(RoverContext)

    return (
        <div style={{ height:'100vh'}}>
            <h2 className="text-center py-4 text-white">Rovers en Marte</h2>
            <p className="text-center mb-5 text-white">Da clic en algun Rover para obtener su información</p>
            <div className="container mt-5">
                <div className="row   cardInfo-container justify-content-center" style={{ height: '80vh' }}>
                    {roversInfo.map((rover, index) => {
                        return <CardRover rover={rover} key={index} path="info" action={() => getRoverInfo(rover.roverName)} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default RoverInfoMenu;
