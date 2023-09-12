import { useState } from "react"

const UseNotification = () => {
  const [notification, setNotification] = useState(null)

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
        setNotification(null)
    }, 3000);
  }

  return {notification, showNotification}
}

export default UseNotification
