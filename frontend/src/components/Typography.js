import * as React from 'react';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default function TypographyTheme() {
  return (
    <Div>
    {/* 'rem' é a mesma coisa que '20px' por exemplo. Mas ele é utilizado nesse caso
    quando um usuário aumentar ou diminuir o tamanho da fonte no navegador, os elementos
    relacionados com 'rem' se ajustarão automaticamente. */}
    <p style={{ lineHeight: '1', textTransform: 'none', fontSize: '1rem' }}>
      Abaixo temos o TOP 10 das Criptomoedas mais favoritas de acordo com o usuário.
    </p>
    <p style={{ lineHeight: '1', textTransform: 'none', fontSize: '1rem' }}>
      Você pode selecionar uma de sua escolha clicando em cima do nome dela.
    </p>
    <p style={{ lineHeight: '1', textTransform: 'none', fontSize: '1rem' }}>
      Todas são organizadas das mais votadas em primeiro para as menos votadas.
    </p>
    <hr style={{ marginTop: '2rem', marginBottom: '1rem', borderColor: 'grey' }} />
  </Div>
  );
}


// import React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// export default function BoxWithText() {
//   return (
//     <Box>
//       <Typography variant="h6" component="div" sx={{ color: 'black', marginTop: 5, lineHeight: '0em'}}>
//         Abaixo temos o TOP 10 das Criptomoedas mais favoritas de acordo com o usuário.<p></p>
//         Você pode selecionar uma de sua escolha clicando em cima do nome dela.<p></p>
//         Elas são organizadas das mais votadas em primeiro para as menos votadas por último.
//         <hr style={{ marginTop: 20, marginBottom: 10, borderColor: 'grey' }} />
//       </Typography>
//     </Box>
//   );
// }
