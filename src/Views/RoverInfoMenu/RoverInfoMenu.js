import React from "react";
import { useContext } from 'react';
import {RoverContext} from '../../Context/RoverContext'
import CardRover from "../../Components/CardRover"

function RoverInfoMenu() {

    const [{rovers} ]= useContext(RoverContext)

    return (
        <div>
            <h2>Rovers en Marte</h2>
            <p>Da clic en algun Rover para obtener su información</p>
            <div  className="row m-5" style={{height:'80vh' }}>
            {rovers.map((rover, index)=>{
                return <CardRover rover={rover} key={index} path="info"/>
            })}
            </div>
        </div>
    );
}

export default RoverInfoMenu;
