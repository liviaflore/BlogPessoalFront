import React from "react";
import {Box, Paper, Button} from '@mui/material';
import'./Home.css';

function Home(){
    return(
        <>
     <Paper>
      <Box p={2}>
        <Box display="flex" justifyContent="center">
          <h1>Título</h1>
        </Box>
        <img src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg" alt="Imagem do espaço capturada pela NASA, por meio do James Webb Space Telescope" style={{width: "100%", height: "100%"}}/>
      <Box display="flex" justifyContent="center" p={2}>
        <Button variant="contained" color="primary">Texto 1</Button>
        <Button variant="contained" color="secondary">Texto 2</Button>
        </Box>
      </Box>
     </Paper>
        </>
    );
}

export default Home;