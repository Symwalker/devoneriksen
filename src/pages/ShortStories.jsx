import { Box, Typography } from '@mui/material'
import React from 'react'
import ShortStoriesCmp from '../components/short-storiescmp/ShortStoriesCmp'

const ShortStories = () => {
  return (
    <Box sx={{ width: "85%", marginTop: "50px", marginX: "auto", color: "white" }}>
      <Typography variant='h5'  sx={{color:"#ff9b02", mb:4}}>Short stories</Typography>
        <ShortStoriesCmp/>
    </Box>
  )
}

export default ShortStories
