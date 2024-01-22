import "../../Style/Components/CompetencesBarre/competencesbarre.scss"
import { HashLink as Link } from "react-router-hash-link"
import { useSelector } from "react-redux"
import { currentTheme } from "../../Features/selector"

const CompetencesBarre = (Props) => {

    const colors = useSelector(currentTheme)
    return(
        <div>
            <Link className="linkComp" smooth to={`/competences#${Props.name}`}> 
            <div className={"Bar " +colors}>
                <div className="nameBar">{Props.name}</div>
<div className={"progressBar progressBar-"+Props.pourcent+ " color-"+Props.color +" progressBar--"+Props.delay}></div>
            </div></Link>
        </div>
    )
}

export default CompetencesBarre