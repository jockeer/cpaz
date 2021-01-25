import React from 'react';
import { Link } from 'react-router-dom'
import '../../assets/css/navbar.css'
import LogoHome from '../../assets/img/logos/home.png'
import LogoLogin from '../../assets/img/logos/user.png'

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar bg">
            <div className="container-fluid">          
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Link  to="/"className="btn-home">
                        <div className="container-logo-home">
                            <img src={LogoHome}  alt=""/>
                        </div>                 
                    </Link>
                    <Link to="/">
                        <li>
                            <p>Modulo #1</p>
                        </li>
                    </Link>
                    <Link to="/">
                        <li>
                            <p>Modulo #2</p>
                        </li>
                    </Link>
                    <Link to="/">
                        <li>
                            <p>Modulo #3</p>
                        </li>
                    </Link>
                    <Link to="/">
                        <li>
                            <p>Modulo #4</p>
                        </li>
                    </Link>
                    <Link to="/">
                        <li>
                            <p>Modulo #5</p>
                        </li>
                    </Link>
                    
                    
                </ul>
                <form className="d-flex">
                    <Link to="/">
                        <img src={LogoLogin} alt=""/>
                    
                    </Link>
                </form>
                </div>
            </div>
            </nav>
     );
}
 
export default Navbar;