import {Link } from "react-router-dom"
 import nav from "./styles/navbar.module.css"
 export const Navbar=()=>{


    return(
        <div className={nav.header}>
      <nav className={nav.menu}>
        <Link to="/" className={nav.item}>Login</Link>
        <Link to="home" className={nav.item}>home</Link>
        <Link to="api" className={nav.item}>api</Link>
      </nav>
        </div>
  

    )
}