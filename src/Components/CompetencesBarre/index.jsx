import "../../Style/Components/CompetencesBarre/competencesbarre.scss"
import { HashLink as Link } from "react-router-hash-link"

const CompetencesBarre = (Props) => {

    return(
        <div>
            <Link className="linkComp" smooth to={`/competences#${Props.name}`}>
            <div className="Bar">
                <div className="nameBar">{Props.name}</div>
<div className={"progressBar progressBar-"+Props.pourcent+ " color-"+Props.color +" progressBar--"+Props.delay}></div>
            </div></Link>
        </div>
    )
}

export default CompetencesBarre