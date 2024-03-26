import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '08d558f55b8f4d3bbfd36c8211132403'
    }
})

const apiClient =  axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '08d558f55b8f4d3bbfd36c8211132403'
    }
})

export interface Response<T> {
    count: number,
    next: number,
    previous: number,
    results: T
}

export class ApiClient<T> {
    endPoint: string = ''

    constructor(endpoint: string) {
        this.endPoint = endpoint;
    }

    getAll = (queries?: any) => {
        let params = queries || {};
        return apiClient.get<Response<T[]>>(this.endPoint,{params}).then((res) => res.data);
    }
}

