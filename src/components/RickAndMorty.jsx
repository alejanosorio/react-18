import { useEffect, useState } from "react"
import movie  from "./styles/movies.module.css"
import { Link} from "react-router-dom"
import { Pagination } from "./Pagination"

export const RickAndMorty=()=>{
const[personajes,setPersonajes]=useState([])
const[info,setInfo]=useState({})
const API="https://rickandmortyapi.com/api/character"
function getData(url){
    fetch(url) 
    .then((res)=>res.json())
    .then((data)=>{
        setPersonajes(data.results)
        setInfo(data.info)
    })
    
    .catch((error)=>console.log(error))
 }
const onPrev=()=>{
   getData(info.prev)
}
const onNext=()=>{
    getData(info.next)
}

useEffect(() => {
 getData(API)

  
}, [])

    return(
        <>
        <Pagination prev={info.prev} next={info.next} onPrev={onPrev}onNext={onNext} />
        <div  className={movie.content}>
       {personajes.map((el,id)=>
      
       <section key={id} >
    
        <div className={movie.card}>
        <img  src={el.image} alt="..." />
        <div className={movie.card_cont}>
            <h5>{el.name}</h5>
            <p>{el.status} </p>
         
        <Link to="/home" className={movie.link}>inicio</Link>
       
        </div>
   
        </div>
  
      
  </section>
        
       
       )}


        </div>
       
        </>
    )
}
 