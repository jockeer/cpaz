import React from 'react';
import '../../assets/css/footer.css'
import LogoFacebook from '../../assets/img/logos/facebook.png'
import LogoTwitter from '../../assets/img/logos/twitter.png'
import LogoInstagram from '../../assets/img/logos/instagram.png'
import LogoYoutube from '../../assets/img/logos/youtube.png'
const Footer = () => {
    return ( 
        <footer>
            <div className="container-footer">
                <div className="contactos-footer">
                    <h3>Contactos</h3>
                    <div className="container-contactos">

                        <p>OCIFINA CENTRAL <br/>
                        Av. Hernando Siles No 6023 <br/>
                        esq. Calle 15 de Obrajes <br/>
                        La Paz - Bolivia <br/>
                        Telefonos:(+591) 2 2165900 <br/>
                        Fax (+591)2 2165999 <br/>
                        <a href="http://bolivia@wvl.org">bolivia@wvl.org</a></p>
                        
                        <p>OCIFINA ZONAL ORIENTE <br/>
                        SANTA CRUZ <br/>
                        Barrio Cacho Centro <br/>
                        Calle A No 3, Zona Parque Industrial <br/>
                        Telefonos:(+591) 3 3485519 <br/>
                        </p>
                        <div className="redes-sociales-footer">
                            <a href="https://www.google.com" target="__blank">
                                <img src={LogoFacebook} alt="Logo Facebook"/>
                            </a>
                            <a href="https://www.google.com" target="__blank">
                                <img src={LogoTwitter} alt="Logo Twitter"/>
                            </a>
                            <a href="https://www.google.com" target="__blank">
                                <img src={LogoInstagram} alt="Logo Instagram"/>
                            </a>
                            <a href="https://www.google.com" target="__blank">
                                <img src={LogoYoutube} alt="Logo Youtube"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contactos-footer">
                    <h3></h3>
                </div>
                <div className="contactos-footer">

                    <h3></h3>
                </div>

            </div>
            <p className="pie-de-pagina">Copyright &copy; {new Date().getFullYear()}</p> 
        </footer>
     );
}
 
export default Footer;