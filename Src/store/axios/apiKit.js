import axios from "axios";
import DataManager from "../../Components/DataManager";
import { APP_BASE_URL } from "../../Theme/AppConstants";


const http = axios.create({
  baseURL: APP_BASE_URL + "/api/", //local
  timeout: 10000,
});
export const setClientToken = token => {
  console.log('tokenllll', token);
  DataManager.setAccessToken(token)
  http.interceptors.request.use(async (config) => {
    let tokens = await DataManager.getAccessToken()
    console.log('token in', tokens);
    config.headers.Authorization = `Bearer ${tokens}`;

    return config;
  })
};

export default http