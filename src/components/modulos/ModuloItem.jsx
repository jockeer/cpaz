import React,{useState,useEffect} from 'react';
import '../../assets/css/card-comic.css'
import {Link} from 'react-router-dom'
import Sesion from '../commics/Sesion'

import Error from '../layouts/Error'
const ModuloItem = ({titulo,modulo,nroSesiones,sesiones}) => {

    const [ sesionesModulo, setSesionesModulo] = useState([])

    useEffect(() => {
        let cargarSesionesModulo = async () => {
            let nuevasSesiones =  await sesiones.filter(sesion => {
                return parseInt(sesion.id_modulo) === parseInt(modulo)
            })
            // debugger

            console.log(nuevasSesiones);
            setSesionesModulo(nuevasSesiones);

        }
        cargarSesionesModulo()
    }, [])

    return ( 
        <>
       <Link to={`/modulo-${modulo}`} className="click-card">
            <div className="card sombra">
                <div className="card-header">
                    <h6>{titulo}</h6>
                    <div className="card-nro-modulo">
                        {modulo}
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-sesiones">Sesiones</h5>
                    <div className="container-sesiones">
                        <ul>
                            {sesionesModulo.length === 0
                                ?<Error clase="alert-danger" mensaje="no tiene sesiones"/>
                                :sesionesModulo.map(sesion => {
                                    return <Sesion key={sesion.id} numeroSesion={sesion.nro_sesion} tituloSesion={sesion.tituloSesion}/>
                                })
                            }

                        </ul>
                    </div>
                    <p className="card-nro-modulo">Modulo {modulo}</p>
                </div>
                <div className="card-overlay">
                    <h2>MODULO #{modulo}</h2>
                </div>
            </div>
       </Link>
        </>
     );
}
 
export default ModuloItem;