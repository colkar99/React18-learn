import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '08d558f55b8f4d3bbfd36c8211132403'
    }
})