import React from 'react'
import { Avatar, Grid, Typography, Card, Divider, Input } from "@mui/material";

const Nav = ({idName,employee}) => {
  return (
    <div>
      <Card sx={{backgroundColor:"tomato",color:"white",textAlign:"center"}}> <Typography sx={{ pt: "2px" }}>{idName}</Typography></Card>
        <Grid
          container
          sx={{ borderBottom: "2px solid gray", flexDirection: "row" }}
        >
          <Grid item xs={10}>
            <Typography sx={{ pt: "5px" }}>Management System</Typography>
           
          </Grid>

          <Grid item xs={2}>
            <Avatar sx={{ mb: "10px",backgroundColor:"tomato" }}>
            <Typography component={"div"} sx={{fontSize:"5px", color:"white"}}>{employee.fName}</Typography>
            </Avatar>
          </Grid>
        </Grid>
    </div>
  )
}

export default Nav