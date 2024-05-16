import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Use = () =>{
    var[x,setx]=useState()
    const react=()=>{
        setx("React")
    }
    const angular=()=>{
        setx("angular")
    }
    const node=()=>{
        setx("node")
    }
    useEffect(()=>{react();},[])
  return (
    <div>
        <br /><br /><br /><br /><br /><br />
        <Typography variant="h3">welcome to {x}</Typography>
        <Button variant="contained"color="success" onClick={react}>react</Button>&nbsp;&nbsp;&nbsp;
        <Button variant="contained"color="success" onClick={angular}>angular</Button>&nbsp;&nbsp;&nbsp;
        <Button variant="contained"color="success" onClick={node}>node</Button>&nbsp;&nbsp;&nbsp;
    
    </div>
  )
}

export default Use