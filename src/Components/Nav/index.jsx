import { useState } from "react";
import "../../Style/Components/Nav/nav.scss"

const Nav = () => {

    const [BurgerOpenned, openBurger] = useState(false);
    return (<div>
        {BurgerOpenned?  <div className="burger" onClick={() => openBurger(false)}><span className="top topOpenned"></span>
        <span className="middle middleOpenned"></span>
        <span className="bottom bottomOpenned"></span>  </div> :    <div className="burger" onClick={() => openBurger(true)}><span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span></div>  }
         
  {BurgerOpenned? <nav className="visible">
        <div className="onglet onglet--1">Home</div>
        <div className="onglet onglet--2">Projets</div>
        <div className="onglet onglet--3">Compétences</div>
        <div className="onglet onglet--4">Mon histoire</div>
        <div className="onglet onglet--5">Contact</div>
    </nav> : <nav className="invisible">
    <div className="onglet onglet--1">Home</div>
        <div className="onglet onglet--2">Projets</div>
        <div className="onglet onglet--3">Compétences</div>
        <div className="onglet onglet--4">Mon histoire</div>
        <div className="onglet onglet--5">Contact</div>
    </nav> }</div>
    )
}

export default Nav;