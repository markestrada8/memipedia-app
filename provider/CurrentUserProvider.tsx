import { useState, useEffect } from "react"
import CurrentUserContext from "../context/CurrentUserContext"
import * as SecureStore from 'expo-secure-store'
import API from "../utils/API"

interface ICurrentUserProviderProps {
  children: any
}

export default (props: ICurrentUserProviderProps) => {
  const [currentUser, setCurrentUser] = useState(null)

  const getUser = async () => {
    const token = await SecureStore.getItemAsync('memipedia_secure_token')

    API.get('logged_in', { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {

        // console.log("User pro vider GET: ", response.data)

        if (response.data.memipedia_user) {
          setCurrentUser(response.data.memipedia_user)
        } else {
          setCurrentUser(null)
        }
      })
      .catch(error => {
        setCurrentUser(null)
        console.log('User credential check error: ', error)
      })
  }

  const initialState = {
    currentUser: currentUser,
    setCurrentUser: setCurrentUser,
    getUser: getUser
  }

  return (
    <CurrentUserContext.Provider value={initialState}>
      {props.children}
    </CurrentUserContext.Provider>
  )
}