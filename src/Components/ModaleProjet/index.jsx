import { modaleID, modaleIDopened } from "../../Features/selector";
import Datas from "../../assets/Datas.json"
import Stars from "../Stars";
import { useSelector, useDispatch } from "react-redux";
import "../../Style/Components/ModaleProjet/modaleprojet.scss"
import { Erase } from "../../Features/modaleIDReducer";
import { Link } from "react-router-dom";

const ModaleProjet = () => {
const dispatch = useDispatch();
const ModaleID = useSelector(modaleID)
const ModaleOpenned = useSelector(modaleIDopened)



let FilteredDatas = "";

        if(ModaleID !== ""){
        FilteredDatas = Array.from(Datas.filter((g) => g.id === ModaleID ));
        }
    const closeModale = () => {
        dispatch(Erase())
    }
    const eraseDatas = () => {
        dispatch(Erase())
    }

    return (<div>
{ModaleOpenned? <div className="modaleOpenned">
<div onClick={() => closeModale()} className="Toclose">
    <span className="cross cross1"></span>
    <span className="cross cross2"></span>
</div>
<div className="Name">{FilteredDatas[0].nom}</div>
<div className="Photo"><img src={FilteredDatas[0].photo} alt={FilteredDatas[0].nom} /></div>
<div className="flexyDescr">
<div className="flexy"><h4>Déscription du projet : </h4>{FilteredDatas[0].description}</div>
    <div className="flexy"><h4>Lien vers le code : </h4><Link onClick={() => eraseDatas()} to={FilteredDatas[0].GithubCode}>{FilteredDatas[0].GithubCode}</Link></div>
    <div className="flexy"><h4>Lien vers le site : </h4><Link onClick={() => eraseDatas()} to={FilteredDatas[0].adresse}>{FilteredDatas[0].adresse}</Link></div>
</div>
<div className="flexycomp">
    <h4>Compétences utilisées</h4>
<div className="comp">
    <div className="compFlex"><h5>HTML</h5><Stars note={FilteredDatas[0].Compétences.HTML} /></div>
    <div className="compFlex"><h5>CSS</h5><Stars note={FilteredDatas[0].Compétences.CSS} /></div>
    <div className="compFlex"><h5>JS</h5><Stars note={FilteredDatas[0].Compétences.JS} /></div>
    <div className="compFlex"><h5>REACT</h5><Stars note={FilteredDatas[0].Compétences.REACT} /></div>
    <div className="compFlex"><h5>REDUX</h5><Stars note={FilteredDatas[0].Compétences.REDUX} /></div>
  
</div>
</div>
</div> : <div className="modaleClosed"></div>}

    </div>)
}

export default ModaleProjet;