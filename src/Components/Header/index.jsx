import "../../Style/Components/Header/header.scss"
import Logo from "../../assets/BB.jpg"
import Theme from "../Theme"
import { Link } from "react-router-dom"
import { useEffect, useState} from "react"
import { sticky } from "../../Features/sticky"
import Nav from "../Nav"
import { useDispatch, useSelector } from "react-redux"
import {Sticky, currentTheme } from "../../Features/selector"
import { Active, Disactive } from "../../Features/StickyReducer"



const Header = () => {
    const [scroll, updateScroll] = useState(false)

    const dispatch = useDispatch();
    const isSticky = useSelector(Sticky);
    const colors = useSelector(currentTheme);


useEffect(() => {
    sticky(updateScroll);

    if(scroll) {
        dispatch(Active())
    }
    else {
        dispatch(Disactive()) 
    }
}, [scroll, dispatch])


    return (
        <div>
            {isSticky?  <div className={"header sticky " +colors}><Nav/></div> :  <div className={"header " +colors}><Link to="/"><img src={Logo} alt="Logo de Bastien BARYLA" className="logo" /></Link><Theme /><Nav/></div>  }
             
        </div>
    )
}

export default Header;