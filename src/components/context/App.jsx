import React, { useState, useContext } from "react";
import { Message } from "./Message";
import { Button } from "./Button";

export const Context = React.createContext()

export const App = ()=>{

    const [showMessage, setShowMessage] = useState(false)

    return <>
    <Context.Provider value={{showMessage, setShowMessage }}>
        <Message/>
        <Button/>
    </Context.Provider>
    </>
}