
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Table, Spinner, Alert, Button } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE } from '../constants';

const RecepiesPage = () => {
  const navigate = useNavigate();
  const [recepies, setRecepies] = useState(null); 
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios.get(`${API_BASE}/recipies`).then((recepies) => {
        setRecepies(recepies?.data?.result)
      }).catch((error) => {
        setRecepies([])
        setError(error?.response?.data);
      })
  }, []);

  const handlerDelete = (recipe) => {
    axios.delete(`${API_BASE}/recipies?id=${recipe.idReceta}`).then((recepies) => {
        setRecepies(recepies?.data?.result)
      }).catch((error) => {
        setError(error?.response?.data);
      })
  };

  const createNew = () => {
    navigate("/recipe/new");
  }

  return (
    <div>
        {error && <Alert key="login-error" variant="danger" onClose={() => setError(null)} dismissible>
          {error}
        </Alert>}
        <h1>Recetas - ABM </h1>
        <caption className='d-flex'>Receta ABM</caption>
        <Button variant="primary" type="button" onClick={createNew}>Crear nueva</Button>
        {!recepies && <div className='receta-loading'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>}
       {recepies && <Table className='mt-4' striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Receta</th>
                <th>Modificar</th>
                <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    recepies?.map((recipe => {
                        return <tr>
                            <td>{recipe.idReceta}</td>
                            <td>{recipe.nombreReceta}</td>
                            <td><Link to={`/recipe/edit?id=${recipe.idReceta}`}>Modificar</Link></td>
                            <td><Link onClick={() => { handlerDelete(recipe) }}>Eliminar</Link></td>
                        </tr>
                    }))
                }
            </tbody>
        </Table>}
    </div>
  );
};

export default RecepiesPage