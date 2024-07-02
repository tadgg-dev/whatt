
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Alert  } from 'react-bootstrap'
import axios from 'axios';

import { useSession } from '../hooks/SessionContext';
import { API_BASE } from '../constants';

const LoginPage = () => {
  const  { setUser, setIsLoggedIn }  = useSession();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();
  const LoginUser = () => {
    axios.post(`${API_BASE}/auth/login`, formData).then((userData) => {
      setIsLoggedIn(true);
      setUser(userData?.data);
      navigate('/logged');
    }).catch((error) => {
      setError(error?.response?.data);
    })
  }

  const handlerChange = (event) => {
    setFormData({
      ...formData, 
      [event.target.name]: event.target.value,
    })
  }

  return (
    <>
      <Form className="formulario">
        {error && <Alert key="login-error" variant="danger" onClose={() => setError(null)} dismissible>
          {error}
        </Alert>}
        <h1>Inicia Sesión</h1>

        <Form.Group class="mb-3">
          <Form.Label for="email">Email</Form.Label>
          <Form.Control type="email" placeholder="ingresa tu email" onChange={handlerChange} name="email" />
        </Form.Group>

        <Form.Group class="mb-3">
          <Form.Label for="clave">Contraseña</Form.Label>
          <Form.Control type="password" placeholder="ingresa tu clave" onChange={handlerChange} name="password" />
        </Form.Group>
        <div>
          <Link to="/register">¿No tenes cuenta? Registrate</Link>  
        </div>
        <div>
         <Button variant="primary" type="button" onClick={LoginUser}>
            Entrar!
         </Button>
        </div>
      </Form>
    </>
  );
};

export default LoginPage