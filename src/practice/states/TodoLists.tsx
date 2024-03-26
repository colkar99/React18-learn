import { Spinner, Text } from '@chakra-ui/react'

import useTodo from '../hooks/useTodo'
import TodoForm from '../components/TodoForm';


export default function TodoLists() {

    const {data: todos,error, isLoading} = useTodo();
    if(isLoading) return <Spinner fontSize={'30px'}></Spinner>
    if(error) return <Text>{error.message}</Text>
  return (
    <>
      <TodoForm/>
        <ul>
        {todos?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
        ))}
    </ul>
    </>

  )
}
