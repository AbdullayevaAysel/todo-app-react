import { useEffect, useState } from "react"
import { FiPlus } from "react-icons/fi"
import { nanoid } from "nanoid"
import TodoList from "./components/TodoList"

function App() {

  let localTodos = JSON.parse(localStorage.getItem("todos"));
  let color = JSON.parse(localStorage.getItem("thema"));
  const [thema, setThema] = useState(color || "light")
  const [todos, setTodos] = useState(localTodos || [])
  const [todo, setTodo] = useState("")
  const [complated, setComplated] = useState(false)

  useEffect(() => {
    localStorage.setItem("thema", JSON.stringify(thema))
    if (thema == "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [thema])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleThema = () => {
    setThema(thema == "light" ? "dark" : "light")
    console.log(thema)
    console.log(todos)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    todo !== "" && setTodos((todos) => [{
      id: nanoid(),
      name: todo,
      complated: complated
    }, ...todos])
    
    setTodo("")
  }

  return (
    <div className="relative h-screen font-josefin bg-very-light-gray dark:bg-very-dark-blue">
      <div className=" bg-mobile-light sm:bg-desktop-light dark:bg-mobile-dark sm:dark:bg-desktop-dark bg-cover w-full h-2/5 bg-no-repeat bg-cover"></div>
      <section className="absolute w-4/5 md:w-2/5 left-[50%] top-[10%] translate-x-[-50%] ">
        <div className="flex justify-between items-center mb-7">
          <h1 className=" text-[50px] font-semibold uppercase text-very-light-gray tracking-[10px]">
            Todo
          </h1>
          <div
            onClick={() => handleThema()}
            className={`${
              thema == "dark" ? "bg-icon-sun" : "bg-icon-moon"
            } bg-no-repeat bg-cover w-[25px] h-[25px] cursor-pointer`}
          ></div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="relative w-full flex items-start dark:bg-very-dark-desaturated-blue rounded"
        >
          <input
            type="text"
            name="addTodo"
            id="addTodo"
            placeholder="Create a new todo..."
            autoComplete="given-name"
            className="block w-full  p-4 text-[18px] outline-none dark:bg-very-dark-desaturated-blue dark:text-very-light-grayish-blue"
            value={todo}
            onChange={(e) =>  setTodo(e.target.value)}
          />
          <button
            className="absolute right-[20px] top-[50%] translate-y-[-50%] text-very-light-gray bg-check-background bg-cover rounded-full tracking-wide uppercase font-josefin-sans cursor-pointer text-30 text-center flex items-center justify-center w-[30px] h-[30px]"
            type="submit"
          >
            <FiPlus />
          </button>
        </form>

        <TodoList todos={todos} setTodos={setTodos} complated={complated} setComplated={setComplated} />
      </section>
    </div>
  )
}

export default App
