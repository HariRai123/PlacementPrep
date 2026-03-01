
import Todoitem from './Todoitem'

const Todo = () => {
const todos=[
     { id: 1, title: "Learn React", status: "Pending" },
    { id: 2, title: "Practice Props", status: "In Progress" },
    { id: 3, title: "Build Todo App", status: "Completed" }
]
    return (
    <div>
        <ol>
           {todos.map((todo)=>(
            <Todoitem key={todo.id} todo={todo}/>
           ))}
        </ol>
    </div>
  )
}

export default Todo