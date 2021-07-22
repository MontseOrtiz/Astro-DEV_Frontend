import { createContext, useState} from 'react';
import roverPersevernce from "../assets/rover_perseverance.jpeg"
import roverCuriosity from "../assets/rover-curiosity.jpeg"
import roverOportunity from "../assets/rover_opportunity.jpeg"
import roverSpirit from "../assets/rover_spirit.jpeg"
import Rover_service from "../services/rover_services"

const RoverContext = createContext();

const RoverProvider = ({ children }) => {

  const roversPhotos = [
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

  const [dataObtained, setDataObtained] = useState([])

  const getAllPhotos =   async (roverName)=>{
    setDataObtained([])
    await Rover_service.getAllPhotos(roverName)
    .then(  res => {
      console.log("soy el res",res.data.rover_photos.photos)
       setDataObtained(res.data.rover_photos.photos)
      return dataObtained
  })
     .catch(err => console.log(err));
  }

  const getRoverInfo =  (roverName)=>{
    setDataObtained({})
    Rover_service.getRoverInfo(roverName)
    .then( res => {
      console.log("soy el res",res.data.rover_info)
      setDataObtained(res.data.rover_info)
      return res.data.rover_info
  })
     .catch(err => console.log(err));
  }

  const getFilterPhotos = (roverName, roverCamera)=>{
    Rover_service.getFilterPhotos(roverName, roverCamera)
    .then( res => console.log("soy el res",res.data))
     .catch(err => console.log(err));
  }


  const state = [
    {roversPhotos, roversInfo, dataObtained},
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