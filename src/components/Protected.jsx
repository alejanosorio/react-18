import { Navigate,Outlet } from "react-router-dom"
import { Login } from "./Login"

export const Protected=()=>{
    let token=localStorage.setItem("token","qwerty")

   if (token )return <Navigate to={Login}/>

    return <Outlet/>
}