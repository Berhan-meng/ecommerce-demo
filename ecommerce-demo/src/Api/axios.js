import axios from "axios";
const instance = axios.create({
  //local instance
  // baseURL: "http://127.0.0.1:5001/e-clone-4a388/us-central1/api",
  //deployed version of ecommerce demo api/server on render.com
  baseURL: "https://ecommerce-demo-be.onrender.com",
});
export { instance };
