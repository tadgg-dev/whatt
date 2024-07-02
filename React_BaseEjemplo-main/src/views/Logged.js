
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../hooks/SessionContext';
import { Button } from 'react-bootstrap'

const Logged = () => {
  const  { isLoggedIn, logout }  = useSession();
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate('/');
    logout();
  }

  if (!isLoggedIn) {
    navigate('/login');
    return null
  }
 
  return (
   <>
    <h1>Bienvenido</h1>
    <Button className="mb-4" type='button' onClick={handlerClick}>Desloguearse</Button>
   </>
  );
};

export default Logged