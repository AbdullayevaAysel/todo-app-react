import { useEffect } from "react"
import TodoItem from "./TodoItem"

const TodoList = ({ todos, setTodos, complated, setComplated }) => {
  const handleDelete = (id) => {
    setTodos((todos) => todos?.filter((todo) => todo.id !== id))
  }

  useEffect(() => {
    console.log(complated);
  }, [complated])

  const handleFilterAll = () => {
    // setComplated()
  }

  return (
    <ul
      className=" mt-5 rounded-md font-semibold capitalize shadow-lg"
      style={{ background: "rgb(255 255 255)" }}
    >
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          val={todo.name}
          id={todo.id}
          handleDelete={handleDelete}
          check={todo.complated}
          setComplated={setComplated}
        />
      ))}
      <div className="flex justify-between p-5 text-dark-grayish-blue text-[14px]">
        <div> items left {todos.length}</div>
        <div className="flex justify-center gap-3">
          <div onClick={() => handleFilterAll}>All</div>
          <div>Active</div>
          <div>Completed</div>
        </div>

        <div>Clear Completed</div>
      </div>
    </ul>
  )
}

export default TodoList
