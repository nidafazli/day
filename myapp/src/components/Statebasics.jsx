import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
  var[name,fname]=useState("NIDAFAZLY")
  var[val,setval]=useState()
  var[sub,setsub]=useState()
  const handleInput=(e)=>{
    setval(e.target.value);
    

  }
  const submithandler=()=>{
    console.log("clicked")
    setsub(val)
  }
   return (
    <div style={{margin:'70px'}}>
      <br/><br/><br/>
    <Typography variant='h6'>WELCOME TO {sub}</Typography>
    <br />
    <TextField variant="outlined" onChange={handleInput}/>
    <Button variant="contained"onClick={submithandler}> submit</Button>
    </div>
  )
}

export default Statebasics