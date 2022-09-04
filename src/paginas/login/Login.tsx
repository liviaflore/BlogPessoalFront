import React, {useState, ChangeEvent} from 'react';
import {Grid, Box, Typography, TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom'

import UserLogin from '../../models/UserLogin';

import './Login.css';


function Login() {

  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      nome: '',
      usuario: '',
      foto: '',  
      senha: '',
      token: ''
    }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

      setUserLogin({
        ...userLogin,
        [e.target.name]: e.target.value
      })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
      e.preventDefault();

      console.log('userLogin: ' + userLogin);

    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid alignItems='center' xs={6} className='login'>
            <Box paddingX={20}>
               <form onSubmit={onSubmit}>
                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='titulologin'> Olá! </Typography>
                <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel} id='Usuario' label='Usuario' name='Usuario' variant='outlined' margin='normal' fullWidth/>
                <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel} id='Senha' label='Senha' name='Senha' variant='outlined' margin='normal' type='password' fullWidth/>
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
                <Link to='/cadastroUsuario'>
                 <Typography variant='subtitle1' gutterBottom color='textPrimary' align='center' className='textos1'>  Cadastre-se! </Typography>
                </Link>
               </Box>

            </Box>

        </Grid>

        <Grid xs={6} className='imagem1'>

        </Grid>

        </Grid>

    
    );
}

export default Login;
