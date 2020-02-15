import React from 'react'
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import "./list-item.css"
export default function ListItem({item,handleClick}) {
    return (
        <Paper elevation ={3} className = "paper-div" square>
            <div>{item.title}<DeleteIcon className = "delete-icon" onClick = {(e)=>{
                e.stopPropagation()
                handleClick()}}/></div>
        </Paper>
    )
}
