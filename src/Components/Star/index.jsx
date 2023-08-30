import StarFull from "../../assets/starFull.svg"
import StarEmpty from "../../assets/starEmpty.svg"
import "../../Style/Components/Stars/stars.scss"

const Star = (Props) => {
    return (
        Props.state > 0 ? (
            <img src={StarFull} alt="Etoile" className={" star star" + Props.class}/>
        ) : <img src={StarEmpty} alt="Etoile vide" className={"star star" + Props.class}/>
    )
}

export default Star