import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#2F4F4F', height: '80px'}}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div" sx={{ fontSize: '30px' }}>
            <p>
                $ TIPOS DE CRIPTOMOEDAS
            </p>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
