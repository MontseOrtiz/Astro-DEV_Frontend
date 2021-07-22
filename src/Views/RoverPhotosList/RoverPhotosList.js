import React, { useEffect, useState } from "react";
import { useContext } from 'react';
import {RoverContext} from '../../Context/RoverContext'
import { useParams } from "react-router-dom";

function RoverPhotosList() {
    const { roverName} = useParams();
    const [{roversPhotos},{getAllPhotos}] = useContext(RoverContext);

    console.log("el rover name",roverName)
    console.log(getAllPhotos())
    const [photoList, setPhotoList]= useState([]);

    const response = getAllPhotos(roverName)
    console.log(response)

    useEffect(() => {
        console.log(roverName)
    getAllPhotos(roverName);
    }, []);

    console.log("fotos get all",getAllPhotos(roverName))
   
    return (
        <div >
            <h2>Rovers en Marte</h2>
            <p>Soy la lista</p>
            <p>{roverName}</p>
            {/* <div  className="row m-5" style={{height:'80vh' }}>
                {rovers.map((rover, index, path) => {
                    return <CardRover rover={rover} key={index} path="photo"/>
                })}
            </div> */}
        </div>
    );
}

export default RoverPhotosList;
