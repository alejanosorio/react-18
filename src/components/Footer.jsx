import { Link } from "react-router-dom"
import footer from "./styles/footer.module.css"

export const Footer=()=>{


    return(
<>
        <footer className={footer.pie}>
             <div className={footer.container}>
       <span>Todos los derechos reservados© 2023 Copyright</span><br/>
        <Link  to ="/" ><span >www.website.com</span></Link>
        
    </div>
        </footer>
    </>   
    )
}
