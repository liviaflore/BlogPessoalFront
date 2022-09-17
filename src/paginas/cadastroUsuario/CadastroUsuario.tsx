import React, {ChangeEvent, useState, useEffect} from 'react';
import { Grid, Box, Typography, Button, TextField } from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service'
import {toast} from 'react-toastify';

import "./CadastroUsuario.css";

function CadastroUsuario() {

    let history = useNavigate()

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [user, setUser] = useState<User>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        //foto: ""
    })

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        //foto: ""
    })

    useEffect(() => {
        if (userResult.id !== 0) {
            history('/login')
            
        }
    }, [userResult])


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        // Estrutura Condicional que verifica se as senhas batem e se a Senha tem mais de 8 caracteres
        if (confirmarSenha === user.senha && user.senha.length >= 8) {

            //Tenta executar o cadastro
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success('Usuário cadastrado com sucesso!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });

            //Se houver erro, pegue o Erro e retorna uma msg
            } catch (error) {
                console.log(`Error: ${error}`)
                
                //Pode modificar a msg de acordo com o erro 
                toast.error('Usuário já existente', {
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

        } else {
            toast.error('Insira no mínimo 8 caracteres na senha', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });   // Mensagem que indica a quantidade minima de caracteres

            setUser({ ...user, senha: "" }) // Reinicia o campo de Senha
            setConfirmarSenha("")           // Reinicia o campo de Confirmar Senha
        }
    }

    /*
        = : atribuição (valor = 9)
        == : op. aritmetico (valor == 9.0)
        === : op. idêntico (valor === 9.0)
    */

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className="background">
            <Grid item xs={6} className="container">
            <Box paddingX={10} className='imagem2' ></Box>

            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='titulocadastro'> Cadastre-se </Typography>
                        <TextField value={user.nome} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' name='nome' variant='outlined' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}  id='usuario' label='usuario' name='usuario' variant='outlined' margin='normal' fullWidth />
                        <TextField value={user.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}  id='senha' label='senha' name='senha' variant='outlined' margin='normal' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(e:ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}  id='confirmarSenha' label='confirmarSenha' name='confirmarSenha' variant='outlined' margin='normal' type='password' fullWidth />
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


        </Grid>

    );
}

export default CadastroUsuario;