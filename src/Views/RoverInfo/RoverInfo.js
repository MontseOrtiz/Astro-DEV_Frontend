import React from "react";
import { useContext } from 'react';
import { RoverContext } from '../../Context/RoverContext'
import { useParams } from "react-router-dom";
import { Spinner } from 'reactstrap';

function RoverInfo() {
    const { roverName} = useParams();
    const [{ dataObtained }] = useContext(RoverContext);
    console.log("la data", dataObtained)
    if (Object.keys(dataObtained).length === 0) {
        console.log("es cero")
    } else {
        console.log("ya entro")
    }
   
    return (
        <div >
            <h2 className="text-center">Rovers en Marte</h2>
            <p>Soy la lista info !!!</p>
            <p>{roverName}</p>
            {
                Object.keys(dataObtained).length === 0 ? 
                <div>
                    <Spinner type="grow" color="primary" />
                    <Spinner color="primary" />

                </div> : 
                <div className="row m-5" style={{ height: '80vh' }}>
                    <p>ya cargamos</p>
                    <p>{dataObtained.photo_manifest.name}</p>
                    <p>{dataObtained.photo_manifest.landing_date}</p>
                </div>
            }
            {/* <p>{dataObtained}</p> */}
            {/* <div  className="row m-5" style={{height:'80vh' }}>
                {rovers.map((rover, index, path) => {
                    return <CardRover rover={rover} key={index} path="photo"/>
                })}
            </div> */}
        </div>
    );
}

export default RoverInfo;
