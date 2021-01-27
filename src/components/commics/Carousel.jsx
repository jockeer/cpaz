import React from 'react';

import Carousel from 'react-elastic-carousel'
import ModuloItem from '../modulos/ModuloItem';


import '../../assets/css/carousel.css' 


const Carousell = ({modulos,sesiones}) => {
    return ( 
        <div className="container-carousel">
             <h2 className="titulo">Visita nuestros modulos</h2>
    
            <Carousel className="carousel-home" itemsToShow={3} >
                {modulos.map( modulo =>{
                    return <ModuloItem key={modulo.id} titulo={modulo.titulo} modulo={modulo.modulo} nroSesiones={modulo.numeroSesiones} sesiones={sesiones}/>
                })}
                
            </Carousel>
            {/* <Carousel className="carousel-home" itemsToShow={1} >
                {modulos.map( modulo =>{
                    return <ModuloItem key={modulo.id} titulo={modulo.titulo} modulo={modulo.modulo} nroSesiones={modulo.numeroSesiones} sesiones={sesiones}/>
                })}
                
            </Carousel> */}

        </div>
     );
}
 
export default Carousell;