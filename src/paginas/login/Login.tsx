import React, {useState, useEffect, ChangeEvent} from 'react';
import {Grid, Box, Typography, TextField, Button} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';

import './Login.css';


function Login() {
  let history = useNavigate();
  const [token, setToken] = useLocalStorage('token');

  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      //nome: '',
      usuario: '',
      //foto: '',  
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

    useEffect(()=>{
      if(token != ''){
        history('/home')
      }
    }, [token])


    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
      e.preventDefault();
      try{
          await login(`/usuarios/logar`, userLogin, setToken)

          alert('Usuário logado com sucesso!');
      }catch(error){
          alert('Dados do usuário inconsistentes. Erro ao logar!');
      }

    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid alignItems='center' xs={6}>
            <Box paddingX={20}>
               <form onSubmit={onSubmit}>
                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='titulologin'> Olá! </Typography>
                <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' name='usuario' variant='outlined' margin='normal' fullWidth/>
                <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' name='senha' variant='outlined' margin='normal' type='password' fullWidth/>
                  <Box marginTop={2} textAlign='center'>
                    
                      <Button type='submit' variant='contained' color='primary'>
                        Entrar
                      </Button>
                    
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
