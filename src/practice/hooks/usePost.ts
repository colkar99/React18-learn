import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Post{
    userId: number;
    id: number;
    body: string;
    title: string
}

export interface Queries{
    // page: number;
    pageSize: number
}
const usePost = (queries: Queries) => {

    const fetchFun = (pageParams = 1) => {
        return axios.get('https://jsonplaceholder.typicode.com/posts',{
        params: {

            _start: (pageParams - 1) * queries.pageSize,
            _limit: queries.pageSize
       }
    }).then((data) => data.data)};

    return useInfiniteQuery<Post[],Error>({
        queryKey: ['posts',queries],
        queryFn: ({pageParam}) => fetchFun(pageParam),
        staleTime: 60 * 1000, //10 seconds
        keepPreviousData: true,
        getNextPageParam: (lastPage,allPages) => {
            console.log(lastPage.length > 0 ? allPages.length + 1: undefined)
            return lastPage.length > 0 ? allPages.length + 1: undefined; 
        }
    })
}

export default usePost;