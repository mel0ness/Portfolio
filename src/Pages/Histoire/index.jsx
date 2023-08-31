import { useSelector } from "react-redux";
import { Sticky } from "../../Features/selector";
import { HelmetProvider } from "react-helmet-async";
import HistoireDatas from "../../Components/HistoireDatas";

const Histoire = () => {

    const isSticky = useSelector(Sticky)
    return(
        <div>
               <HelmetProvider>
                <title>Mon histoire</title>
            </HelmetProvider>
 {isSticky? 
 <div className="decal"><HistoireDatas /></div>
 : <div><HistoireDatas /></div>
}           




        </div>
    )
}

export default Histoire;