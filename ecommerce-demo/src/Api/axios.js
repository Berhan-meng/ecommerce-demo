import axios from "axios";
const instance = axios.create({
  //local instance
  // baseURL: "http://127.0.0.1:5001/e-clone-4a388/us-central1/api",

  //deployed version of amazon api/server on render.com
  baseURL: "https://amazone-api-k8sx.onrender.com/",
  // baseURL: "https://amazoneclonebackend.birhann.com/",
});
export { instance };
