import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-backend-kush.herokuapp.com/",
});

export default instance;
