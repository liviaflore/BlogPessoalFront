import React from 'react';
import {Grid, Box, Typography, TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom'

import './Login.css';


function Login() {

    return (
        <Grid container className='back'>
        <Grid alignItems='center' xs={6}>
            <Box paddingX={20}>
               <form>
                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'> Entrar </Typography>
                <TextField id='Username' label='Username' name='Username'/>
                <TextField id='Password' label='Password' name='Password' />
                  <Box marginTop={2} textAlign='center'>
                    <Link to='/home' className='text-decorator-none'>
                      <Button type='submit' variant='contained' color='primary'>
                        Logar
                      </Button>
                    </Link>
                </Box>
               </form>
               <Box>
                <Box>
                 <Typography variant='subtitle1' gutterBottom color='textPrimary' align='center'> Não tem uma conta? </Typography>
                </Box>
                 <Typography variant='subtitle1' gutterBottom color='textPrimary' align='center' className='textos1'> Cadastre-se! </Typography>
               </Box>

            </Box>

        </Grid>

        <Grid xs={6} className='imagem'>

        </Grid>
        </Grid>

    
    );
}

export default Login;
