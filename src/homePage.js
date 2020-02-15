import React,{useState} from "react"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from "./list"
import Paper from '@material-ui/core/Paper';
import uuid from  "uuid"
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarRoot: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    list:{
      height :"100vh",
      width :"80vw"
    }
  })
);


export default function HomePage(){
    
    // handleAddItem = (item)=>{
    //     setList(
    //         [...list,{id:uuid(),item:item}]
    //     );
    // }
    const[list,setList] = useState([])
   const classes = useStyles();
    return(
     <div className = {classes.root}>
        <div className={classes.appBarRoot}>
      <AppBar position="static" color = "secondary">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Todo List 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
   
    <div style = {{display:"flex",justifyContent:"center",marginTop:"1rem "}}>
      <Grid item xs = {10} sm = {8}  >
      <Paper elevation = {2} >
        <List addItem  ={(item)=>setList(
            [...list,{id:uuid(),title:item,completed:false}]
        )} list = {list}
        handleDelete = {(id)=>{
          var newList = list.filter(item=>{
            return item.id!==id
          })
          setList(
            newList
          )
        }}
        handleChangeClass = {
          (id)=>{
          var newList = list.map(item=>{
            return (item.id===id?{...item,completed:!item.completed}:item)
          })
          setList(newList)
          }
        }
        />
      </Paper>
      </Grid>
    </div>
    </div>
    )

}