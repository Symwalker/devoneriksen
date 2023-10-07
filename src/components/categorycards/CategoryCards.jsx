import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import book1 from "../../images/book1over.png"
import { Link } from 'react-router-dom'
import Button from '../Buttton/button'
import "./categoryCard.css"
const CategoryCards = () => {
    return (
        <div >
            <Box className='flex  gap-6 ' sx={{ marginTop: "60px", marginBottom: "60px", textAlign:{xs:"center",sm:"start" ,md:"start"}, justifyContent:{xs:"cente", md:"start"}, alignItems:{xs:"center", md:"start"}, flexDirection:{xs:"column", sm:"row", md:"row"} }}>    
                <Box
                    component="img"
                    sx={{ width: 220 }}
                    alt="The house from the offer."
                    src={book1}
                />

                <Box>
                    <Link to="/theft-of-fire">
                        <Typography variant='h4' color={"white"} sx={{
                            '&:hover': {
                                textDecoration: "underline", color: "   #ff9b02"
                            }
                        }}>Theft of Fire</Typography>
                    </Link>
                    <Typography variant='body1' color={"white"} mt={2}>If you want to snatch a priceless alien artifact from the most heavily defended piece of sky in the outer solar system, and get away undetected, your best bet is a team of highly-experienced professionals who work together like the gears of an expensive watch. Or you could just send a tramp spacecraft constructed from plans found on internet, and crew it with a failed asteroid miner turned space pirate, a genetically modified - and emotionally unstable - heiress, and a prototype Artificial Intelligence in the midst of a catastrophic identity crisis.</Typography>
                    <Box sx={{display:"flex", flexDirection:"row", justifyContent:{xs:"center", md:"start"}}}>
<a target='_blank' href={"https://t.co/aaVNXJMcxi"}>
            <button class="btnn" type="button" style={{marginTop:25}}>
  <strong>Read Sample</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button>
</a>
<Button />
         
</Box>
                </Box>

              
            </Box>
        </div>
    )
}

export default CategoryCards