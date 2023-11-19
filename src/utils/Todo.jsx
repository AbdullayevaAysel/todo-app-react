import { useEffect, useState } from "react";
import { getLocal, setLocal } from "./helper";
import { nanoid } from "nanoid";

const useTodos = () => {
    const [todos, setTodos] = useState(getLocal("todos") || [])
    const [todo, setTodo] = useState("")

    useEffect(() => {
        setLocal(todos,"todos")
      }, [todos])
    
      const handleSubmit = (e) => {
        e.preventDefault()
        todo !== "" &&
          setTodos((todos) => [
            {
              id: nanoid(),
              name: todo,
              completed: false,
            },
            ...todos,
          ])
    
        setTodo("")
      }

      return {todo, todos, setTodo, setTodos, handleSubmit}
}

export default useTodos;