import { useMemo, useState } from "react"

const useTodoFilter = (todos) => {
  const [tab, setTab] = useState("all")

  const visibleTodos = useMemo(() => {
    return todos?.filter((todo) => {
      if (tab === "all") {
        return true
      } else if (tab === "active") {
        return !todo.completed
      } else if (tab === "completed") {
        return todo.completed
      }
    })
  }, [todos, tab])

  return { setTab, visibleTodos }
}

export default useTodoFilter
