import { useState } from "react";
import "../../Style/Components/Nav/nav.scss"
import ScrollTop from "../../Features/scrollTop";
import LinkNav from "../LinkNav";
import { currentTheme } from "../../Features/selector";
import { useSelector } from "react-redux";

const Nav = () => {

    const colors = useSelector(currentTheme)

    const ClickNav = () => {
       
        ScrollTop();
        openBurger(false);
    }

    const [BurgerOpenned, openBurger] = useState(false); 
    return (<div>
        {BurgerOpenned?  <div className="burger" onClick={() => openBurger(false)}><span className={"top topOpenned "+colors}></span>
        <span className={"middle middleOpenned " +colors}></span>
        <span className={"bottom bottomOpenned " +colors}></span>  </div> :    <div className="burger  background" onClick={() => openBurger(true)}><span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span></div>  }
         
  {BurgerOpenned? <nav className="visible">
    <LinkNav funct={ClickNav} to="/" class="onglet--1" name="Home" />
    <LinkNav funct={ClickNav} to="/projets" class="onglet--2" name="Projets" />
    <LinkNav funct={ClickNav} to="/competences" class="onglet--3" name="Compétences" />
    <LinkNav funct={ClickNav} to="/histoire" class="onglet--4" name="Mon histoire" />
    <LinkNav funct={ClickNav} to="/contact" class="onglet--5" name="Contact" />
    </nav> : <nav className="invisible">
    <LinkNav funct={ClickNav} to="/" class="onglet--1" name="Home" />
    <LinkNav funct={ClickNav} to="/projets" class="onglet--2" name="Projets" />
    <LinkNav funct={ClickNav} to="/competences" class="onglet--3" name="Compétences" />
    <LinkNav funct={ClickNav} to="/histoire" class="onglet--4" name="Mon histoire" />
    <LinkNav funct={ClickNav} to="/contact" class="onglet--5" name="Contact" />
    </nav> }</div>
    )
}

export default Nav;