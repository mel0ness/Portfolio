import { BrowserRouter as Router } from 'react-router-dom';
import "./Style/Utils/global.scss"
import Header from './Components/Header';
import Footer from './Components/Footer';
import RoutesWithAnimation from './Components/RoutesWithAnimation';
import ReactHelmet from './Components/Helmet';
import { Provider } from "react-redux";
import store from './Features/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import LocationProvider from './Components/LocationProvider';



function App() {

  let persistore = persistStore(store);
  return (
    <Provider store={store}>
    <PersistGate persistor={persistore}>
  
    <Router>
      <ReactHelmet />
<Header />
<LocationProvider>
        <RoutesWithAnimation />
        </LocationProvider>
      <Footer />
    </Router>
    </PersistGate></Provider>
  )
}

export default App
