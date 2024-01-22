import "../../Style/Components/CompetencesBarre/competencesbarre.scss"
import { useSelector } from "react-redux"
import { currentTheme } from "../../Features/selector"

const CompetenceSection = (Props) => {

    const colors = useSelector(currentTheme)

    return(
        <div>
            <div className={"Bar " +colors}>
                <div className="nameBar">{Props.name}</div>
<div className={"progressBarNonAni progressBarNonAni-"+Props.pourcent+ " color-"+Props.color}></div>
            </div>
        </div>
    )
}
 
export default CompetenceSection