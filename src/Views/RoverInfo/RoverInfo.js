import React from "react";
import { useContext } from 'react';
import { RoverContext } from '../../Context/RoverContext'
import { useParams } from "react-router-dom";
import { Spinner, Button } from 'reactstrap';
import { Link } from "react-router-dom";

function RoverInfo() {
    const { roverName} = useParams();
    const [{ dataObtained }] = useContext(RoverContext);

    return (
        <div >
            {
                Object.keys(dataObtained).length === 0 ? 
                <div  style={{ height: '100vh' }}>

                    <h2 className="text-center text-white">Rover {roverName}</h2>
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }} >
                            <Spinner type="grow" color="primary" />

                        </div>

                </div> : 
                <div style={{ height: '100vh' }} className="d-flex flex-column justify-content-center align-items-center">
                    <h2 className="text-center text-white">Rover {roverName}</h2>
                <div className="mx-5 mt-5 pb-5 text-white text-center" style={{ height: '80vh' }}>
                    <h4>Fecha de lanzamiento</h4>
                    <p>{dataObtained.photo_manifest.landing_date}</p>
                    <h4>Fecha de sterrizaje</h4>
                    <p>{dataObtained.photo_manifest.launch_date}</p>
                    <h4>Status</h4>
                    <p>{dataObtained.photo_manifest.status}</p>
                    <h4>Total de fotos tomadas</h4>
                    <p>{dataObtained.photo_manifest.total_photos}</p>
                    <Link to={`/rover-info`} >
                    <Button color="secondary">Regresar</Button>
                    </Link>
                    </div>
                </div>
            }
        </div>
    );
}

export default RoverInfo;
