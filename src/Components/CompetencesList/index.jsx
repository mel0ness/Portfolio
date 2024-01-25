import CompetenceSection from "../CompetenceSection"
import CompetencesBarre from "../CompetencesBarre"
import "../../Style/Components/CompetencesList/competenceslist.scss"
import { useSelector } from "react-redux"
import { currentTheme } from "../../Features/selector"

const CompetencesList = () => {

    const colors = useSelector(currentTheme)
    return (<div>
        <h1>Compétences</h1>
    <div className="separator"></div>
<CompetencesBarre name="HTML" pourcent="90" color="DC4A25" duration={1} delay={0} />
<CompetencesBarre name="CSS" pourcent="80" color="244BDD" duration={2} delay={1}/>
<CompetencesBarre name="Figma" pourcent="80" color="F86E60" duration={3} delay={2} />
<CompetencesBarre name="REDUX" pourcent="70" color="815ABD" duration={4} delay={3}/>
<CompetencesBarre name="JS" pourcent="60" color="EFD80B" duration={5} delay={4}/>
<CompetencesBarre name="REACT" pourcent="60" color="5FD3F3" duration={6} delay={5}/>
<CompetencesBarre name="Sass" pourcent="50" color="C76494" duration={7} delay={6}/>
<CompetencesBarre name="Jest" pourcent="40" color="C41F2D" duration={8} delay={7}/> 
<CompetencesBarre name="PHP" pourcent="5" color="7377AE" duration={9} delay={8}/>
<div className={"separatorBIG " +colors} id="HTML"></div>
<CompetenceSection name="HTML" pourcent="90" color="DC4A25" />
<div className={"competencesDescr " +colors}>Compétences de base pour développer sur le net. Ma première approche a été en autodidacte et il s&apos;agit de la notion la plus rapide et facile à apprendre. (<span className={"quote " +colors}>Squelette d&apos;un site web</span>)</div>
<div className={"separatorBIG " +colors} id="CSS"></div>
<CompetenceSection name="CSS" pourcent="80" color="244BDD" />
<div className={"competencesDescr " +colors}>Deuxième notion apprise en autodidacte mais il me manquait quelques notions importantes pour bien la maîtriser (<span className={"quote " +colors}>La puissance des différents display</span> par exemple). Ma formation m&apos;a permis de compléter ces notions et de savoir les maîtriser sans grande difficulté. </div>
<div className={"separatorBIG " +colors} id="Figma"></div>
<CompetenceSection name="Figma" pourcent="80" color="F86E60" />
<div className={"competencesDescr " +colors}>Complètement découvert pendant ma formation, cet outil est un plaisir pour travailler avec des personnes ayant des idées précises de leur <span className={"quote " +colors}>design</span>. Il permet aussi de partager des idées et de travailler efficacement en équipe sur des maquettes.</div>
<div className={"separatorBIG " +colors} id="REDUX"></div>
<CompetenceSection name="REDUX" pourcent="70" color="815ABD"/>
<div className={"competencesDescr " +colors}>Le premier state manager que j&apos;ai pu appréhender durant ma formation. Cet outil permet vraiment de simplifier le stockage de données et des préférences utilisateurs par exemple. (Un top pour éviter le <span className={"quote " +colors}>Props Drilling</span> quand on travaille avec REACT)
</div>
<div className={"separatorBIG " +colors} id="JS"></div>
<CompetenceSection name="JS" pourcent="60" color="EFD80B"/>
<div className={"competencesDescr " +colors}>Ce langage est la base du code frontend, il permet de <span className={"quote " +colors}>s&apos;amuser</span> avec le DOM et de donner une possibilité d&apos;interaction pour l&apos;utilisateur. Langage très permissif mais qui permet d&apos;avoir une première logique de langage. Sa complexité réside dans ses évolutions et ses nombreuses syntaxes qui existent encore sur internet. Ma première approche a été dans la conception d&apos;un <span className={"quote " +colors}>Click and Collect</span> pour mon ancienne entreprise, mais je l&apos;ai également utilisé pour rendre les interfaces des sites développés plus amicales.</div>
<div className={"separatorBIG " +colors} id="REACT"></div>
<CompetenceSection name="REACT" pourcent="60" color="5FD3F3"/>
<div className={"competencesDescr " +colors}><span className={"quote " +colors}>Premier Framework</span> auquel j&apos;ai pu toucher. Celui-ci a révolutionné ma façon de voir la conception d&apos;un site web, de nombreuses librairies le rendent puissant. Son fonctionnement par composants le rend vraiment accessible et agréable.</div>
<div className={"separatorBIG " +colors} id="Sass"></div>
<CompetenceSection name="Sass" pourcent="50" color="C76494"/>
<div className={"competencesDescr " +colors}>Avoir enfin du CSS avec une <span className={"quote " +colors}>logique de langage</span>, qui plus est, qui se marie bien avec le fonctionnement par composant de REACT. Cet outil est très puissant, je serais vraiment intéressé pour approfondir ma maîtrise de cet outil à l&apos;avenir</div>
<div className={"separatorBIG " +colors} id="Jest"></div>
<CompetenceSection name="Jest" pourcent="40" color="C41F2D"/>
<div className={"competencesDescr " +colors}>Ne <span className={"quote " +colors}>jamais sous estimer</span> l&apos;importance de tester son site internet, cet outil m&apos;a permis de ne plus chercher bêtement certaines erreurs et de pouvoir mieux cibler les défaillances de certaines parties de mon code. Cela permet de compléter les tests unitaires simples.</div>
<div className={"separatorBIG " +colors} id="PHP"></div>
<CompetenceSection name="PHP" pourcent="5" color="7377AE"/>
<div className={"competencesDescr " +colors}>Langage très peu travaillé, je l&apos;ai utilisé pour les systèmes de réservation ou de Click and Collect, ceci permettait de récupérer les données du formulaire et d&apos;envoyer un mail au destinataire désiré de manière automatique, avec une redirection vers une page de confirmation. En découvrant le PHP, je me suis rendu compte que la logique basique de ce langage est <span className={"quote " +colors}>presque</span> similaire à celle du JS, et grâce à mon apprentissage du JS je n&apos;ai pas été perdu en le travaillant.</div>
<div className={"separatorBIG " +colors}></div></div>
    )
}

export default CompetencesList;