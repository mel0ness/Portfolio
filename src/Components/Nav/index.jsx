import { useState } from "react";
import { Link } from "react-router-dom";
import "../../Style/Components/Nav/nav.scss"
import ScrollTop from "../../Features/scrollTop";

const Nav = () => {

    const ClickNav = () => {
       
        ScrollTop();
        openBurger(false);
    }

    const [BurgerOpenned, openBurger] = useState(false);
    return (<div>
        {BurgerOpenned?  <div className="burger" onClick={() => openBurger(false)}><span className="top topOpenned"></span>
        <span className="middle middleOpenned"></span>
        <span className="bottom bottomOpenned"></span>  </div> :    <div className="burger" onClick={() => openBurger(true)}><span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span></div>  }
         
  {BurgerOpenned? <nav className="visible">
        <Link onClick={() => ClickNav()} to="/" className="onglet onglet--1">Home</Link>
        <Link onClick={() => ClickNav()} to="/projets" className="onglet onglet--2">Projets</Link>
        <Link onClick={() => ClickNav()} to="/competences" className="onglet onglet--3">Compétences</Link>
        <Link onClick={() => ClickNav()} to="/histoire" className="onglet onglet--4">Mon histoire</Link>
        <Link onClick={() => ClickNav()} to="/contact" className="onglet onglet--5">Contact</Link>
    </nav> : <nav className="invisible">
    <Link onClick={() => ClickNav()} to="/" className="onglet onglet--1">Home</Link>
        <Link  onClick={() => ClickNav()} to="/projets" className="onglet onglet--2">Projets</Link>
        <Link onClick={() => ClickNav()} to="/competences" className="onglet onglet--3">Compétences</Link>
        <Link onClick={() => ClickNav()} to="/histoire" className="onglet onglet--4">Mon histoire</Link>
        <Link onClick={() => ClickNav()} to="/contact" className="onglet onglet--5">Contact</Link>
    </nav> }</div>
    )
}

export default Nav;