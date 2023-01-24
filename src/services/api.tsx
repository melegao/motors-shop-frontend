import axios from "axios";

const api = axios.create({

    baseURL: "https://motorshop-backend.onrender.com/",
    timeout: 15000
})

export default api;
