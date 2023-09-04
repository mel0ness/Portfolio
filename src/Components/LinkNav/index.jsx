import { Link, useLocation } from "react-router-dom"

const LinkNav = (Props) => {

    const path = useLocation().pathname;

    return(<div>

{path===Props.to? <Link onClick={() => Props.funct()} to={Props.to} className={"onglet ongletActif " + Props.class}>{Props.name}</Link>
: <Link onClick={() => Props.funct()} to={Props.to} className={"onglet " + Props.class}>{Props.name}</Link> }
        
        
        
        </div>)
}

export default LinkNav;