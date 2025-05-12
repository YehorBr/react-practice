import { useContext } from "react"
import { Context } from "./App"

export const Message = ()=>{
    const abc = useContext(Context)
    console.log(abc);
    return <>{abc.showMessage && <p>Hello, World</p>}  </>
}