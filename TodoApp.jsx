
import { useState } from 'react';
import { useGetTodosQuery ,useGetTodoQuery} from './src/store/apis/todosApi'

const TodoApp = () => {
  const [todoId, setTodoId] = useState(1)

    // const {data:todos=[],isLoading} = useGetTodosQuery();
    const {data:todo,isLoading} = useGetTodoQuery(todoId);
    // console.log(todo)
    const nextTodo = ()=>{
      setTodoId(todoId + 1)
    }

    const previusTodo = ()=>{
      if(todoId ===1) return;
      setTodoId(todoId - 1)
    }

  return (
    < >
    
<h1>Todos - RTK Query</h1>
<hr />
<h2>isLoading...{isLoading? 'True':'False'} </h2>
<pre>{JSON.stringify(todo)} </pre>

<ul>
    {/* {
      todos.map(todos =>(
        <li key={todos.id}>
            <strong>{todos.completed? 'Done':'Pending'} </strong>
            {todos.title}
        </li> 
      ))  
    } */}
</ul>

<button onClick={previusTodo}>
    Previus-Todo
</button>
<button onClick={nextTodo}>
    Next-Todo
</button>
    </ >
  )
}

export default TodoApp