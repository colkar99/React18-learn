import { useQuery} from "@tanstack/react-query"
import axios from "axios"


export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
const useTodo = () => {
    const fetchtodos = () => axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').then((res) => res.data)
    return useQuery<Todo[],Error>({
        queryKey: ['todos'],
        queryFn: fetchtodos
        //Here also we can set config like query staleTime ,Retry etc
    })
}
export default useTodo;