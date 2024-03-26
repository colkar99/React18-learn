import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useRef } from 'react'
import { Todo } from '../hooks/useTodo'

interface AddTodoContext {
    previousTodos: Todo[]
}

export default function TodoForm() {
    const reactClient = useQueryClient()
    const ref = useRef<HTMLInputElement>(null)
    const addTodos = useMutation<Todo,Error,Todo,AddTodoContext>({
        mutationKey: ['todos'],
        mutationFn: (todo: Todo) => axios.post<Todo>('https://jsonplaceholder.typicode.com/todoss',todo)
                                    .then((res) => res.data),
        onMutate: (newTodo) => {
            const previousTodos = reactClient.getQueryData<Todo[]>(['todos']) || [];

            reactClient.setQueryData<Todo[]>(['todos'], (todos) => [newTodo,...(todos || [])]);
            if(ref.current) ref.current.value = '';

            return {previousTodos}
        },                            
        onSuccess: (savedTodo,newTodo) => {
            //1st apporoach to is to invalidate quries
            // reactClient.invalidateQueries({
            //     queryKey: ['todos']
            // })
            //second approach
            reactClient.setQueryData<Todo[]>(['todos'], (todos) => todos?.map((todo) => {
                debugger
                if(todo.id === newTodo.id){
                    return savedTodo
                }else {
                    return todo
                }
            }));
            if(ref.current) ref.current.value = '';
        },
        onError: (error,todo,context) => {
            if(!context?.previousTodos) return ;

            reactClient.setQueryData<Todo[]>(['todos'], context.previousTodos)
        }                            

    })
  return (
    <>
    {addTodos.error && <div className='alert alert-danger'>{addTodos.error.message}</div>}
        <form onSubmit={(event) => {
        event.preventDefault();
        if(ref.current && ref.current.value){
            addTodos.mutate({
                id: 0,
                title: ref.current?.value,
                completed: false,
                userId: 1
            })
        }

    }}>
        <div className='form-group'>
            <input ref={ref} className='form-control' type='text' name='todo'/>
            <button disabled={addTodos.isLoading} type='submit'>{addTodos.isLoading ? 'Adding...': 'Add'}</button>
        </div>

    </form>
    </>

  )
}
