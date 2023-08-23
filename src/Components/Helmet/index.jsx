import { Helmet, HelmetProvider } from "react-helmet-async"
import Logo from "../../assets/logo.png"

const ReactHelmet = () => {

return (
  <HelmetProvider>
    <Helmet>
        <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <link rel="icon" href={Logo}/>
    <meta name="description" content="Portfolio de Bastien BARYLA - Développeur Web" />
    </Helmet>
    </HelmetProvider>
)
}

export default ReactHelmet;