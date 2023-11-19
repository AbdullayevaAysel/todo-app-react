// take data from localStorage
export const getLocal = (name) => {
  return JSON.parse(localStorage.getItem(name))
}

// add data to localStorage
export const setLocal = (data, name) => {
  return localStorage.setItem(name, JSON.stringify(data))
}

// clear completed todo
export const handleClearCompleted = (setTodos) => {
  return setTodos((todos) => todos?.filter((todo) => todo.completed === false))
}
