import React, { useState, useEffect } from 'react';
import getClient from '../../helpers/getClient';

import { Button } from '@mui/material';
import { Box } from '@mui/material';

import './clients.css';


const Clients = () => {
  const [client, setClient] = useState({});
 
  const updateClient = () => {
    getClient()
    .then((newClient) => {
        setClient(newClient);
    })
  }

  useEffect(() => {
    updateClient(); 
  }, [])

  return (
      <div className='content'>
        <Button  
          variant="contained"
          size='large' 
          onClick={updateClient} 
        >
         Click <b style={{ color: 'red' }}>AQUÍ </b>para conocer otros clientes 👽 :
        </Button>

      <Box>
        <h2>{client.name}</h2>
        <h3>{client.email}</h3>
      </Box>

    
      </div>
  )
}

export default Clients;