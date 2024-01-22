import "../../Style/Components/CardProjet/cardprojet.scss"
import { useDispatch } from "react-redux";
import { Select } from "../../Features/modaleIDReducer";
import ScrollModale from "../../Features/scrollModale";
import { useSelector } from "react-redux";
import { currentTheme } from "../../Features/selector";

const CardProjet = (Props) => {

    const colors = useSelector(currentTheme)

const dispatch = useDispatch();

const modaleOpen = (e) => {
    ScrollModale()
dispatch(Select(e))

}

    return (<div id={Props.id} className={"projetGlobal " +colors}>
        <img className="imagePres" src={Props.photo} alt={Props.nom} />
        <div className="TitlePres">{Props.nom}</div>
        <div onClick={() => modaleOpen(Props.id)} className="discoverProject " >Découvrir ce projet</div>
    </div>)
}

export default CardProjet;