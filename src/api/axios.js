import axios from "axios";

const baseURL = "https://food-ordering-api-mtanash.herokuapp.com";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
