import React from 'react';
import {Grid, Box, Typography, TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom'

import './Login.css';


function Login() {

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid alignItems='center' xs={6} className='login'>
            <Box paddingX={20}>
               <form>
                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='titulologin'> Olá! </Typography>
                <TextField id='Usuario' label='Usuario' name='Usuario' variant='outlined' margin='normal' fullWidth/>
                <TextField id='Senha' label='Senha' name='Senha' variant='outlined' margin='normal' fullWidth/>
                  <Box marginTop={2} textAlign='center'>
                    <Link to='/home' className='text-decorator-none'>
                      <Button type='submit' variant='contained' color='primary'>
                        Entrar
                      </Button>
                    </Link>
                </Box>
               </form>
               <Box display='flex' justifyContent='center' marginTop={2}>
                <Box>
                 <Typography variant='subtitle1' gutterBottom color='textPrimary' align='center'> Não tem uma conta?</Typography>
                </Box>
                 <Typography variant='subtitle1' gutterBottom color='textPrimary' align='center' className='textos1'>  Cadastre-se! </Typography>
               </Box>

            </Box>

        </Grid>

        <Grid xs={6} className='imagem1'>

        </Grid>

        </Grid>

    
    );
}

export default Login;
