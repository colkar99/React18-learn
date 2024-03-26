import { useQuery} from "@tanstack/react-query"
import { TODOS_KEY } from "../constants"
import todoService, { Todo } from "../services/todoService";

const useTodo = () => {
   // const fetchtodos = () => axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').then((res) => res.data)
    return useQuery<Todo[],Error>({
        queryKey: TODOS_KEY,
        queryFn: todoService.getAll
        //Here also we can set config like query staleTime ,Retry etc
    })
}
export default useTodo;