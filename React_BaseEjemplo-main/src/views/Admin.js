
import React from 'react';
import { Link } from 'react-router-dom';

import { useSession } from '../hooks/SessionContext';

const AdminPage = () => {
  const  { userInfo }  = useSession();

  return (
    <>
      {(!userInfo || userInfo?.nivel !== 'admin') && <p>No tienes permiso para ver este contenido</p>}
      {userInfo?.nivel === 'admin' && <div>
        <h1>Bienvenido a su pantalla de Administrador!</h1>
        <h2>¿Qué desea administrar?</h2>
        <ul>
            <li class='formulario'><Link to="/recipies">Recetas</Link></li>
        </ul>
      </div>}
    </>
  );
};

export default AdminPage