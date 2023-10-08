import { Box, Typography } from '@mui/material'
import React from 'react'
import WritersThought from './WritersThought'

const WritingAll = () => {
  return (
    <>
    <Box sx={{width:"89%", marginTop:"50px", marginX:"auto", color:"#ff9b02"}}>
    <Typography variant='h5' className='mb-10'>All Thoughts</Typography>
    <WritersThought/>
    </Box>
    </>
  )
}

export default WritingAll
