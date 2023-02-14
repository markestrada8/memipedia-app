import { useState, useEffect } from "react"
import CurrentUserContext from "../context/CurrentUserContext"

interface ICurrentUserProviderProps {
  children: any
}

export default (props: ICurrentUserProviderProps) => {
  const [currentUser, setCurrentUser] = useState({ id: 123, email: "user@email.com" })

  const initialState = {
    currentUser: currentUser,
    setCurrentUser: setCurrentUser
  }

  return (
    <CurrentUserContext.Provider value={initialState}>
      {props.children}
    </CurrentUserContext.Provider>
  )
}