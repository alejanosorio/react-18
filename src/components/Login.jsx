import axios from "axios"
import { useState } from "react"
import  contain   from   "./styles/login.module.css"
export const Login=()=>{

const[form,setForm]=useState({ })
const handleChangue=(e)=>{ 
 setForm({...form,[e.target.name]:e.target.value})

}

const handleChecked=(e)=>{
  setForm({...form,[e.target.name]:e.target.checked})

}

const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

return(

<div className={contain.container}>
<h1>login</h1>
<form  method="POST" className={contain.form}>

    <label>
       <span>correo electronico</span><br/>
      < input type="email" name="email" required onChange={handleChangue} value={form.email}/>
    </label>
    <br/>
    <label>
       <span>password</span><br/>
      < input type="password" name="password" required onChange={handleChangue}  />
    </label><br/>
    <button type="submit">Login</button>
</form>

<h5>elige una opcion</h5>
<select name="lenguaje" onChange={handleChangue} defaultValue="">
  <option>---</option>
  <option value="js">js</option>
  <option value="python">python</option>
  <option value="java">java</option>
  <option value="php">php</option>
  <option value="rust">rust</option>
  </select>
  <br/><br/>
  <label htmlFor="terminos">acepto terminos y condicciones</label>
  <input type="checkbox" name="terminos" id="terminos" onChange={handleChecked} />



</div>

)

}