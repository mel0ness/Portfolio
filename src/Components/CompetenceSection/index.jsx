import "../../Style/Components/CompetencesBarre/competencesbarre.scss"

const CompetenceSection = (Props) => {

    return(
        <div>
            <div className="Bar">
                <div className="nameBar">{Props.name}</div>
<div className={"progressBarNonAni progressBarNonAni-"+Props.pourcent+ " color-"+Props.color}></div>
            </div>
        </div>
    )
}

export default CompetenceSection