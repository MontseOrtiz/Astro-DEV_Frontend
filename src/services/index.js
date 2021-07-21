import axios from 'axios';

const baseURL = process.env.API_BASE_URL
const service = axios.create({
  baseURL
})

const MY_SERVICE = {
    getPhotoOfDay: () => {
        return service.get(`photo/`);
      },
   getPhotoByDay: (date) => {
     return service.get(`photo/${date}`);
   }
}

export default MY_SERVICE;