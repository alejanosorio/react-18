import { Routes,Route} from "react-router-dom"
import {  useState } from "react"
import  {Crud} from "./components/Crud"
import { Login } from "./components/Login"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import "./App.css"
import { Protected } from "./components/Protected"
import {RickAndMorty} from "./components/RickAndMorty" 
export const App=()=> {
 const [db,setDb]=useState("")
 function createData(data){
  data.id=Date.now()
  setDb([...db,data])
 }
  return (
    <>
   <Navbar/>
    <Routes>
    <Route index element={<Login/>} />          
   <Route path="api" element={ <RickAndMorty/>}/>
   <Route element={<Protected />}>
   <Route path="home" element= {<Crud data={db} createData={createData}/>}/> 
   </Route>
  
    </Routes>
    <Footer/>
    </>

  )
}


