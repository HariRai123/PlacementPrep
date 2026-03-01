

const Todoitem = ({todo}) => {
  return (
   <li>
    {todo.title}-{todo.status}
   </li>
  )
}

export default Todoitem