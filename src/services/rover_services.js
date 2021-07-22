import axios from 'axios';

const baseURL = 'https://astro-dev-backend.herokuapp.com'
const service = axios.create({
  withCredentials: true,
  baseURL
})

const Rover_service = {
    getAllPhotos: (rover_name) => {
        return service.get(`/allPhotos/${rover_name}`);
      },
    getRoverInfo: (rover_name) => {
        return service.get(`/rover/${rover_name}`);
      },
    getFilterPhotos: (rover_name, rover_camera) => {
        return service.get(`/${rover_name}/${rover_camera}`);
      },
}

export default Rover_service;