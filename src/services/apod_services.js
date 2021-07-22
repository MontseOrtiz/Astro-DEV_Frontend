import axios from 'axios';

const baseURL = 'https://astro-dev-backend.herokuapp.com'
const service = axios.create({
  withCredentials: true,
  baseURL
})

const MY_SERVICE = {
    getPhotoOfDay: () => {
      console.log(baseURL)
        return service.get(`/photo`);
      },
   getPhotoByDay: (date) => {
     return service.get(`/${date}`);
   }
}

export default MY_SERVICE;