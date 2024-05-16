import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const  Navbar = () => {
  return (
    <div> 
     <AppBar>
        <Toolbar>
           <Typography variant="h3">facebook</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained">
           <Link to='/u'>login</Link>
          </Button>  
           <Button variant="contained">
          <Link to='/reg'>signup</Link>
          </Button>
          <Button variant="contained">
          <Link to='/i'>use</Link>
          </Button>   
          <Button variant="contained">
          <Link to='/c'>Counter</Link>
          </Button>  
          <Button variant="contained">
          <Link to='/view'>viewdata</Link>
          </Button>  
          
        </Toolbar>
     </AppBar>
    </div>
  )
}

export default  Navbar