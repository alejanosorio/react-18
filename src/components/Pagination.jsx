import movie  from "./styles/movies.module.css"

export const Pagination = ({next,prev,onNext,onPrev}) => {

    const handleClick=()=>{
   onNext ()
    }
    const prevClick=()=>{
   onPrev()
    }
  return (
    <div className={movie.container}>
        {}
        <button onClick={prevClick}className={movie.btn}>prev</button>
       <p>page:{}</p>
       <button onClick={handleClick}className={movie.btn}>next</button>
    </div>
  )
}
