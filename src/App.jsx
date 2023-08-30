import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./Style/Utils/global.scss"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Projets from './Pages/Projets';
import ReactHelmet from './Components/Helmet';
import { Provider } from "react-redux";
import store from './Features/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";


function App() {
  let persistore = persistStore(store);
  return (
    <Provider store={store}>
    <PersistGate persistor={persistore}>
    <Router>
      <ReactHelmet />
<Header />
      <Routes>
<Route exact path='/' element={<Home />} />
<Route path='/projets' element={<Projets />} />
      </Routes>
      <Footer />
    </Router></PersistGate></Provider>
  )
}

export default App
