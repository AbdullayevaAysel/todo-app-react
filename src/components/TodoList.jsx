import { useMemo, useState } from "react"
import TodoItem from "./TodoItem"
import { useAutoAnimate } from "@formkit/auto-animate/react"

const TodoList = ({ todos, setTodos }) => {
  const [animationParent] = useAutoAnimate()
  const [tab, setTab] = useState("all")

  const visibleTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (tab === "all") {
        return true
      } else if (tab === "active") {
        return !todo.completed
      } else if (tab === "completed") {
        return todo.completed
      }
    })
  }, [todos, tab])

  const handleDelete = (id) => {
    setTodos((todos) => todos?.filter((todo) => todo.id !== id))
  }

  const handleChecked = (id, check) => {
    let newTodos = todos.map((todo) => {
      if (id == todo.id) {
        return { ...todo, completed: !check }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleClearCompleted = () => {
    setTodos((todos) => todos?.filter((todo) => todo.completed === false))
  }

  return (
    <ul
      className="mt-5 rounded font-semibold capitalize shadow-lg bg-[#fff] dark:bg-very-dark-desaturated-blue"
      ref={animationParent}
    >
      {visibleTodos?.map((todo) => (
        <TodoItem
          key={todo.id}
          val={todo.name}
          id={todo.id}
          check={todo.completed}
          handleDelete={handleDelete}
          handleChecked={handleChecked}
        />
      ))}
      <div className="flex justify-between p-4 text-dark-grayish-blue text-[14px] dark:bg-very-dark-desaturated-blue">
        <div> {todos.length > 0 ? `items: ${todos.length}` : "items left"}</div>
        <div className="flex justify-center gap-3">
          <div className="cursor-pointer" onClick={() => setTab("all")}>
            All
          </div>
          <div className="cursor-pointer" onClick={() => setTab("active")}>
            Active
          </div>
          <div className="cursor-pointer" onClick={() => setTab("completed")}>
            Completed
          </div>
        </div>

        <div className="cursor-pointer" onClick={() => handleClearCompleted()}>
          Clear Completed
        </div>
      </div>

      
    </ul>
  )
}

export default TodoList
