import { useMemo, useState } from "react"
import TodoItem from "./TodoItem"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

const initialTasks = [
  {
    id: 1,
    title: "Task 1",
  },
  {
    id: 2,
    title: "Task 2",
  },
  {
    id: 3,
    title: "Task 3",
  },
]

const TodoList = ({ todos, setTodos, showNotification }) => {
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
    showNotification("todo silindi")
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
    showNotification("completed olunmus todolar silindi")
  }

  const onDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(todos)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setTodos(items)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <ul className=" overflow-hidden mt-5 rounded font-semibold capitalize shadow-lg bg-[#fff] dark:bg-very-dark-desaturated-blue">
              {visibleTodos.map((todo, index) => (
                <Draggable
                  key={todo.id}
                  draggableId={todo.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <TodoItem
                        key={todo.id}
                        val={todo.name}
                        id={todo.id}
                        check={todo.completed}
                        handleDelete={handleDelete}
                        handleChecked={handleChecked}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <div className="flex justify-between p-4 text-dark-grayish-blue text-[14px] dark:bg-very-dark-desaturated-blue">
                <div>
                  {" "}
                  {todos.length > 0 ? `items: ${todos.length}` : "items left"}
                </div>
                <div className="flex justify-center gap-3">
                  <div className="cursor-pointer" onClick={() => setTab("all")}>
                    All
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setTab("active")}
                  >
                    Active
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setTab("completed")}
                  >
                    Completed
                  </div>
                </div>

                <div
                  className="cursor-pointer"
                  onClick={() => handleClearCompleted()}
                >
                  Clear Completed
                </div>
              </div>
            </ul>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default TodoList
