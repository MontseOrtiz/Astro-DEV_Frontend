import React from "react";
import { useParams } from "react-router-dom";

function RoverInfo() {
    const { roverName} = useParams();
   
    return (
        <div >
            <h2>Rovers en Marte</h2>
            <p>Soy la lista info !!!</p>
            <p>{roverName}</p>
            {/* <div  className="row m-5" style={{height:'80vh' }}>
                {rovers.map((rover, index, path) => {
                    return <CardRover rover={rover} key={index} path="photo"/>
                })}
            </div> */}
        </div>
    );
}

export default RoverInfo;
