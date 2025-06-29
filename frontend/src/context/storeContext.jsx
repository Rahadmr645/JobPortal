
import { createContext, useState } from "react";

export const StoreContext = createContext();


export const ContextProvider = ({ children }) => {


    const [state, setState] = useState('working');

   
    const [showForm, setShowForm] = useState(false);

 const a = 'rahad'





    const contextValue = {
        state,
        setState,
        showForm,
        setShowForm,
        a,
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}