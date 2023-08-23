import { HelmetProvider } from "react-helmet-async";
import "../../Style/Pages/Home/home.scss"

const Home = () => {

    return (
        <div className="home">
            <HelmetProvider>
                <title>Portfolio de Bastien BARYLA</title>
            </HelmetProvider>

        </div>
    )
}

export default Home;