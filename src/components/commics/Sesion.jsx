import React from 'react';

import '../../assets/css/sesion-home.css'
const Sesion = ({numeroSesion,tituloSesion}) => {
    return (
        <> 
        <li className="sesion-home"><span>Sesion #{numeroSesion}</span> - "{tituloSesion}" </li>
        </>
     );
}
 
export default Sesion;