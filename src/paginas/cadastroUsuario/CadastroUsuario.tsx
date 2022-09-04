import React from 'react';
import { Grid, Box, Typography, Button, TextField } from '@mui/material';

import {Link} from 'react-router-dom';

import "./CadastroUsuario.css";

function CadastroUsuario() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>

            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='titulocadastro'> Cadastre-se </Typography>
                        <TextField id='Nome' label='Nome' name='Nome' variant='outlined' margin='normal' fullWidth />
                        <TextField id='Usuario' label='Usuario' name='Usuario' variant='outlined' margin='normal' fullWidth />
                        <TextField id='Senha' label='Senha' name='Senha' variant='outlined' margin='normal' type='password' fullWidth />
                        <TextField id='confirmarSenha' label='confirmarSenha' name='confirmarSenha' variant='outlined' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login'  className='btnCancelar'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            
                                <Button type='submit' variant='contained' color='primary' className='btnCadastrar'>
                                    Cadastrar
                                </Button>
                            
                        </Box>
                    </form>
                </Box>

            </Grid>


        </Grid>

    );
}

export default CadastroUsuario;