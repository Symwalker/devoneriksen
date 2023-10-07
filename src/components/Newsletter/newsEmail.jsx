import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import "./newslettter.css"
import axios from "axios"
import Swal from 'sweetalert2'

const NewsEmail = () => {
    const {control , handleSubmit, reset} = useForm({
        defaultValues:{
          email:"",
        }
      })

      const subscribe = async (obj)=>{
        // console.log(obj);
        try{
          const res =  await axios.post("https://wandering-pink-fedora.cyclic.app/api/addsubscription", obj)
          // console.log(res);
   
        if(res){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You are subscribed successfully',
            showConfirmButton: false,
            timer: 2000
          })
        }
      
          reset({
            email: "", 
          });
          
        }catch(err){
            console.log("Error in calling addUser api" , err);
        }
      }
  return (
    <>
    <Box sx={{ textAlign:"center"}} marginTop={7} marginBottom={10}>
        <Typography variant='h2'  sx={{fontSize: {md:48, xs:38}}} fontFamily={"EB Garamond, serif"} color={"#FFFF"}>
            Be the first to know
        </Typography>

<Typography variant='h6' fontFamily={"Heebo, sans-serif"} fontSize={{xs:"13.5px", sm:"16px"}} sx={{marginLeft:"auto", marginRight:"auto"}} marginTop={0.5} color={"#FFFF"} width={{xs:"90%", sm:"70%", md:"50%"}}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nemo, doloribus  maxime expedita illo magni odit.
</Typography>

<form onSubmit={handleSubmit(subscribe)}  noValidate>
<Controller  name="email" control={control} 
               render={({ field: { onChange, value } }) => (
                <div style={{marginTop:20, width:"100%"}} >
                
                <input onChange={onChange} value={value} required autoFocus type="email" className="input p-3 " style={{fontSize:"19px"}} id="email" name="email" placeholder="Enter email please" autocomplete="off"/>
                <button class="button--submit" type="submit">Subscribe</button>

             </div>
              )}
            />
</form>
    </Box>
    </>
  )
}

export default NewsEmail