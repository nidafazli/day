import { Button, TextField } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>

       <br /><br /><br /><br /><br /><br />
        <TextField id="outlined-basic" label="username" variant="outlined" ></TextField><br /><br />
        <TextField id="outlined-basic" label="email" variant="outlined"></TextField><br /><br />
        <TextField id="outlined-basic" label="password" variant="outlined"></TextField><br /><br />

        <Button variant="contained">signup</Button>
            </div>
  )
}

export default Register