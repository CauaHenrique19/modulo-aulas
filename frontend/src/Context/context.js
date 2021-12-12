import { createContext, useState } from "react";

export const Context = createContext()

const ContextProvider = ({ children }) => {

    const [user, setUser] = useState(localStorage.getItem('aleatshop_token') || { token: null, admin: null, user_id: null })
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('aleatshop_user')))

    return (
        <Context.Provider value={{
            user, setUser,
            token, setToken
        }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider