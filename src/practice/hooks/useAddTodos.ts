import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TODOS_KEY } from '../constants';
import todoservice , { Todo } from '../services/todoService';

interface AddTodoContext {
    previousTodos: Todo[]
}

export default function useAddTodos(addTodo: () => void) {
    const reactClient = useQueryClient()

    return useMutation<Todo,Error,Todo,AddTodoContext>({
        mutationKey: TODOS_KEY,
        onMutate: (newTodo) => {
            const previousTodos = reactClient.getQueryData<Todo[]>(TODOS_KEY) || [];

            reactClient.setQueryData<Todo[]>(TODOS_KEY, (todos = []) => [newTodo,...todos]);
           // if(ref.current) ref.current.value = '';
           addTodo()

            return {previousTodos}
        },     
        mutationFn: (todo: Todo) => todoservice.post(todo),
                              
        onSuccess: (savedTodo,newTodo) => {
            //1st apporoach to is to invalidate quries
            // reactClient.invalidateQueries({
            //     queryKey: TODOS_KEY
            // })
            //second approach
            reactClient.setQueryData<Todo[]>(TODOS_KEY, (todos) => todos?.map((todo) => {
                if(todo.id === newTodo.id){
                    return savedTodo
                }else {
                    return todo
                }
            }));
        },
        onError: (error,todo,context) => {
            if(!context?.previousTodos) return ;

            reactClient.setQueryData<Todo[]>(TODOS_KEY, context.previousTodos)
        }                            

    })
}
