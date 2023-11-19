import { handleClearCompleted } from "../utils/helper"
import useTodoFilter from "../utils/useTodoFilter"

const TodoFilter = ({ setTodos, todos }) => {
  const { setTab } = useTodoFilter()

  return (
    <div className="flex justify-between p-4 text-dark-grayish-blue text-[14px] dark:bg-very-dark-desaturated-blue">
      <div>{todos.length > 0 ? `items: ${todos.length}` : "items left"}</div>
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

      <div
        className="cursor-pointer"
        onClick={() => handleClearCompleted(setTodos)}
      >
        Clear Completed
      </div>
    </div>
  )
}

export default TodoFilter
