import React,{useState} from "react"
import TextField from '@material-ui/core/TextField';

import ListItem from "./listItem"

export default function List({list,addItem,handleDelete,handleChangeClass}){
const [item,setItem] = useState("");

return(
    <div style = {{display:"flex",
    flexDirection:"column",
    justifyContent:"center",
  }}>
      <form onSubmit = {(e)=>{
  e.preventDefault();
  addItem(item)
  setItem("")
}} style = {{padding:"0.5rem 1rem"}}>
      <TextField value  = {item} onChange = {(e)=>setItem(e.target.value)}   label = "Add Item"
      fullWidth 
      /></form>
      {list.map(item=>{
        return <ListItem item = {item} handleClick ={ ()=>handleDelete(item.id)} key = {item.id} changeClass = {()=>handleChangeClass(item.id)}/>
      })}  
    </div>
)

}