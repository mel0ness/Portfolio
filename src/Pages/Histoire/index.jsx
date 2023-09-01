import { useSelector } from "react-redux";
import { Sticky } from "../../Features/selector";
import { HelmetProvider } from "react-helmet-async";
import HistoireDatas from "../../Components/HistoireDatas";
import { motion } from "framer-motion";
import { routeVariants } from "../../Features/routeVariants";


const Histoire = () => {


    const isSticky = useSelector(Sticky)
    return(
        <motion.div variants={routeVariants} initial="initial" animate="final" exit="exit">
               <HelmetProvider>
                <title>Mon histoire</title>
            </HelmetProvider>
 {isSticky? 
 <div className="decal2"><HistoireDatas /></div>
 : <div><HistoireDatas /></div>
}           




        </motion.div>
    )
}

export default Histoire;