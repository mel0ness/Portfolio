import { HelmetProvider } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Sticky } from "../../Features/selector";
import CompetencesList from "../../Components/CompetencesList";
import { HashLink as Link } from "react-router-hash-link";
import Arrow from "../../assets/ArrowUp.svg"
import { motion } from "framer-motion";
import { routeVariants } from "../../Features/routeVariants";

const Competences = () => {
    const isSticky = useSelector(Sticky)
    
    return(

        <motion.div variants={routeVariants} layout transition={{
            layout: { duration: 0 }
          }} initial="initial" animate="final">
            <HelmetProvider>
                <title>Mes compétences</title>
            </HelmetProvider>
            {isSticky? <div className="decal2" id="up"><CompetencesList /><Link smooth to="/competences#up"><img src={Arrow} alt="retour en haut" className="ArrowUp" /></Link></div> : <div><CompetencesList /></div>}
          
        </motion.div>

    )
}

export default Competences;