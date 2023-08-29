import { HelmetProvider } from "react-helmet-async";
import "../../Style/Pages/Home/home.scss"
import Photo from "../../assets/Moi.jpg"
import { useSelector } from "react-redux";
import { Sticky } from "../../Features/selector";


const Home = () => {

    const isSticky = useSelector(Sticky)

    return (
        <div>
            {isSticky? <div className="home decal">
            <HelmetProvider>
                <title>Portfolio de Bastien BARYLA</title>
            </HelmetProvider>
            <h1>Présentation</h1>
            <div className="separator"></div>
            <div className="presentation"><span className="bold">Passionné</span> par le monde du code et du net, j&apos;ai commencé en autodidacte avant de me lancer dans une formation pour apprendre diverses compétences telles que REACT, REDUX, ou approfondir mes connaissances en Javascript.</div>
           
<img src={Photo} alt="Photo de Bastien BARYLA" className="mainPhoto"/>
<h2>Ambitions</h2>
            <div className="separator"></div>
<div className="presentation">Mon objectif premier est de découvrir encore plus et d&apos;apprendre en intégrant une équipe de cet univers. Mais les projets solo ne m&apos;effraient pas. Si vous voulez en apprendre plus sur mon parcours, n&apos;hésitez pas à consulter la rubrique &quot;Mon histoire&quot;.</div>

        </div> : <div className="home">
            <HelmetProvider>
                <title>Portfolio de Bastien BARYLA</title>
            </HelmetProvider>
            <h1>Présentation</h1>
            <div className="separator"></div>
            <div className="presentation"><span className="bold">Passionné</span> par le monde du code et du net, j&apos;ai commencé en autodidacte avant de me lancer dans une formation pour apprendre diverses compétences telles que REACT, REDUX, ou approfondir mes connaissances en Javascript.</div>
           
<img src={Photo} alt="Photo de Bastien BARYLA" className="mainPhoto"/>
<h2>Ambitions</h2>
            <div className="separator"></div>
<div className="presentation">Mon objectif premier est de découvrir encore plus et d&apos;apprendre en intégrant une équipe de cet univers. Mais les projets solo ne m&apos;effraient pas. Si vous voulez en apprendre plus sur mon parcours, n&apos;hésitez pas à consulter la rubrique &quot;Mon histoire&quot;.</div>

        </div> }
        
        </div>
    )
}

export default Home;