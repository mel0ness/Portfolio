import { HelmetProvider } from "react-helmet-async";
import CardProjet from "../../Components/CardProjet";
import ModaleProjet from "../../Components/ModaleProjet";
import Datas from "../../assets/Datas.json"
import { useSelector } from "react-redux";
import { Sticky } from "../../Features/selector";
import { motion } from "framer-motion";
import { routeVariants } from "../../Features/routeVariants";

const Projets = () => {

    const isSticky = useSelector(Sticky)
    
    return (<motion.div layout transition={{
        layout: { duration: 0 }
      }}  variants={routeVariants} initial="initial" animate="final" exit="exit">
        <HelmetProvider>
                <title>Mes projets</title>
            </HelmetProvider>

{isSticky?  <div className="decal2"> <h1>Mes projets</h1>
            <div className="separator"></div>
            {Datas.map(({id, nom, photo, adresse, GithubCode, description, compétences}) => 
            <CardProjet id={id} nom={nom} photo={photo} adresse={adresse} git={GithubCode} descr={description} compt={compétences} key={id} />)}<ModaleProjet /></div> :  <div> <h1>Mes projets</h1>
            <div className="separator"></div>
            {Datas.map(({id, nom, photo, adresse, GithubCode, description, compétences}) => 
            <CardProjet id={id} nom={nom} photo={photo} adresse={adresse} git={GithubCode} descr={description} compt={compétences} key={id} />)}<ModaleProjet />
</div> }
          

    </motion.div>)
}

export default Projets;