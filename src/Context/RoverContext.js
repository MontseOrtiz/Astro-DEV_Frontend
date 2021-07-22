import { createContext} from 'react';
import roverPersevernce from "../assets/rover_perseverance.jpeg"
import roverCuriosity from "../assets/rover-curiosity.jpeg"
import roverOportunity from "../assets/rover_opportunity.jpeg"
import roverSpirit from "../assets/rover_spirit.jpeg"
import Rover_service from "../services/rover_services"

const RoverContext = createContext();

const RoverProvider = ({ children }) => {

  const roversPhotos = [
    {
        roverName: 'Perseverance',
        roverPhoto: roverPersevernce
    },
    {
        roverName: 'Curiosity',
        roverPhoto: roverCuriosity
    },
    {
        roverName: 'Opportunity',
        roverPhoto: roverOportunity
    },
    {
        roverName: 'Spirit',
        roverPhoto: roverSpirit
    }
  ]
  const roversInfo = [
    {
        roverName: 'Curiosity',
        roverPhoto: roverCuriosity
    },
    {
        roverName: 'Opportunity',
        roverPhoto: roverOportunity
    },
    {
        roverName: 'Spirit',
        roverPhoto: roverSpirit
    }
  ]

  const getAllPhotos = (roverName)=>{
    Rover_service.getAllPhotos(roverName)
    .then( res => console.log("soy el res",res.data))
     .catch(err => console.log(err));
  }

  const getRoverInfo = (roverName)=>{
    Rover_service.getRoverInfo(roverName)
    .then( res => {
      console.log("soy el res",res.data)
      return res.data
  })
     .catch(err => console.log(err));
  }

  const getFilterPhotos = (roverName, roverCamera)=>{
    Rover_service.getFilterPhotos(roverName, roverCamera)
    .then( res => console.log("soy el res",res.data))
     .catch(err => console.log(err));
  }


  const state = [
    {roversPhotos, roversInfo},
    { getAllPhotos, getRoverInfo, getFilterPhotos }
  ];

  return (
    <RoverContext.Provider value={state}>
      {children}
    </RoverContext.Provider>
  );
}
 
export {
  RoverContext,
  RoverProvider,
}