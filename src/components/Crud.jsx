import { useNavigate } from "react-router-dom"
import { CrudForm } from "./CrudForm"

export const Crud=( {data,createData})=>{
const navigate=useNavigate()
const handleBack=()=>{
  navigate(-1)
}
    return(
        < div className="cont-table">
       
        <CrudForm createData={createData}/>
        <br/>
        <table >
  
    <thead>   
  <tr>
    <th colSpan={4}>id</th>
    <th colSpan={2}>name</th>
    <th colSpan={2}>username</th>
    <th colSpan={2}>actions</th>
  </tr>
  </thead> 
  <tbody>
    {data.length=== 0?(<tr><td>sin data</td></tr>) :(data.map((el)=><tr>
    <td key={el.id} colSpan={4}>{el.id}</td>
    <td colSpan={2}>{el.name}</td>
    <td colSpan={2}>{el.username}</td>
  
    <td><button className="boton">edit</button></td>
    <td><button className="boton">delet</button></td>
  </tr>
  ))}
  </tbody>
</table> 
<button onClick={handleBack} className="btn">volver</button>
        </div>
        
    )
}