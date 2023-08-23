import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./Style/Utils/global.scss"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import ReactHelmet from './Components/Helmet';


function App() {

  return (

    <Router>
      <ReactHelmet />
<Header />
      <Routes>
<Route exact path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
