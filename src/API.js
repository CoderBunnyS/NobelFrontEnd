import axios from "axios";

export default axios.create({
  baseURL: "https://nobelprizes.herokuapp.com/",
  responseType: "json"
});