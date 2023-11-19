import useTodoFilter from "../utils/useTodoFilter"
import TodoFilter from "./TodoFilter"
import TodoItem from "./TodoItem"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

const TodoList = ({ todos, setTodos }) => {
  const { visibleTodos } = useTodoFilter(todos)

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
              {visibleTodos?.map((todo, index) => (
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
              <TodoFilter setTodos={setTodos} todos={todos} />
            </ul>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default TodoList
