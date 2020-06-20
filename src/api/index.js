import axios from 'axios'
export const va = axios
const AppDomain = axios.create({
    baseURL: 'http://localhost:8080/' //your api domain
  });

  export const apiAdd = data => AppDomain.post('/add', data); 
  export const apiFind = data => AppDomain.post('/find', data);
  export const apiUpload = data => AppDomain.post('/upload', data);
