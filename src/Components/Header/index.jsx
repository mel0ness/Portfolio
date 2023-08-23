import "../../Style/Components/Header/header.scss"
import Logo from "../../assets/BB.jpg"
import { Link } from "react-router-dom"
import { useState } from "react"

const Header = () => {

const [BurgerOpenned, openBurger] = useState(false);

    return (
        <div className="header">
            <Link to="/"><img src={Logo} alt="Logo de Bastien BARYLA" className="logo" /></Link>
            
                {BurgerOpenned?  <div className="burger" onClick={() => openBurger(false)}><span className="top topOpenned"></span>
                <span className="middle middleOpenned"></span>
                <span className="bottom bottomOpenned"></span>  </div> :    <div className="burger" onClick={() => openBurger(true)}><span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span></div>  }
                 
          {BurgerOpenned? <nav className="visible">
                <div className="onglet onglet--1">Home</div>
                <div className="onglet onglet--2">Projets</div>
                <div className="onglet onglet--3">Mon histoire</div>
                <div className="onglet onglet--4">Contact</div>
            </nav> : <nav className="invisible">
                <div className="onglet onglet--1">Home</div>
                <div className="onglet onglet--2">Projets</div>
                <div className="onglet onglet--3">Mon histoire</div>
                <div className="onglet onglet--4">Contact</div>
            </nav> }
        </div>
    )
}

export default Header;