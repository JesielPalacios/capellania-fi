import { createContext, useState } from 'react'

export const Context = createContext({})

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])
  const [editing, setEditing] = useState(false)
  const [jwt, setJWT] = useState(() => localStorage.getItem('token'))

  const [sidebar, setSidebar] = useState(true)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Context.Provider
      value={{
        jwt,
        setJWT,
        users,
        setUsers, 
        user,
        setUser,
        editing,
        setEditing,
        sidebar,
        showSidebar
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
