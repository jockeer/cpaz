import React from 'react';
import '../../assets/css/jumbotron.css'

import Logo from '../../assets/img/caminosLogo.png'
import LogoFacebook from '../../assets/img/logos/facebook.png'
import LogoTwitter from '../../assets/img/logos/twitter.png'
import LogoInstagram from '../../assets/img/logos/instagram.png'
import LogoYoutube from '../../assets/img/logos/youtube.png'
const Jumbotron = () => {
    return ( 
        <>
        <div className="Jumbotron">
            <div className="container-jumbo">
                <figure>
                    <img src={Logo} alt="Caminos Logo"/>
                </figure>
                <div className="redes-sociales">
                    <h2>Visitanos en</h2>
                    <div className="logos-redes-sociales">
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
        </div>
        </>
     );
}
 
export default Jumbotron;