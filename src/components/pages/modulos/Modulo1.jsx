import React,{useState,useEffect} from 'react';
import Navbar from '../../layouts/Navbar';
import JumbotronModulos from '../../layouts/JumbotronModulos'

import './../../../assets/css/modulo1.css'

import Modulo1Logo from '../../../assets/img/logos/modulo-1.png'
import Prueba1 from './Prueba1';
import Prueba2 from './Prueba2';

import Tema1 from '../../../assets/multimedia/tema1.ogg'
import LogoPodcast from '../../../assets/img/podcast.JPG'
import LogoArena from '../../../assets/img/clock.JPG'

const Modulo1 = () => {

    
    

    const [nrosesionActual, setNroSesionActual] = useState(1)

    const [cantidadSesiones, setCantidadSesiones] = useState(3)

    const [componente, setComponente] = useState(3)

    useEffect(() => {
        const cargarSesionn = async() =>{
            let componente = 'prueba1'
            let newComponene = componente.charAt(0).toUpperCase()+ componente.slice(1)
            // document.getElementById("contai").appendChild('<Prueba1 ><Prueba1 />');
        }
        cargarSesionn();
    }, [nrosesionActual])

    const PaginaAnterior = () => {
        if (nrosesionActual===1) {
            return;
        }
        setNroSesionActual(nrosesionActual-1)
    }
    
    const PaginaSiguiene = () => {
        if (nrosesionActual===cantidadSesiones) {
            return;
        }
        setNroSesionActual(nrosesionActual+1)
        
    }

    const onSubmitActividad = (e)=>{
        e.preventDefault();
    }

    
    return ( 
        <>
        <JumbotronModulos/>
        <Navbar />
        <div className="container-modulo-1">
            <figure>
                <img src={Modulo1Logo} alt=""/>
                <span>- Explorando Quienes Somos</span>
            </figure>
            <div className="botones-mod1-sesiones">
                
                <button className={`btn ${nrosesionActual===1 ? 'desactivado' :null }`} onClick={PaginaAnterior}>
                    {`<`}
                </button>
                
                <h2 className="opcionMenu">SESION {nrosesionActual}</h2>
                
                <button className={`btn ${nrosesionActual===cantidadSesiones ? 'desactivado' :null }`} onClick={PaginaSiguiene}>
                    {`>`}
                </button>
            </div>

            
            <div className="container-mod1" >
                
                <div className="item-container-modulo-1" id="contai">
                    <h1 className="podcast-titulo">Podcast</h1>
                    <img className="logo-podcast" src={LogoPodcast}  alt=""/>
                    <audio controls>
                        <source src={Tema1} type='audio/mp4' />
                    </audio>

                    <div className="container-podcast">
                        <p>Esta es la historia de la familia Hinojosa,<br/>
                            Raúl es el padre, trabaja manejando un camión de carga, 
                            <br/>
                            Valentina es la mamá, ella es ama de casa (a Raúl no le gusta que trabaje, ya que piensa que nadie más puede cuidar a sus hijos); Brenda con 17 años, Lucas de 12 y Sarita de 3 son los hermanitos. <br/>
                            Han tenido que viajar y mudarse de casa tantas veces, que en ocasiones deciden no desempacar del todo. Les ha tocado vivir el campo, en la ciudad capital, en pueblos fríos y a veces en lugares con el sol insoportable, todo depende donde le toque trabajar la empresa que lo contrata a RAUL.  <br/>
                            Al principio era emocionante, pero ahora Brenda ya no le gusta, se siente confundida y agobiada, pues cada vez tiene que hacer nuevos amigos, aprender nuevas costumbres y dialectos. 
                            Apenas habían llegado a su nueva casa, conoció a su vecina Luisa, quien se acercó amablemente, comenzaron a charlar y pronto se hicieron buenas amigas, hablaron sobre sus viajes y las experiencias que habían vivido, ya llevaban más de 3 horas conversando <br/>
                            -	Luisa, créeme que me gustaría quédame en un solo lugar, esto de estar viajando no es lo mío <br/>
                            -	¡Qué dices! Es lo máximo, yo nunca he salido de este pueblo, ¡que suertuda que eres!  <br/>
                            <span className="d-block mt-3 mb-3"><b>"Realizar Actividad 1 "</b></span>

                            Luisa Continuó con la conversación y le dijo: Pero bueno, cuéntame todo sobre ti, qué te gusta <br/>
                            -	¿Cómo qué me gusta? <br/>
                            -	Sí, que te gusta hacer, comer, no sé, dime todo sobre ti. <br/>
                            -	Bueno, me encanta comer papa con queso, es mi favorito, mmmm hacer, me encanta hacer tik tok.. y subir estos videos a mis estados de mis redes sociales. ¿Y a ti?  <br/>
                            -	ahhh pero no solo me digas tu comida favorita, y tu pasatiempo, quiero saberlo todo, quien eres…que te preocupa, que te alegra, a quién amas, quienes te aman <br/>
                            Brenda, se quedó pensando, recordando comidas y pasatiempos, identificando de dónde le llega el amor que recibe… y a quienes ama intensamente, todo sobre ella misma y quién es ella…mientras Brenda piensa, tú también reflexiona sobre estas cuestionaste 
                            <span className="d-block mt-3 mb-3"><b>"Realizar Actividad 2 "</b></span>
                            - Me encanta el fideo, hacer deportes, sobre todo el básquet <br/>
                            - A mí me gusta el voleibol. ¿Tú me enseñarías Básquet?
                            - Claro, a mí me desestresa, la verdad
                            - Bueno, continúa, no quise interrumpir
                            - A ver que más…. mmm… sobre el amor, el amor más puro me llega de mi familia. Je, aunque a veces no nos soportamos, claro en el buen sentido, digo porque a veces peleamos, pero sé que puedo contar con ellos. A veces siento que me presionan demasiado con todas sus exigencias… pretenden buenas calificaciones, que ayude en la casa, además que cuide a mis hermanos, que aprenda a tocar un nuevo instrumento, nuevo idioma, nuevas costumbres… ¿Luisa… de dónde sacas preguntas tan complicada?


                        </p>
                    </div>
                </div>
                <div className="item-container-modulo-1">
                    <h2 className="podcast-titulo">Actividades</h2>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Actividad 1
                            </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <form onSubmit={onSubmitActividad} action="">
                                    <label htmlFor="m1_a1_p1">Primera Preguna <br/> QUE TE GUSTARIA MÁS A TI?  </label>
                                    <div className="btn-group d-block d-flex m-3" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
                                        <label className="btn btn-outline-primary" htmlFor="btnradio1">Estar de viaje toda tu vida por el mundo</label>

                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                                        <label className="btn btn-outline-primary" htmlFor="btnradio2">Conocer varias culturas, pero tener un lugar estable</label>

                                    </div>
                                    <label htmlFor="m1_a1_p1">Segunda Preguna <br/>Viendo el sentimiento de Brenda ¿Qué harías tú en el lugar de Brenda?</label>
                                    <input type="text" name="" id="m1_a1_p1" className="form-control"/>
                                    <button type="submit" className="btn btn-success m-2">
                                        Enviar Respuesta
                                    </button>
                                </form>

                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Actividad 2
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <h3>reloj de reflexión y pensamiento</h3>
                                <img src={LogoArena} alt=""/>
                                
                                <button type="button" className="btn btn-success d-block">Empezar</button>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                 
        </div>
        </>
    );
}
 
export default Modulo1;