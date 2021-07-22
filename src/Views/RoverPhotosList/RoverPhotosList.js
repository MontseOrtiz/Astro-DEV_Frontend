import React from "react";
import { useContext } from 'react';
import { RoverContext } from '../../Context/RoverContext'
import { useParams } from "react-router-dom";
import CardPhoto from "../../Components/CardPhoto";
import { Spinner } from 'reactstrap';


function RoverPhotosList() {
    const { roverName } = useParams();
    const [{ dataObtained }] = useContext(RoverContext);

    return (
        <div>
            {
                Object.keys(dataObtained).length === 0 ?
                    <div className="container" style={{ height: '100vh' }}>
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }} >
                            <Spinner type="grow" color="primary" />

                        </div>
                    </div> :
                    <div >
                        <h2 className="text-center py-4 text-white">Fotos tomadas por el Rover {roverName}</h2>
                        <div className="row mx-5 mt-5 pb-5" >
                            {dataObtained.map((photo, index) => {
                                return <CardPhoto photo={photo} key={index} />
                            })}
                        </div>
                    </div>
            }
        </div>

    );
}

export default RoverPhotosList;
