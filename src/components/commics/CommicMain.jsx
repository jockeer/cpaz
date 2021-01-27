import React, {useEffect,useState} from 'react';
import Carousell from './Carousel'

import '../../assets/css/commic.css' 


//IMAGENES
import Cuadro1 from '../../assets/img/cuadro1.JPG'
import Cuadro2 from '../../assets/img/cuadro2.JPG'
import Cuadro3 from '../../assets/img/cuadro3.JPG'
import Cuadro4 from '../../assets/img/cuadro4.JPG'

const CommicMain = () => {

    const [ modulos, setModulos ] = useState([
        {id:1, titulo:'EXPLORANDO QUIENES SOMOS', modulo: 1, numeroSesiones:3},
        {id:2, titulo:'PREVINIENDO LA VIOLENCIA', modulo: 2, numeroSesiones:5},
        {id:3, titulo:'HOMBRES Y MUJERES EN EQUIDAD', modulo: 3, numeroSesiones:3},
        {id:4, titulo:'DIVIRTIENDONOS SIN LASTIMAR', modulo: 4, numeroSesiones:6},
        {id:5, titulo:'CONSOLIDANDO LA PAZ', modulo: 5, numeroSesiones:3},
    ])

    const [ sesiones, setSesiones ] = useState([
        {id:1, id_modulo:'1', tituloSesion:'Yo, mifamilia y comunidad',nro_sesion:1},
        {id:2, id_modulo:'1', tituloSesion:'Mis emociones',nro_sesion:2},
        {id:3, id_modulo:'1', tituloSesion:'Proyectando nuestras vidas',nro_sesion:3},
        {id:4, id_modulo:'2', tituloSesion:'Que es la violencia?',nro_sesion:1},
        {id:5, id_modulo:'2', tituloSesion:'Violencias',nro_sesion:2},
        {id:6, id_modulo:'2', tituloSesion:'Violencia Sexual',nro_sesion:3},
        {id:7, id_modulo:'2', tituloSesion:'Violencia Digital',nro_sesion:4},
        {id:8, id_modulo:'2', tituloSesion:'Como Auto protegerme',nro_sesion:5},
        {id:9, id_modulo:'3', tituloSesion:'Iguales en valor',nro_sesion:1},
        {id:10, id_modulo:'3', tituloSesion:'Es justo para las mujeres?, Es justo para los hombres?',nro_sesion:2},
        {id:11, id_modulo:'3', tituloSesion:'Oportunidades para todos: imagina que',nro_sesion:3},
        {id:12, id_modulo:'4', tituloSesion:'Como me seniria yo?',nro_sesion:1},
        {id:13, id_modulo:'4', tituloSesion:'Necesitamos drogas? Para nada',nro_sesion:2},
        {id:14, id_modulo:'4', tituloSesion:'!Quieres Alcohol!? No Gracias',nro_sesion:3},
        {id:15, id_modulo:'4', tituloSesion:'Sexualidad (A)',nro_sesion:4},
        {id:16, id_modulo:'4', tituloSesion:'Sexualidad (B)',nro_sesion:5},
        {id:17, id_modulo:'4', tituloSesion:'Buenas relaciones',nro_sesion:6},
        {id:18, id_modulo:'5', tituloSesion:'Que es Paz?',nro_sesion:1},
        {id:19, id_modulo:'5', tituloSesion:'Asertividad',nro_sesion:2},
        {id:20, id_modulo:'5', tituloSesion:'Quien es responsable de la violencia y de la paz?',nro_sesion:3},
        {id:21, id_modulo:'5', tituloSesion:'Como construir paz (A)',nro_sesion:4},
        {id:22, id_modulo:'5', tituloSesion:'Como construir paz (B)',nro_sesion:5},
        
    ])

    useEffect(() => {
       
    }, [])

    return ( 
        <>
        <div className="container-titulo">
            <h1 className="titulo-home">Bienvenidos</h1>
            <h2 className="titulo-home linea"></h2>
        </div>
        
        <Carousell modulos={modulos} sesiones={sesiones}/>

        <h2 className="subitulo-home">Lee nuestro Comic</h2>
        
        <article>
            <div className="container-comics">
                <div className="comic-main">
                    <div className="item-comic-main">
                        <img src={Cuadro1} alt=""/>
                    </div>
                    <div className="item-comic-main">
                        <img src={Cuadro2} alt=""/>
                    </div>
                    <div className="item-comic-main">
                        <img src={Cuadro3} alt=""/>
                    </div>
                    <div className="item-comic-main">
                        <img src={Cuadro4} alt=""/>
                    </div>
                    <div className="item-comic-main">
                        <img src={Cuadro1} alt=""/>
                    </div>
                    <div className="item-comic-main">
                        <img src={Cuadro3} alt=""/>
                    </div>
                    
                </div>
                <div className="comic-main-2">
                    <div className="item-comic-main">
                        <img src={Cuadro4} alt=""/>
                    </div>
                    <div className="item-comic-main">
                        <img src={Cuadro3} alt=""/>
                    </div>
                    <div className="item-comic-main">
                        <img src={Cuadro2} alt=""/>
                    </div>
                    <div className="item-comic-main">
                        <img src={Cuadro1} alt=""/>
                    </div>
                </div>
            </div>
        </article>
        </>
     );
}
 
export default CommicMain;