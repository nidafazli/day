import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Viewdata = () => {
    var[user,setUser]=useState([]);
    useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response.data)
        setUser(response.data)
    },[])
    })
    

  return (
    <div>
       <br /><br /><br />
       <TableContainer>
        <Table>
            <TableHead>
                <TableCell>NAME</TableCell>
                <TableCell>USERNAME</TableCell>
                <TableCell>CITY</TableCell>
            </TableHead>
            <TableBody>
                {user.map((val,i)=>{
                    return(
                        <TableRow>
                            <TableCell>{val.name}</TableCell>
                            <TableCell>{val.username}</TableCell>
                            <TableCell>{val.address.city}</TableCell>
                            </TableRow>
                    )
                    

                })}
             </TableBody>




            
        </Table>
      </TableContainer>



     

    </div>
  )
}

export default Viewdata