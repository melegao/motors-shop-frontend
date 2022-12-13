import axios from "axios";


const api = axios.create({
    baseURL: "https://www.teste.com.br",
    timeout: 15000
})

export default api