import React from 'react';
import CommicMain from '../commics/CommicMain';
import Footer from '../layouts/Footer';
import Jumbotron from '../layouts/Jumbotron';
import Navbar from '../layouts/Navbar';
const Home = () => {
    return ( 
        <>
        <Jumbotron/>
        <Navbar/>
        <div className="container-commic-main">
            <CommicMain/>
        </div>

        </>
        
     );
}
 
export default Home;