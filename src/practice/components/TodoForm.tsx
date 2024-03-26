
import { useRef } from 'react'
import useAddTodos from '../hooks/useAddTodos'


export default function TodoForm() {
    const ref = useRef<HTMLInputElement>(null)
    const addTodos = useAddTodos(() => {
        if(ref.current) ref.current.value = '';
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
