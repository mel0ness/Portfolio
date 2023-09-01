import CompetenceSection from "../CompetenceSection"
import CompetencesBarre from "../CompetencesBarre"
import "../../Style/Components/CompetencesList/competenceslist.scss"

const CompetencesList = () => {
    return (<div>
        <h1>Compétences</h1>
    <div className="separator"></div>
<CompetencesBarre name="HTML" pourcent="80" color="DC4A25" duration={1} delay={0} />
<CompetencesBarre name="CSS" pourcent="70" color="244BDD" duration={2} delay={1}/>
<CompetencesBarre name="Figma" pourcent="70" color="F86E60" duration={3} delay={2} />
<CompetencesBarre name="REDUX" pourcent="70" color="815ABD" duration={4} delay={3}/>
<CompetencesBarre name="JS" pourcent="60" color="EFD80B" duration={5} delay={4}/>
<CompetencesBarre name="REACT" pourcent="60" color="5FD3F3" duration={6} delay={5}/>
<CompetencesBarre name="Sass" pourcent="50" color="C76494" duration={7} delay={6}/>
<CompetencesBarre name="Jest" pourcent="40" color="C41F2D" duration={8} delay={7}/>
<CompetencesBarre name="PHP" pourcent="5" color="7377AE" duration={9} delay={8}/>
<div className="separatorBIG" id="HTML"></div>
<CompetenceSection name="HTML" pourcent="80" color="DC4A25" />
<div className="competencesDescr">Compétences de base pour développer sur le net. Ma première approche a été en autodidacte et il s&apos;agit de la notion la plus rapide et facile à apprendre. (<span className="quote">Squelette d&apos;un site web</span>)</div>
<div className="separatorBIG" id="CSS"></div>
<CompetenceSection name="CSS" pourcent="70" color="244BDD" />
<div className="competencesDescr">Deuxième notion aprise en autodidacte mais il me manquait quelques notions importantes pour bien la maîtriser (<span className="quote">La puissance des différents display</span> par exemple). Ma formation m&apos;a permis de compléter ces notions et de savoir les maîtriser sans grande difficulté. </div>
<div className="separatorBIG" id="Figma"></div>
<CompetenceSection name="Figma" pourcent="70" color="F86E60" />
<div className="competencesDescr">Complétement découvert pendant ma formation, cet outil est un plaisir pour travailler avec des personnes ayant des idées précises de leur <span className="quote">design</span>. Il permet aussi de partager des idées et de travailler efficacement en équipe sur des maquettes.</div>
<div className="separatorBIG" id="REDUX"></div>
<CompetenceSection name="REDUX" pourcent="70" color="815ABD"/>
<div className="competencesDescr">Le premier state manager que j&apos;ai pu apréhender durant ma formation. Cet outil permet vraiment de simplifier le stockage de données et des préferences utilisateurs par exemple. (Un top pour éviter le <span className="quote">Props Drilling</span> quand on travaille avec REACT)
</div>
<div className="separatorBIG" id="JS"></div>
<CompetenceSection name="JS" pourcent="60" color="EFD80B"/>
<div className="competencesDescr">Ce language est la base du code frontend, il permet de <span className="quote">s&apos;amuser</span> avec le DOM et de donner une possibilité d&apos;interaction pour l&apos;utilisateur. Language trés permissif mais qui permet d&apos;avoir une première logique de language. Sa compléxité réside dans ses évolutions et ses nombreuses syntaxes qui existe encore sur internet. Ma première approche a été dans la conception d&aposun <span className="quote">Click and Collect</span> pour mon ancienne entreprise, mais aussi utilisé pour rendre les interfaces des sites développés plus amicales.</div>
<div className="separatorBIG" id="REACT"></div>
<CompetenceSection name="REACT" pourcent="60" color="5FD3F3"/>
<div className="competencesDescr"><span className="quote">Premier Framework</span> auquel j&apos;ai pu toucher. Celui-ci a révolutionné ma façon de voir la conception d&apos;un site web, de nombreuses librairies le rendent puissant. Son fonctionnement par composants le rend vraiment accessible et agréable.</div>
<div className="separatorBIG" id="Sass"></div>
<CompetenceSection name="Sass" pourcent="50" color="C76494"/>
<div className="competencesDescr">Avoir enfin du CSS avec une <span className="quote">logique de language</span>, qui plus est qui se marie bien avec le fonctionnement par composant de REACT. Cet outil est trés puissant, je serait vraiment partant pour le maîtriser au mieux dans l&apos;avenir</div>
<div className="separatorBIG" id="Jest"></div>
<CompetenceSection name="Jest" pourcent="40" color="C41F2D"/>
<div className="competencesDescr">Ne <span className="quote">jamais sous estimer</span> l&apos;importance de tester son site internet, cet outil m&apos;a permis de ne plus chercher bêtement certaines erreur et de pouvoir mieux cibler les défaillances de certaines parties de mon code.</div>
<div className="separatorBIG" id="PHP"></div>
<CompetenceSection name="PHP" pourcent="5" color="7377AE"/>
<div className="competencesDescr">Language très peu travaillé, je l&apos;ai utilisé pour les système de réservation ou de Click and Collect, ceci permettait de récupérer les données du formulaire et d&apos;envoyer un mail au destinataire désiré de manière automatique, avec une redirection vers une page de confirmation. En découvrant le PHP, je me suis rendu compte que la logique de language est <span className="quote">presque</span> similaire à celle du JS, et grâce à mon apprentissage du JS je n&apos;ai pas été perdu en le travaillant.</div>
<div className="separatorBIG"></div></div>
    )
}

export default CompetencesList;