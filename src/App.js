import Landing from './Components/Landing/Landing';
import NavBar from './Components/Navigation/Navbar';
import Footer from './Components/Navigation/Footer';
import WomenStore from './Components/Women/WomenStore';
import MenStore from './Components/Men/MenStore';
import ProductDetail from './Components/Product/ProductDetail'
import './Style.scss';
import './image-gallery.css';
import './image-gallery.scss';
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation();
  return (
    <div >
      <NavBar />
      <div style={{ minHeight: 'calc(100vh - 80px)' }} >
        <AnimatePresence exitBeforeEnter >
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Landing} />
            <Route exact path="/men" component={MenStore} />
            <Route exact path="/women" component={WomenStore} />
            <Route exact path="/product/:id" component={ProductDetail} item />
          </Switch>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
