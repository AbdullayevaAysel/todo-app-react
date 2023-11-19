import { useEffect, useState } from "react"
import { getLocal, setLocal } from "./helper"

const useThema = () => {
  let color = getLocal("thema")

  const [thema, setThema] = useState(color || "light")

  useEffect(() => {
    setLocal(thema, "thema")
    if (thema == "dark") {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [thema])

  const handleThema = () => {
    setThema(thema == "light" ? "dark" : "light")
  }

  return { thema, handleThema }
}

export default useThema
