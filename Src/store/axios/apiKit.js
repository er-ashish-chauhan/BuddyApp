import axios from "axios";
import DataManager from "../../Components/DataManager";


const http =  axios.create({
  baseURL : "http://13.234.31.22:3000/api/", //local
});
export const setClientToken = token => {
  console.log('token',token);
  DataManager.setAccessToken(token)
http.interceptors.request.use(async (config)=> {
   
  if (token) {
    config.headers.Authorization =`Bearer ${token}`;
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
})};

export default http