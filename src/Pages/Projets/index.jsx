import { HelmetProvider } from "react-helmet-async";
import CardProjet from "../../Components/CardProjet";
import ModaleProjet from "../../Components/ModaleProjet";
import Datas from "../../assets/Datas.json"
import { useSelector } from "react-redux";
import { Sticky } from "../../Features/selector";

const Projets = () => {

    const isSticky = useSelector(Sticky)
    
    return (<div>
        <HelmetProvider>
                <title>Mes projets</title>
            </HelmetProvider>

{isSticky?  <div className="decal"> <h1>Mes projets</h1>
            <div className="separator"></div>
            {Datas.map(({id, nom, photo, adresse, GithubCode, description, compétences}) => 
            <CardProjet id={id} nom={nom} photo={photo} adresse={adresse} git={GithubCode} descr={description} compt={compétences} key={id} />)}<ModaleProjet /></div> :  <div> <h1>Mes projets</h1>
            <div className="separator"></div>
            {Datas.map(({id, nom, photo, adresse, GithubCode, description, compétences}) => 
            <CardProjet id={id} nom={nom} photo={photo} adresse={adresse} git={GithubCode} descr={description} compt={compétences} key={id} />)}<ModaleProjet />
</div> }
          

    </div>)
}

export default Projets;