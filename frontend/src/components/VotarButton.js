// components/VotarButton.js
import React from 'react';
import Button from '@mui/material/Button';

function VotarButton({ onClick }) {
  return (
    <Button
      variant="contained"
      color="primary"
      style={{ fontSize: '15px', padding: '15px 10px', width: '10ch', backgroundColor: '#2F4F4F' }}
      onClick={onClick}
    >
      Votar
    </Button>
  );
}

export default VotarButton;
