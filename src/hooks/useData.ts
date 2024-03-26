import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";



interface FetchResponse<T> {
    count: number;
    results: T[];
}
export default function useData<T>(endpoint: string,params?: AxiosRequestConfig,deps?: any[] ) {
const [datas,setDatas] = useState<T[]>([]);
const [error,setError] = useState('');
const [loading,setLoading] = useState(false);

useEffect(() => {
    const controller = new AbortController();
    setLoading(true)
    let options: AxiosRequestConfig = {
        signal: controller.signal,
        ...params
    }
    apiClient.get(endpoint,options)
            .then(({data}:{data: FetchResponse<T>}) => {
                if(data.results.length == 0) setError('Data not found')
                setDatas(data.results)
            })
            .catch((err: AxiosError) => {
                if(err instanceof CanceledError) return;
                setError(err.message);
            }).finally(() => setLoading(false))

    return () => controller.abort()        
},deps ? deps : [])

return {datas,setDatas,error,setError,loading}
}
