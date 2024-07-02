
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Alert  } from 'react-bootstrap'
import axios from 'axios';

import { useSession } from '../hooks/SessionContext';
import { API_BASE } from '../constants';

const RegisterPage = () => {
  const  { setUser, setIsLoggedIn }  = useSession();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();
  const createUser = () => {
    axios.post(`${API_BASE}/auth/register`, formData).then(() => {
      navigate('/login');
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
        <h1>Registrate</h1>

        <Form.Group class="mb-3">
          <Form.Label for="name">Nombre</Form.Label>
          <Form.Control placeholder="ingresa tu nombre" onChange={handlerChange} name="name" />
        </Form.Group>
        <Form.Group class="mb-3">
          <Form.Label for="name">Apellido</Form.Label>
          <Form.Control placeholder="ingresa tu apellido" onChange={handlerChange} name="lastName" />
        </Form.Group>
        <Form.Group class="mb-3">
          <Form.Label for="email">Email</Form.Label>
          <Form.Control type="email" placeholder="ingresa tu email" onChange={handlerChange} name="email" />
        </Form.Group>

        <Form.Group class="mb-3">
          <Form.Label for="clave">Contraseña</Form.Label>
          <Form.Control type="password" placeholder="ingresa tu clave" onChange={handlerChange} name="password" />
        </Form.Group>
        <div>
          <Link to="/login">¿Ya tienes cuenta? Inicia Sesión</Link>  
        </div>
        <div>
         <Button variant="primary" type="button" onClick={createUser}>
            Entrar!
         </Button>
        </div>
      </Form>
    </>
  );
};

export default RegisterPage