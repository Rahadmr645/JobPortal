
import { createContext, useState } from "react";

export const StoreContext = createContext();


export const ContextProvider = ({ children }) => {


    const [state, setState] = useState('working');

   
    const [showForm, setShowForm] = useState(false);







    const contextValue = {
        state,
        setState,
        showForm,
        setShowForm,
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}