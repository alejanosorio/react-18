import { useState,useEffect } from "react"
const initialForm={
    id:null,
    name:"",
    username:""
}
export const CrudForm=({createData})=>{
const [form,setForm]=useState(initialForm)
const [edit,setEdit]=useState(null)

const updateData=(data)=>{}
const handleSubmit=(e)=>{
    e.preventDefault()
  if(!form.name||!form.username){
    alert("datos incompletos")
    return
  }
  if(form.id===null){
    createData(form)
  }else{
    updateData(form)
  }
}
const handleChange=(e)=>{
    setForm({
        ...form,
       [e.target.name]:e.target.value

    })
}
const handleReset=(e)=>{
    setForm(initialForm)
    setEdit(null)
}

    return(

        <div style={{width:"100%",height:"auto",padding:"5px"}}>
        <h1 style={{marginTop:"60px"}}>formulario</h1>
        <form action="" method="post" onSubmit={handleSubmit} style={{display:"flex"}}>
            <input type="text"  name="name" placeholder="name" onChange={handleChange} value={form.name}/>
            <br/>
            <input type="text"  name="username" placeholder="username"onChange={handleChange} value={form.username}/>
            <br/>
            <input type="submit" value="enviar" />
            <br/>
            <input type="reset" value="reset" onClick={handleReset}/>
            <br/>
        </form>
        </div>
    )
}