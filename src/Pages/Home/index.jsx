import { HelmetProvider } from "react-helmet-async";
import "../../Style/Pages/Home/home.scss"
import Photo from "../../assets/Moi.jpg"
import { useSelector } from "react-redux";
import { Sticky, currentTheme } from "../../Features/selector";
import { Link } from "react-router-dom";
import ScrollTop from "../../Features/scrollTop";
import { motion } from "framer-motion";
import { routeVariants } from "../../Features/routeVariants";
import CV from "../../assets/CV.pdf"


const Home = () => {

   const colors = useSelector(currentTheme)
    const isSticky = useSelector(Sticky)



    return (
        <motion.div variants={routeVariants} initial="initial" animate="final" exit="exit" key="Home">
            {isSticky? <div className={"home decal " +colors}>
            <HelmetProvider>
                <title>Portfolio de Bastien BARYLA</title>
            </HelmetProvider>
            <h1>Présentation</h1>
            <div className={"separator " +colors}></div>
            <div className="presentation"><span className="bold">Passionné</span> par le monde du code et du net, j&apos;ai commencé en autodidacte avant de me lancer dans une formation pour apprendre diverses compétences telles que REACT, REDUX, ou approfondir mes connaissances en Javascript.</div>
            <div className="presentation Link"><a href={CV} download target="_blank" rel="noreferrer" className={"bold CVLink "+colors}>Télécharger mon CV</a></div>
           
<img src={Photo} alt="Photo de Bastien BARYLA" className={"mainPhoto " +colors}/>
<h2>Ambitions</h2>
            <div className={"separator " +colors}></div>
<div className="presentation">Mon objectif premier est de découvrir encore plus et d&apos;apprendre en intégrant une équipe de cet univers. Mais les projets solo ne m&apos;effraient pas. Si vous voulez en apprendre plus sur mon parcours, n&apos;hésitez pas à consulter la rubrique <Link onClick={() => ScrollTop()} className={"lienHome " +colors} to="/histoire">&quot;Mon histoire&quot;</Link>.</div>
 
<div className={"separator " +colors}></div>
<div className="presentation">Vous pouvez également consulter <Link onClick={() => ScrollTop()} className={"lienHome " +colors} to="/projets">mes projets</Link> réalisés!</div>

        </div> : <div className={"home " +colors}>
            <HelmetProvider>
                <title>Portfolio de Bastien BARYLA</title>
            </HelmetProvider>
            <h1>Présentation</h1>
            <div className={"separator " +colors}></div>
            <div className="presentation"><span className="bold">Passionné</span> par le monde du code et du net, j&apos;ai commencé en autodidacte avant de me lancer dans une formation pour apprendre diverses compétences telles que REACT, REDUX, ou approfondir mes connaissances en Javascript.</div>
            <div className="presentation Link"><a href={CV} download="CV-BB.pdf" target="_blank" rel="noreferrer" className={"bold CVLink "+colors}>Télécharger mon CV</a></div>
           
<img src={Photo} alt="Photo de Bastien BARYLA" className={"mainPhoto " +colors}/>
<h2>Ambitions</h2>
            <div className={"separator " +colors}></div>
<div className="presentation">Mon objectif premier est de découvrir encore plus et d&apos;apprendre en intégrant une équipe de cet univers. Mais les projets solo ne m&apos;effraient pas. Si vous voulez en apprendre plus sur mon parcours, n&apos;hésitez pas à consulter la rubrique <Link onClick={() => ScrollTop()} className={"lienHome " +colors} to="/histoire">&quot;Mon histoire&quot;</Link>.</div>

<div className={"separator " +colors}></div>
<div className="presentation">N&apos;hésitez pas à consulter <Link onClick={() => ScrollTop()} className={"lienHome " +colors} to="/projets">mes projets</Link> réalisés!</div>
 
        </div> }
        
        </motion.div>
    )
}

export default Home;