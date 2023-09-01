import { useLocation } from "react-router-dom";
import {Routes, Route } from 'react-router-dom';
import Home from "../../Pages/Home";
import Projets from "../../Pages/Projets";
import Histoire from "../../Pages/Histoire";
import Competences from "../../Pages/Competences";
import Contact from "../../Pages/Contact";
import Error from "../../Pages/Error";

const RoutesWithAnimation = () => {

    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
<Route exact path='/' element={<Home />} />
<Route path='/projets' element={<Projets />} />
<Route path='/histoire' element={<Histoire />} />
<Route path='/competences' element={<Competences />} />
<Route path='/contact' element={<Contact />} />
<Route path='*' element={<Error />} />
      </Routes>
    )
}

export default RoutesWithAnimation;