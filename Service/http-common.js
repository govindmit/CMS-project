import axios from "axios";

export default axios.create({
    baseURL:"http://192.168.168.29:8080",
    // baseURL:"http://localhost:5000/",

    headers: {
        "Content-type": "application/json"
      }
}); 