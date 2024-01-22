import { HelmetProvider } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Sticky } from "../../Features/selector";
import CompetencesList from "../../Components/CompetencesList";
import { HashLink as Link } from "react-router-hash-link";
import Arrow from "../../assets/ArrowUp.svg"
import { motion } from "framer-motion";
import { routeVariants } from "../../Features/routeVariants";
import "../../Style/Pages/Competences/competences.scss";
import { currentTheme } from "../../Features/selector";

const Competences = () => {
    const isSticky = useSelector(Sticky)
    const colors = useSelector(currentTheme)
    
    return(
<div className={"competences " +colors}>
        
            <HelmetProvider>
                <title>Mes compétences</title>
            </HelmetProvider>
            {isSticky? <div><motion.div layout><div className="decal2" id="up"><CompetencesList /></div></motion.div><Link smooth to="/competences#up"><img src={Arrow} alt="retour en haut" className="ArrowUp" /></Link></div> : <div><motion.div variants={routeVariants} layout transition={{
            layout: { duration: 0 }
          }} initial="initial" animate="final"><div><CompetencesList /></div></motion.div></div>}
          
      </div>

    )
}

export default Competences;