import axios from "axios";

const TOKEN = "cmufh8pr01qggkbpup4gcmufh8pr01qggkbpup50"

export default axios.create({
    baseURL: "https://finnhub.io/api/v1" ,
    params: {
        token: TOKEN
    }
})
