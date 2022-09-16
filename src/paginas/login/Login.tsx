import React, {useState, useEffect, ChangeEvent} from 'react';
import {Grid, Box, Typography, TextField, Button, FormControlLabel, Checkbox} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import { addToken } from '../../store/tokens/actions';
import {toast} from 'react-toastify';

import './Login.css';


function Login() {
  let history = useNavigate();
  
  const dispatch = useDispatch();

  const [token, setToken] = useState('');

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
        dispatch(addToken(token))
        history('/home')
      }
    }, [token])


    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
      e.preventDefault();
      try{
          await login(`/usuarios/logar`, userLogin, setToken)

          toast.success('Usuário logado com sucesso!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
      }catch(error){
        toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
      });
      }

    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className="background">
        <Grid alignItems='left' xs={6}>
            <Box paddingX={20} className="container">
               <form onSubmit={onSubmit}>
                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='titulologin'> Olá! </Typography>
                <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' name='usuario' variant='outlined' margin='normal' fullWidth className="usuario"/>
                <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' name='senha' variant='outlined' margin='normal' type='password' fullWidth className="senha"/>
                <FormControlLabel
              control={<Checkbox value="remember" color="primary" className="lembrar"/>}
              className="lembrar" label="Me lembre!"
            />

                  <Box marginTop={2} textAlign='center'>
                    
                      <Button type='submit' variant='contained' className="btn">
                        Entrar
                      </Button>
                    
                </Box>

                
               
               <Box marginTop={5} textAlign="center">
                
                 <Typography variant='subtitle1' gutterBottom color='textPrimary' align='center' className="textos1"> Não tem uma conta?</Typography>
                </Box>
                <Link to='/cadastroUsuario' className="cadastrese">
                 <Typography variant='subtitle1' gutterBottom color='textPrimary' align='center' className='cadastrese'>  Cadastre-se! </Typography>
                </Link>
                </form>
               </Box>

               

            </Grid>

        </Grid>

        /* <Grid xs={6} className='imagem1'>

        </Grid> */

        

        

    
    );
}

export default Login;
