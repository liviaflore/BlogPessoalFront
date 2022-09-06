import React, { useEffect, useState, ChangeEvent } from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId, post, put } from '../../../services/Service';
import { findByTestId } from '@testing-library/react';


import Postagem from '../../../models/Postagem';
import useLocalStorage from 'react-use-localstorage';

import './DeletarPostagem.css';


function DeletarPostagem() {

  let history = useNavigate();

    const {id} = useParams<{id: string}>();
    const[token, setToken] = useLocalStorage('token');
    const[post, setPosts] = useState<Postagem>()

    useEffect(()=>{
        if(token == ''){
            alert("Você precisa estar logado!")
            history("/login")
        }

    }, [token])

    useEffect(()=>{
        if(id !== undefined){
            findById(id)
        }
      }, [id])

    async function findById(id: string){
        buscaId(`/postagens/${id}`, setPosts, {
          headers: {
            'Authorization': token
          }
        })
      }

      function sim() {
        history('/posts')
        deleteId(`/postagens/${id}`, {
          headers: {
            'Authorization': token
          }
        });
        alert('Postagem deletada com sucesso');
      }
    
      function nao() {
        history('/posts')
      }
   
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
              {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button onClick={nao} variant="contained" size='large' color="secondary">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default DeletarPostagem;