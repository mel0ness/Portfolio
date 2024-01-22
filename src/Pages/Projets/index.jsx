import { HelmetProvider } from "react-helmet-async";
import CardProjet from "../../Components/CardProjet";
import ModaleProjet from "../../Components/ModaleProjet";
import Datas from "../../assets/Datas.json"
import { useSelector } from "react-redux";
import { Sticky, currentTheme } from "../../Features/selector";
import { motion } from "framer-motion";
import { routeVariants } from "../../Features/routeVariants";
import "../../Style/Pages/Projets/projets.scss"

const Projets = () => {

    const isSticky = useSelector(Sticky)
    const colors = useSelector(currentTheme)
    
    return (<div className={"projets " +colors}>
        <HelmetProvider>
                <title>Mes projets</title>
            </HelmetProvider>

{isSticky?  <div><motion.div className="decal2" layout transition={{
                layout: { duration: 0 }
              }}  variants={routeVariants} initial="initial" animate="final" exit="exit"> <h1>Mes projets</h1>
            <div className="separator"></div>
            <div className="toBecomeFlex">
            {Datas.map(({id, nom, photo, adresse, GithubCode, description, compétences}) => 
            <CardProjet id={id} nom={nom} photo={photo} adresse={adresse} git={GithubCode} descr={description} compt={compétences} key={id} />)}</div></motion.div><ModaleProjet /></div> :  <div><motion.div layout transition={{
                layout: { duration: 0 }
              }}  variants={routeVariants} initial="initial" animate="final" exit="exit"> <h1>Mes projets</h1>
            <div className="separator"></div>
            <div className="toBecomeFlex">
            {Datas.map(({id, nom, photo, adresse, GithubCode, description, compétences}) => 
            <CardProjet id={id} nom={nom} photo={photo} adresse={adresse} git={GithubCode} descr={description} compt={compétences} key={id} />)}</div>
</motion.div><ModaleProjet /></div> }
          

    </div>)
}

export default Projets;