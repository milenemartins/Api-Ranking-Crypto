import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import VotarButton from '../components/VotarButton';
import MenuItem from '@mui/material/MenuItem';
import {crypto_type} from '../CryptoType';

function ListHome() {
  const [votos, setVotos] = useState({});

  const handleVotar = (tipo, value) => {
    // Lógica para processar o voto e enviar para a API
    console.log(`Votou em ${tipo}: ${value}`);
    setVotos({ ...votos, [tipo]: value });
  };

  return (
    <>
      {crypto_type.map((tipo, index) => (
        <Grid container spacing={1} alignItems="center" justifyContent="center" style={{ marginBottom: '20px' }} key={index}>
          <Grid item>
            <TextField
              id={`outlined-basic-${index}`}
              label="Tipo"
              variant="outlined"
              select
              value={votos[tipo] || ''}
              onChange={(e) => handleVotar(tipo, e.target.value)}
            >
              {crypto_type.map((opcao) => (
                <MenuItem key={opcao} value={opcao}>
                  {opcao}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <VotarButton onClick={() => handleVotar(tipo, votos[tipo])} />
          </Grid>
        </Grid>
      ))}

      {/* Outros grids e seus respectivos TextFields e VotarButtons aqui... */}
    </>
  );
}

export default ListHome;
