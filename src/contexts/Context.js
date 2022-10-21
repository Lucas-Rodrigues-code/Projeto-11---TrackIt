import { createContext, useState } from "react";



export const Context = createContext();




export function ContextProvider({ children }) {
    const [login, setLogin] = useState(null)


    return (
        <Context.Provider value={{ login,setLogin }}>
            {children}
        </Context.Provider>
    )

}
