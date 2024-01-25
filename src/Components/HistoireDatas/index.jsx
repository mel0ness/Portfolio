import "../../Style/Components/HistoireDatas/histoiredatas.scss"
import { useSelector } from "react-redux";
import { currentTheme } from "../../Features/selector";

const HistoireDatas = () => {

    const colors = useSelector(currentTheme)
    return (
        <div className={"histoire " +colors}>
        <h1>Etudes</h1>
    <div className="ParagHistoire">J&apos;ai commencé mon parcours étudiant dans une école de la faculté catholique de Lille. Et j&apos;y ai validé une licence en gestion des entreprises. Ces études ne m&apos;ont pas à proprement parler apporté mon premier emploi mais elles m&apos;ont permises de me développer personnellement et de découvrir des bases assez générales dans suffisamment de domaines qui allaient m&apos;être utiles plus tard.</div>
    <div className="separator"></div>
    <h2>Parcours Pro</h2>
    <div className="separator"></div>
    <div className="ParagHistoire">J&apos;ai ensuite trouvé mon premier emploi dans un bar-tabac-brasserie réputé de Lille dans lequel j&apos;ai commencé en tant qu&apos;employé polyvalent. Au fur et à mesure des années j&apos;ai gagné en expérience et j&apos;ai fini par devenir directeur de l&apos;établissement avec les responsabilités qui vont avec (Gestion d&apos;équipe, recrutement, négociation fournisseurs, gestion de la carte...). Cette expérience a été l&apos;occasion de mettre en pratique ce que j&apos;avais appris mais également de me confronter à de nombreux défis intéressants (Gestion d&apos;événements comme la braderie de Lille, évolution de l&apos;entreprise et de son offre en fonction du marché...).</div>
    <div className="separator"></div>
    <h2>Raisons de la reconversion</h2>
    <div className="separator"></div>
    <div className="ParagHistoire">C&apos;est durant cette expérience que je me suis rendu compte de mon envie pour cette reconversion et ce style de métier. En effet, durant la période du COVID et le premier confinement en 2020, j&apos;avais anticipé le besoin d&apos;une carte dématérialisée, et donc de la mise en place d&apos;un site internet pour l&apos;entreprise. Comme les finances étaient délicates à gérer, je me suis lancé dans le développement du site en autodidacte. Je me suis donc mis à apprendre l&apos;HTML et le CSS dans un premier temps pour donner l&apos;accès à la carte pour tout client. Puis dans la volonté de nous adapter j&apos;ai appris des bases de Javascript pour permettre la mise en ligne d&apos;une possibilité de click and collect ainsi qu&apos;une page de réservation pour la brasserie. Et ces services ont réellement bien fonctionné. J&apos;ai alors eu le contact pour un site d&apos;hôtel qui devait permettre les réservations en ligne. Ces sites étaient très basiques mais je me suis rendu compte de mon attrait pour ce monde, je voulais alors apprendre pour développer des sites plus importants et mieux travaillés. Suite à la vente de la brasserie (Retraite du gérant), je n&apos;ai pas souhaité continuer l&apos;expérience pour enfin me tourner vers ce qui me paraissait être la suite logique et donc cette formation OpenClassRoom.</div>
    <div className="ParagHistoire">J&apos;ai validé mon diplôme (Niveau bac+2 développeur web, RNCP niveau 5) en décembre 2023 après avoir travaillé sur divers modules :</div>
    <ul className="listeHistoire">
        <li><span className={"checkHistoire "+colors}>&#10003;</span>Intégration d&apos;un site et animations</li>
        <li><span className={"checkHistoire "+colors}>&#10003;</span>Javascript (Fetch, cookies, dynamisme d&apos;un site...)</li>
        <li><span className={"checkHistoire "+colors}>&#10003;</span>Gestion d&apos;un projet (Développement agile, cahier des charges, sprints, kanban,...)</li>
        <li><span className={"checkHistoire "+colors}>&#10003;</span>Testing d&apos;une application web (Jest)</li>
        <li><span className={"checkHistoire "+colors}>&#10003;</span>Amélioration du SEO et optimisation d&apos;un site.</li>
        <li><span className={"checkHistoire "+colors}>&#10003;</span>Création d&apos;une application React et utilisation de Redux</li>
    </ul>
        </div>
    )
}

export default HistoireDatas;